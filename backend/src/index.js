// Import Node Modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const errorHandler = require('errorhandler');
const fs = require('fs');
const http = require('http');
const https = require('https');
const cors = require('cors');
// Import Own Modules
const mongoose = require('./database');
const config = require('./config.json');
const routes = require('./routers/routers.js');
const log = require('./log/log');


// Creating express app
const app = express();
log.info('Starting API REST...');

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routers
routes(app);

// Static files
app.use('/public', express.static(path.join(__dirname, '../public')));

// Errorhandlers
if ('development' === app.get('env')) {
    app.use(errorHandler);
}

// Servidor HTTP
try {
    const httpServer = http.createServer(app);
    httpServer.listen(config.portHttp, () => {
        log.info(`HTTP OK - Server running on port ${config.portHttp}`);
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
    httpsServer.listen(config.portHttps, () => {
        log.info(`HTTPS OK - Server running on port ${config.portHttps}`);
    });
} catch (error) {
    log.fatal(`HTTPS Error - Server not running: ${error.code} ${error.path}`);
}

