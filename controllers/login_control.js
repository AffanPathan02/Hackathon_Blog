const path = require('path')
const bcrypt = require('bcrypt')

const User =require('../models/user')

exports.postLogin=async (req,res)=>{
    const {email_id,password}=req.body;
    const user = await User.findOne({email_id})
    try {
        const validPassword = await bcrypt.compare(password,user.password)
        if(validPassword){
            req.session.user_id=user._id
            res.sendFile(path.join(__dirname,'../', 'views', 'success_login.html'));
        }else{
            res.send('incorrect username or password')
        }
    } catch (error) {
        res.send('incorrect username or password')
    } 
}