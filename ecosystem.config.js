module.exports = {
    apps:[{
            "name": "autodeluxegarage_api",
            "cwd": "./autodeluxegarage/backend",
            "script": "npm",
            "args": "start",
            "watch": false,
            "autorestart": true,
            "out_file": "logs/autodeluxegarage_api_app.log",
            "error_file": "logs/autodeluxegarage_api_error.log"
    }]
};