const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email_id:{
        type:String,
        required:[true,'email id cannot be blank']
    },
    password:{
        type:String,
        required:[true,'Password cannot be blank']
    }
})

module.exports = mongoose.model('User',userSchema)