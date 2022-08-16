const mongoose=require('mongoose')

const postSchema =new mongoose.Schema({
    email_id:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    hackathon_info:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Post',postSchema)