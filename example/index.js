var http = require("http");
var express = require("express");
var winston = require("winston");
var webSocketTransport = require("../index");
var server = http.createServer(app);

var app = express()
    .use(express.static("."));

var logger = winston.createLogger({
    transports: [
        new webSocketTransport({ level: 'info', port: 3001 }),
    ],
    exitOnError: false
});

server.listen(3000);

setInterval(function () {
    logger.info("New Random Number is " + parseInt(Math.random() * 1000000));
}, 500);
