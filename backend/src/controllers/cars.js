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
            let end = false;
            let current = parseInt(req.query.current);
            let count = parseInt(req.query.count)
            fs.readdir(`${process.env.STATICS}/sold`, (err, files) => {
                if (err) 
                    return res.json( { result: 'error', description: err} );
                // Sort files
                files.sort().reverse();
                // Out of bounds
                console.log(files.length)
                if (current < 0) 
                    current = 0
                else if (current > files.length)
                    return res.json( { result: 'error', description: 'Out of bounds' } );
                else if (current + count > files.length) {
                    count = files.length - current;
                    end = true
                }
                // Create response
                const results = []
                for (let i = current; i < current + count; i++) {
                    results.push(`${process.env.API}/public/sold/${files[i]}`)
                }
                // Response
                return res.json( { result: 'ok', start: parseInt(current), end, count: results.length, results: results } );
            });
        } catch (error) {
            res.json( { result: 'error', description: error.description} );
            log.fatal(error);
        }
    }
};

module.exports = Controller;