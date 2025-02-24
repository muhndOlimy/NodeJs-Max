const path = require('path');

const express = require('express');
// const expressHbs = require('express-handlebars');
const app = express();

const users = [];

// app.engine('hbs' , expressHbs.engine({defaultLayout:'main' , extname:'hbs'}))
// app.set('view engine' , 'hbs');
// app.set('views' , path.join(__dirname , 'views' , 'hbs'))

// app.set('view engine' , 'pug')
// app.set('views' , path.join(__dirname , 'views' , 'pug'))

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views' , 'ejs'))
app.use(express.json())
app.use(express.urlencoded({extended:false }))

app.get('/' , (req,res)=>{
    res.render('index',{
        pageTitle:'Add user'
    });
});

app.get('/users' , (req,res)=>{
    res.render('users',{
        pageTitle:'Users',
        hasUsers:users.length > 0,
        users:users
    });
});

app.post('/add-user' , (req,res)=>{
    console.log(req.body)
    users.push({name:req.body.userName})
    res.redirect('/users')
});


app.listen(3000);