// Required Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// Config Express
var app = express();
var PORT = process.env.PORT || 3000;

// Creating a path to allow access to the public file
app.use(express.static(path.join(__dirname,'./app/public')));

// Parsing data from user
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// Creating routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on Port
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on port: ' + PORT);
});

