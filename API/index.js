var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var dbConnect = require('./dataConnect.js');

// database connection
var dataBase = dbConnect(mysql);

app.listen(5010,function()
{
    console.log("Server Started and Running ...");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

