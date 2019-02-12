// 'use strict'
const logger =require('winston')
const type= process.env.type
logger.info(`Starting '${type}' process`, {pid:process.pid})

if(type == 'PROD'){
    require('./config')
    console.log("Application running inside the Production Environment");
}else if (type =="DEV"){
    require('./config')
    console.log("Application running inside the Development Environment");
}else if (type == 'TEST'){
    require('./config')
    console.log("Application running inside the Test Environment");
}

