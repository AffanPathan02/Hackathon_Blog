const express=require('express')
const Post=require('../models/post')
const User=require('../models/user')
const createPostController=require('../controllers/post_control')

const router = express.Router();

router.get('/create_post',(req,res)=>{
    if (req.session.user_id) {
        res.render('create_post',{pageTitle:'Create Post',path:'/create_post',isAuthenticated:true})
    }else{
        res.redirect('/login')
    }
})

router.post('/create_post',createPostController.createPost)


exports.routes=router