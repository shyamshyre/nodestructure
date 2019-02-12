var mongoose = require('mongoose');
var schema = mongoose.Schema

module.exports= mongoose.model('User',new Schema({name:String,password:String,admin:Boolean}));
