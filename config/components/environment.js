'use strict'
const joi = require('joi')

const envvarSchema=joi.object({
NODE_ENV:joi.string().allow(['development','testing','production','provision']).required()
}).unknown().required

const {error,value:envvars}=joi.validate(process.env,envvarSchema)
if(error){
    throw new Error('Environment Config Validation Error ${error.message}');
}
const config={
    env:envvars.NODE_ENV
}
module.export = config;