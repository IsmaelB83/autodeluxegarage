// Import Node Modules
const $ = require('cheerio');
const fs = require('fs');
// Import own modules
const Car = require('../models/car');
const log = require('../log/log');

// Controller de la ruta de /cars
const Controller = {

    list: async (req, res) => {
        try {
            let cars = {}
            cars = await Car.find({sold: false}).sort({id: -1});
            if (!cars || cars.length < 1) {
                res.json( { result: 'error', description: 'not found'} );
                return;
            }
            res.json( { result: 'ok', count: cars.length, results: cars } );
        } catch (error) {
            res.json( { result: 'error', description: error.description} );
            log.fatal(error);
        }
    },
    get: async (req, res) => {
        try {
            let car = await Car.findOne({id: req.params.id});
            if (!car) {
                console.log(req);
                res.json( { result: 'error', description: 'not found'} );
                return;
            } 
            res.json( { result: 'ok', count: 1, results: car } );
        } catch (error) {
            res.json( { result: 'error', description: error.description} );
            log.fatal(error);
        }
    },
    sold: async (req, res) => {
        try {
            fs.readdir(`${process.env.PUBLIC_URL}/img/vendidos/`, (err, files) => console.log(files))
            res.json( { result: 'ok', count: 1, results: car } );
        } catch (error) {
            res.json( { result: 'error', description: error.description} );
            log.fatal(error);
        }
    }
};

module.exports = Controller;