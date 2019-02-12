'use strict'


exports.register = function(req,res){
    console.log("Inside User - Service -Register Method");
    res.send("Inside User - Service -Register Method");
}

exports.forgotpassword = function(req,res){
    console.log("Inside User - Service - ForgotPassword Method");
    res.send("Inside User - Service -ForgotPassword Method");
}