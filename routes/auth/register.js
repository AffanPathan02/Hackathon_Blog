const express =require('express')
const bcrypt=require('bcrypt')

const User =require('../../models/user')
const registerController=require('../../controllers/register_control')

const router = express.Router()

router.get('/register',(req,res)=>{
    res.render('register',{pageTitle:'Register Page',path:'/register'})
})

router.post('/register',registerController.postRegister)

exports.routes=router