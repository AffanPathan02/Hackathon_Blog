const express=require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const loginController = require('../../controllers/login_control')
const User =require('../../models/user')

const router=express.Router();

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/success_login',loginController.postLogin)

exports.routes=router