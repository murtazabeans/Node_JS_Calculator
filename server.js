var express = require('express');
var mongoose = require('mongoose');
var Parser = require('expr-eval').Parser;
var bodyParser = require('body-parser');
//and create our instances
var app = express();
var router = express.Router();
var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "assignmentNode"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

//set our port to either a predetermined port number if you have set 
//it up, or 3001

var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API

router.post('/result', function(req, res){
  console.log(req.body)
  var parser = new Parser();
  var query_string = parser.parse(req.body.query);
  res.json(query_string.evaluate());  
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
