// Import node modules
const express = require('express');
// Import own modules
const ControllerCars = require('../controllers/cars');

// Creo el router y le asigno los controladores
const router = express.Router();
module.exports = app => {
    // API de la colección de coches
    router.get('/cars', ControllerCars.list);
    router.get('/cars/:id', ControllerCars.get);
    // Paso el router a express
    app.use(router);
}