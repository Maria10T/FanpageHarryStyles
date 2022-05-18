const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const{v4: uuidv4} = require('uuid')
const router = require('./router');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.set('view engine','ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router)

app.get('/',(req,res) =>{
    res.render('base',{title:"Login System"})
})

app.listen(port, ()=>{
    console.log(`listening to the server http://localhost: ${port}`)
})