const path = require('path')
const bcrypt = require('bcrypt')

const User =require('../models/user')
const Post =require('../models/post')

exports.createPost = async(req,res)=>{
    const user_id=req.session.user_id;
    const valid_user_id =await User.findOne({user_id})
    const user_email_id=valid_user_id.email_id;
    const {username,hackathon_info,description}=req.body 
        const post_info =new Post({
            email_id:user_email_id,
            username:username,
            hackathon_info:hackathon_info,
            description:description
        })
        await post_info.save()
        res.redirect('/')
    
}