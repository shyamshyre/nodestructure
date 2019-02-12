'use strict'

/**
 * 
 */
exports.login = function(req,res){
    console.log("Inside Login - Service -Login Method");
    res.send('Inside Login - Service -Login Method');
}
exports.register = function(req,res){
    console.log("Inside Login - Service - Register Method");
    res.send('Inside Login - Service - Register Method');
}
exports.forgotpassword = function(req,res){
    console.log("Inside Login - Service - ForgotPassword Method");
    res.send('Inside Login - Service - ForgotPassword Method');
}