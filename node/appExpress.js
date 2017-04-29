var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());
	app.all('/', function(req, res) {
	res.send(req.body.title + req.body.text);
});
app.listen(3000);
console.log('http://localhost:3000')