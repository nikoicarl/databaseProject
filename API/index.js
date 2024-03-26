// Dependencies
var express = require("express");
var cors = require("cors");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

var dbConnect = require('./dbConnect.js');
var membershipController = require('./membershipController.js');
var employeeFetchController = require('./employeeFetchController.js');

// Use Cors
app.use(express.json());
const corsOptions ={
   origin:'*',
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// database connection
var dataBase = dbConnect(mysql);

// include controller
membershipController(app, dataBase);
employeeFetchController(app, dataBase);


app.listen(5010,function()
{
    console.log("server running at port", '5010');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

