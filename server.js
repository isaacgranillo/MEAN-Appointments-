var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 1337;
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, function(){
	console.log('Listening on port 1337')
})