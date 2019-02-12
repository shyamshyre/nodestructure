'use strict'
const express = require('express');
const router = express.Router();


var logincontroller = require('../controller/logincontroller')

router.get('/', logincontroller.login);
router.get('/register', logincontroller.register);
router.get('/forgotpasword', logincontroller.forgotpassword);


module.exports =router;