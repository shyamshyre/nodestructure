'use strict'

var userservice = require('../services/userservice');

exports.register = function(req,res){
    console.log("Inside User - Controller -Register Method");
    userservice.register(req,res);
}

exports.forgotpassword = function(req,res){
    console.log("Inside User - Controller -Forgot Password Method");
    userservice.forgotpassword(req,res);
}