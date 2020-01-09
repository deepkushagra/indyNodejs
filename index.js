var express = require('express'),
    app = express(),
    cors = require('cors'),
    http = require('http').Server(app);
var route = require('./routes/route');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.options('*', cors());
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', route);

app.get('/about',(request,response)=>{
    response.send('About page');
 });


var server = app.listen(3000, function () {
    console.log('Indy Node server is listening on port ' + 3000);
});

server.timeout = 999000;