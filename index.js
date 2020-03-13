const Transport = require('winston-transport');
const socket = require('ws');

module.exports = class webSocketTransport extends Transport {
    constructor(opts) {
        super(opts);
        // use the capabilities from a class to extend the propierties from socket.
        this.wss = new socket.Server({ port: opts.port });
        this.wss.on('connection', function connection(ws) {
           // do any u want
        });
    }


    log(info, callback) {
        this.wss.clients.forEach(function each(client) {
            client.send(info.message);
        });
        callback();
    }
};