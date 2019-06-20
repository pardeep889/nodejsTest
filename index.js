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
    const data = req.query;  
    const plans = req.query.plans.split(',');
    // console.log(plans);
    let total = plans.reduce((prev,next) => parseInt(prev)+parseInt(next) );    
    res.render(__dirname+'/views/showdata', {total});
})

app.listen(3000, () => {
    console.log('App is started');
    
})