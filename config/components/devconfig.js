'use strict'
const config={
devconfig:{
    MONGODB_DATABASE:'sportapp',
    MONGODB_USERNAME:'',
    MONGODB_PASSWORD:'',
    MONGODB_PORT:'27017',
    MONGODB_CONNSTRING:"mongodb://localhost:27017/sportapp",
    SERVER_PORT : 3000,
    MYSQL_USERNAME:'',
    MYSQL_PASSWOD:'',
    MYSQL_PORT:''
    
}
}
module.exports=config.devconfig;

