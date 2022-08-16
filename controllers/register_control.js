const path = require('path')
const bcrypt = require('bcrypt')

const User = require('../models/user')

exports.postRegister=async(req,res)=>{
    const {email_id,password}=req.body
    const hash =await bcrypt.hash(password,12)
    const user =new User({
        email_id,
        password:hash
    })
    await user.save()
    res.redirect('/')
}