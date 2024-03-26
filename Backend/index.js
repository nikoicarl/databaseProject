// Dependencies
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

// Connections
const dbConnect = require('./dbConnect.js');
const membershipController = require('./membershipController.js');
const employeeFetchController = require('./employeeFetchController.js');
const locationFetchController = require("./locationFetchController.js");

// Use Cors
app.use(express.json());
const corsOptions ={
   origin:'*',
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database connection
const dataBase = dbConnect(mysql);

// include controller
membershipController(app, dataBase);
employeeFetchController(app, dataBase);
locationFetchController(app, dataBase);


// start server
app.listen(5010,function()
{
    console.log("server running at port", '5010');
});



