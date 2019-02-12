'use strict'
const logger = require('./logger')
const  jwt= require('./jwt')
const middleware={
    logger,jwt
}
module.exports= middleware;