// Load env configuration
require('dotenv').config()
// Import Node Modules
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const fs = require('fs');
const http = require('http');
const https = require('https');
const cors = require('cors');
// Import Own Modules
const CochesNet = require('./core/cochesnet');
const routes = require('./routers/routers.js');
const log = require('./log/log');

// Creating express app
const app = express();
log.info('Starting API REST...');

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routers
routes(app);

// Static files
app.use('/public', express.static(path.join(__dirname, '../public')));
// Store statics
process.env.STATICS = path.join(__dirname, '../public');

// Errorhandlers
if ('development' === app.get('env')) {
    app.use(errorHandler);
}

// Servidor HTTP
try {
    const httpServer = http.createServer(app);
    httpServer.listen(process.env.HTTP, () => {
        log.info(`HTTP OK - Server running on port ${process.env.HTTP}`);
    });        
} catch (error) {
    log.fatal(`HTTP Error - Server not running: ${error.code} ${error.path}`);
}

// Servidor HTTPS
try {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/autodeluxegarage.es/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/autodeluxegarage.es/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/autodeluxegarage.es/chain.pem', 'utf8');
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(process.env.HTTPS, () => {
        log.info(`HTTPS OK - Server running on port ${process.env.HTTPS}`);
    });
} catch (error) {
    log.fatal(`HTTPS Error - Server not running: ${error.code} ${error.path}`);
}

// --------------------
// Conexión robusta a MongoDB
// --------------------
async function connectToMongo() {
    const mongoURL = process.env.MONGODB;

    mongoose.connection.on('connected', () => {
        log.info(`MongoDB conectado: ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`);
    });

    mongoose.connection.on('error', (err) => {
        log.error('Error en la conexión MongoDB:', err);
    });

    mongoose.connection.on('disconnected', () => {
        log.warn('Conexión con MongoDB perdida. Reintentando en 5s...');
        setTimeout(connectToMongo, 5000);
    });

    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        // Solo iniciar scrapping si la conexión es exitosa
        log.info('Iniciando scrapping de coches.net...');
        let cochesNet = new CochesNet();
        cochesNet.updateCars();

        // Ejecuta cada hora
        setInterval(() => {
            cochesNet.updateCars.bind(cochesNet)();
        }, 3600000);

    } catch (err) {
        log.error(`Error conectando a MongoDB: ${err.message}`);
        setTimeout(connectToMongo, 5000);
    }
}

connectToMongo();

// --------------------
// Captura de errores globales de Node
// --------------------
process.on('uncaughtException', (err) => {
    log.fatal('Uncaught Exception:', err);
    // Opcional: pm2 se encarga de reiniciar el proceso si es fatal
});

process.on('unhandledRejection', (reason, promise) => {
    log.fatal('Unhandled Rejection:', reason);
});
