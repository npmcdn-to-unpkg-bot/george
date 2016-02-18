// requirements
var express         = require('express');
var mongoose        = require('mongoose');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var path            = require('path');
var moment          = require('moment');
var app             = express();

// global modules

//env vars

var port            				= process.env.PORT || 3000;
var APP_URL           			= process.env.APP_URL;
var MONGOLAB_URI           	= process.env.MONGOLAB_URI;

//boring logging and parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

//mongodb

//	mongoose.connect(MONGOLAB_URI);

//mongoose.connection.on('error', function(err) {
  //  console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
//  });

//authentication
// not used at the moment... but will be
var token, metadata, client = null;

// get media... just json for now.

var media = require("./data.json");

//routes

app.get('/api/data', function(req, res) {
     res.send(media);
   });


  app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  res.setHeader('Last-Modified', (new Date()).toUTCString());
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
	res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
	res.setHeader("Expires", "0"); // Proxies.

});

// go go inspector gadget
app.listen(port);
console.log('App listening on port ' + port);
