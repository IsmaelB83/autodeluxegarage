// Import node modules
const mongoose = require('mongoose');
// Import own modules
const CochesNet = require('./core/cochesnet');
const log = require('./log/log');

// Conectamos a mongo
connectToMongo();
async function connectToMongo () {
    try {
        // Coencto a la base de datos
        let db = await mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });
        log.info(`Conectado a mongodb ${db.connection.host}:${db.connection.port}/${db.connection.name}`);
        // Arranco la actualización de coches.net y lo programo para que se ejecute cada 30 minutos
        let cochesNet = new CochesNet();
        cochesNet.updateCars();
        setInterval(() => {
            cochesNet.updateCars.bind(cochesNet)();
        }, 3600000);
    } catch (error) {
        log.fatal(`Error conectando a mongo: ${error.errno} ${error.address}:${error.port}`);
    }
}

