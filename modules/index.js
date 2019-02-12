'use strict'
const server = require('./server')
const config = require('../config/components')

if(process.env.type ==  "DEV"){
    console.log("Inside the DEvelopment Environment");
    server.StartServer(config.devconfig.SERVER_PORT);
}
