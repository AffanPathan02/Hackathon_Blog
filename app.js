const express=require('express');
const bodyParser=require('body-parser')
const session=require('express-session')
const mongoose = require('mongoose')
const User =require('./models/user')

const app=express()

mongoose.connect('mongodb://localhost:27017/hackathon')
.then(()=>{
    console.log('Connection Open');
})
.catch(()=>{
    console.log("error");
    console.log(err);
})


const createPost=require('./routes/create_post');
const loginPage=require('./routes/auth/login');
const registerPage=require('./routes/auth/register')
const logoutPage=require('./routes/auth/logout')

app.set('view engine','pug');
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(session({secret:'my name',resave:false,saveUninitialized:false}));

app.get('/',(req,res)=>{
    if (req.session.user_id) {
        res.render('home',{pageTitle:'Home Page',page_name:'Home Page Content',isAuthenticated:true})
    }else{
        res.render('home',{pageTitle:'Home Page',page_name:'Home Page Content',isAuthenticated:false})
    }
})

app.use(registerPage.routes)
app.use(loginPage.routes)
app.use(logoutPage.routes)
app.use(createPost.routes)

app.listen(3000,()=>{
    console.log('Listening to Port 3000');
})