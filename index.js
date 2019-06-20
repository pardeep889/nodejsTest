const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) => {
    res.render(__dirname+'/views/');
})
app.get('/postData', (req,res) =>{
    const plans = req.query.plans.split(',');
    const data = {};
    let total = plans.reduce((prev,next) => parseInt(prev)+parseInt(next) );  
    data.total = total;
    data.fname = req.query.fname;
    data.lname = req.query.lname;
    data.id = req.query.id;
    data.date = req.query.Date;
    res.render(__dirname+'/views/showdata', {data});
})

app.listen(3000, () => {
    console.log('App is started');
    
})