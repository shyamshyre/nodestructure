'use strict'
const config= require('./components')
if (process.env.type === 'DEV') {
   require('../modules');
  }
module.exports=config;