var express = require('express');
var app = express();
var fs = require("fs");

__dirname = 'data';

app.get('/all', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
   res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id]
      res.end( JSON.stringify(user));
   });
})

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



var server = app.listen( process.env.PORT || 8080, function () {

})
