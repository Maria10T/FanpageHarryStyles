const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs');

app.set('view engine','ejs');
const port = process.env.PORT || 5000;

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.get('/',function(req,res){
    res.render('home')
})
app.get('/join', function(req,res){
   
    res.render('join', {qs: req.query});
});

app.post('/join',urlencodedParser, function(req,res){
    
res.render('succesJoin',{data: req.body});
const data = req.body;
console.log(data)
fs.writeFileSync('./users.txt', `firstName: ${data.firstname}, lastName: ${data.lastname}, email: ${data.Email}, password: ${data.password }\n`, {flag: 'a'})

    
});



app.listen(port, ()=>{
    console.log(`listening to the server http://localhost:${port}`)
})