
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var $ = require('jquery');
var fs = require('fs');
var gm = require('gm');
var stylus = require('stylus');

var app = express();

// loop through route actions, adds to routes object
// TODO: refactor this to be a little more dynanmic and avoid
// action collisions
fs.readdirSync("./routes").forEach(function(file) {
  var exportobjects = '';
  if (file !== 'index.js') {
    exportobjects = require("./routes/" + file);
  }
  for (obj in exportobjects) {
    routes[obj] = exportobjects[obj]
  }
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.configure(function () {
  app.use(require('stylus').middleware(__dirname + '/public'));
});

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/upload', routes.upload);


http.createServer(app).listen(app.get('port'), function(){
  console.log(routes)
  console.log('Express server listening on port ' + app.get('port'));
});
