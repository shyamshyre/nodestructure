'use strict'
const express = require('express');
const router = express.Router();


var usercontroller = require('../controller/usercontroller')

router.get('/register', usercontroller.register);
router.get('/forgotpasword', usercontroller.forgotpassword);


module.exports =router;