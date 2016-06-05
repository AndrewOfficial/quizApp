'use strict';

/**
 * WebServer.js: exports a WebServer singleton object
 */

// Node.js core modules
var http = require('http');
var path = require('path');

// Installed dependencies
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Local dependencies
var indexRouter = require('./routes/index');
var apiRoutes = require('./apiRoutes/index');

/**
 * Module variables
 */
var app = express();
var server = http.createServer(app);
var libs = [];
var topDir = path.join(__dirname, '..');
var port = process.env.PORT || 3000;

/**
 * Configure the express app
 */

// log all http requests
//app.use(morgan('dev', {stream: log.stream}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Put POST data into request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// pretty print JSON responses
app.set('json spaces', 2);

// Mount routes
app.use(require('less-middleware')(path.join(topDir, 'public')));
app.use(express.static(path.join(topDir, 'public')));

// app.use('/clientInfo', clientInfo);
app.use('/',indexRouter);

apiRoutes.forEach(function(router) {
  app.use('/api', router);
});

function addLib(relativePath) {
  var fileName = path.basename(relativePath);
  libs.push(relativePath);
  app.get('/lib/' + fileName, function(req, res) {
    res.sendFile(path.join(topDir, 'node_modules', relativePath));
  });
}

addLib('angular/angular.min.js');
addLib('angular-route/angular-route.min.js');
addLib('moment/moment.js');

app.use(expressValidator());
app.use("/lib/bootstrap/", express.static(path.join(topDir, 'node_modules','bootstrap','dist')));

// Bring Mongoose into the app
var mongoose = require( 'mongoose' );

// Build the connection string
var dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quizApp';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// attach error handler for http server
server.on('error', function(error) {

  if (error.syscall !== 'listen') {
    throw error;
  }

  var portString = 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {

    case 'EACCES':
      console.log(portString + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.log(portString + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;

  }
});

// attach "listening" handler to http server
server.on('listening', function() {
  console.log('Listening on port ' + port);
});

/**
 * Stops the http server
 * @param done
 */
function stop(done) {
  server.close(done);
}

/**
 * Applies 404 and 505 catchall routes (must go last) and starts the server
 * @param done
 */
function start(done) {

  done = done || function() {};

  // catch requests for non-existent routes and respond with 404 "not found"
  app.use(function(req, res) {
    res.status(404);
    res.render('404', {
      path: req.url,
      method: req.method
    });
  });

  // Internal server error
  //if (C.env === 'production') {
  //  // no stack traces leaked to user
  //  app.use(function(err, req, res) {
  //    res.status(err.status || 500);
  //    res.render('500', {
  //      message: err.message,
  //      error: {}
  //    });
  //  });
  //} else {
    // will print stacktrace
    app.use(function(err, req, res) {
      res.status(err.status || 500);
      res.render('500', {
        message: err.message,
        error: err
      });
    });
  //}
  server.listen(port, done);
}

module.exports = {

  app: app,
  libs: libs,
  server: server,
  start: start,
  stop: stop

};