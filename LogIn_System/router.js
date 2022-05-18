var express = require("express");
var router = express.Router();
const path = require('path');

const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
}


router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        
    }else{
        
        res.sendFile(path.join(__dirname, '/error.html'));
        
    }
});


router.get('/dashboard', (req, res) => {
    if(req.session.user){
        
        res.render('dashboard', {user : req.session.user})
    }else{
        
        res.sendFile(path.join(__dirname, '/error.html'));
        
    }
})


router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            
            res.sendFile(path.join(__dirname, '/error.html'));

        }else{
            res.render('base', { title: "Express", logout : "logout Successfully!"})
        }
    })
})

module.exports = router;