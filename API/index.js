var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.listen(8888,function()
{
    console.log("Server Started and Running ...");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
