var express = require('express');
var path = require('path');
var app = express();
var dataService = require('./dataService');

var port = process.env.PORT || 8080;

app.use('/static', express.static('static'))

app.get('/data', function(req, res) {
	data = dataService.getData();
	res.send(JSON.stringify(data));
})

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, function() {
    console.log('Our app is running on port ' + port);
});