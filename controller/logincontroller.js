'use strict'

var loginservice = require('../services/loginservice')
/**
 * 
 */
exports.login = function(req,res){
    console.log("Inside Login - Controller -Login Method");
    loginservice.login(req,res);
}

exports.register = function(req,res){
    console.log("Inside Login - Controller - Register Method");
    loginservice.register(req,res);
}
exports.forgotpassword = function(req,res){
    console.log("Inside Login - Controller - ForgotPassword Method");
    loginservice.register(req,res);
}
