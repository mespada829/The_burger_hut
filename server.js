const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const server = require('http').createServer(app);

var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static('./public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.use(methodOverride("_method"));

var routes = require('./controllers/burgers_controller.js')

app.use('/', routes);

app.listen(process.env.PORT || port);