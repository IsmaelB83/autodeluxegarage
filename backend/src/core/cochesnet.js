// Import node modules
const cheerio = require('cheerio');
const request = require('request-promise');
// Import own modules
const Car = require('../models/car');
const log = require('../log/log');


class CochesNet {

    // Método para captura de anuncios desde carfactory, y actualización de mongo
    updateCars () {
        log.info(`Iniciando proceso de carga de anuncios desde COCHES.NET... ${process.env.API_CARFACTORY}${process.env.CONTRACT}`);
        this.updateCarsAsync();
    }

    async updateCarsAsync () {
        try {
            // Obtengo el JSON de los coches publicados
            let result = await this.getCarList(`${process.env.API_CARFACTORY}${process.env.CONTRACT}`);
            if (result) {
                // Recorro el array grabando en base de datos los que no existan, y actualizando los que ya existen
                for (let i = 0; i < result.length; i++) {
                    const item = result[i];
                    let car = new Car({...item});
                    let exists = await Car.findOne({id: car.id});
                    if (!exists) {
                        car.sold = false;
                        let savedCar = car.save();
                        if (savedCar) {
                            log.info(`Anuncio creado en mongo: ${car.id}`);
                        }
                        else {
                            log.error(`Error creando anuncio en mongo: ${car.id}`);
                        }
                    } else {
                        // Si el coche ya existe en mongo desactivo el flag de vendido (en caso de que estuviese marcado)
                        if (!compareTo(exists,item) || exists.sold) {
                            exists.brand = item.brand;
                            exists.colour = item.colour;
                            exists.image = item.image;
                            exists.images = item.images;
                            exists.brand = item.brand;
                            exists.name = item.name;
                            exists.year = item.year;
                            exists.oil = item.oil;
                            exists.kilometers = item.kilometers;
                            exists.price = item.price;
                            exists.power = item.power;
                            exists.shift = item.shift;
                            exists.sold = false;
                            let savedCar = await exists.save();
                            if (savedCar) {
                                log.info(`Actualizando anuncio en mongo: ${exists.id} - ${exists.name} ${exists.price}`);
                            }
                            else {
                                log.error(`Error reactivando anuncio en mongo: ${exists.id} - ${exists.name} ${exists.price}`);
                            }
                        }
                    }
                }
                // Recorro los anuncios que tengo en mongo sin vender, y en caso de no existir en la lista devuelta por coches.net los marco como vendidos
                let carsMongo = await Car.find({sold: false});
                for (let i = 0; i < carsMongo.length; i++) {
                    let found = false;
                    for (let j = 0; j < result.length; j++) {
                        if (carsMongo[i].id === result[j].id) found = true;
                    }
                    // Si no lo he encontrado lo marco como vendido
                    if (!found) {
                        carsMongo[i].sold = true;
                        let savedCar = await carsMongo[i].save();
                        if (savedCar) {
                            log.info(`Anuncio dado de baja en mongo: ${carsMongo[i].id} - ${carsMongo[i].name} ${carsMongo[i].price}`);
                        }
                        else {
                            log.error(`Error dando de baja anuncio en mongo: ${carsMongo[i].id} - ${carsMongo[i].name} ${carsMongo[i].price}`);
                        }
                    }
                }
            } else {
                log.error(`No se ha recuperado ningún anuncio desde Coches.Net.`);
            }
        } catch (error) {
           log.fatal(error);
        }
    }

    async getCarList (url) {
        try {
            // Variables locales
            const carList = [];
            // Obtengo la página de anuncios publicados
            const result = await request(url);
            const $ = cheerio.load(result)
            // Listado de anuncios de la tabla principal
            let anuncios = Array.from($(".fblack", result));
            for (let i = 0; i < anuncios.length; i++) {
                const item = anuncios[i];
                let car = {};
                if (item.attribs.href !== undefined && item.attribs.href !== '') {
                    // Id
                    let hrefArray = item.attribs.href.split('/');
                    car.id = hrefArray[3];
                    // Url y nombre
                    car.url = `${process.env.API_CARFACTORY}${item.attribs.href}`;
                    car.name = $("#titprint", item).text().trim();
                    // Año, Combustible, Color, Kilometros y Precio
                    let rowTable = $(".fld_v", item);
                    let spans = $("span",rowTable);
                    car.year = spans[0].childNodes[0].data.trim();
                    car.oil = spans[1].childNodes[0].data.trim();
                    car.colour = spans[2].childNodes[0].data.trim();
                    car.kilometers = spans[3].childNodes[0].data.trim() + 'km';
                    car.price = spans[4].childNodes[0].data + '€';
                    // Datos de detalle
                    car = await this.getCarDetails(car.url, car);
                    if (car.images.length > 0) car.image = car.images[0].src;
                    // Añado coche al listado
                    carList.push(car);
                }
            }
            return carList;
        } catch (error) {
            log.fatal(error);
        }
    }

    async getCarDetails(url, car) {
        try {
            // Variables locales
            let col, spans;
            // Obtengo el HTML de la web
            const details = await request(url);
            const $ = cheerio.load(details)
            // Brand, Power
            col = $("#ftcol2", details);
            spans = $("li > span", col);
            car.brand = spans[0].childNodes[0].data.trim();
            car.power = spans[2].childNodes[0].data.trim().replace(' ','');
            // Shift
            col = $("#ftcol6", details);
            spans = $("li > span", col);
            car.shift = spans[2].childNodes[0].data.trim();
            // Imagenes
            let widget = $(".widget", details);
            car.images = [];
            $("img", widget).each(function(i, item){
                let src = item.attribs.src;
                src = src.replace('_m.', '_xl.');
                src = src.replace('/520x/', '');
                src = src.replace('http://','https://');
                car.images.push({src: src});
            });
            return car;
        } catch (error) {
            log.fatal(`Error obteniendo detalles del anuncio ${car.id}`);
            log.fatal(error);
        }
    }
}


compareTo = function(car1, car2) {
    let equal = true;
    equal = car1.brand===car2.brand?equal:false;
    equal = car1.colour===car2.colour?equal:false;
    equal = car1.image===car2.image?equal:false;
    equal = car1.images.length===car2.images.length?equal:false;
    for (let i = 0; i < car1.images.length; i++) {
        if (!car1.images[i] || !car2.images[i]) {
            equal = false;
        } else {
            equal = car1.images[i].src===car2.images[i].src?equal:false;
        }
    }
    equal = car1.brand===car2.brand?equal:false;
    equal = car1.name===car2.name?equal:false;
    equal = car1.year===car2.year?equal:false;
    equal = car1.oil===car2.oil?equal:false;
    equal = car1.kilometers===car2.kilometers?equal:false;
    equal = car1.price===car2.price?equal:false;
    equal = car1.power===car2.power?equal:false;
    equal = car1.shift===car2.shift?equal:false;
    equal = car1.sold===false?equal:false;
    return equal;
}

module.exports = CochesNet;