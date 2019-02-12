'use strict'
const joi = require('joi');

const envvarSchema= joi.object({
PORT:joi.number().required
}).unknown.required()

const {error, value:envVars}=joi.validate(process.env,envvarSchema)
if(error){
    throw new Error('Config Validation Error : ${error.message}')
}

const config={
    server:{
        port:envVars.PORT
    }
}

module.export=config;