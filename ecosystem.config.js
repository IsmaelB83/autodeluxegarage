module.exports = {
    apps:[{
            "name": "autodeluxegarage_api",
            "cwd": "./autodeluxegarage/backend/",
            "script": "npm",
            "args": "start",
            "watch": false,
            "autorestart": true,
            "out_file": "./logs/autodeluxegarage_api_out.log",  // Path for output logs
            "error_file": "./logs/autodeluxegarage_api_error.log"  // Path for error logs
    },
    {
            "name": "gcvbullfighters_roster",
            "cwd": "./gcvbullfighters/",
            "script": "npm",
            "args": "start",
            "watch": false,
            "autorestart": true,
            "out_file": "./logs/gcvbullfighters_api_out.log",  // Path for output logs
            "error_file": "./logs/gcvbullfighters_api_error.log"  // Path for error logs
    }]
};
