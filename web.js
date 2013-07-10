var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var buf2 = fs.readFileSync("index.html");
console.log(buf2.toString());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
