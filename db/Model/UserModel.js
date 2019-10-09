const monogoose = require('mongoose');
const Schema = monogoose.Schema;
const schema  = new Schema({

    name :{
        type : String,
        required: true 
    },
    email :{
        type : String,
        required: true,
        max:255
    },
    password : {
        type:String,
        required : true 

    }


})
const User = monogoose.model('User',schema);
module.exports = User;