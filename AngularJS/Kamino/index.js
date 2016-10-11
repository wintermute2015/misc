var express = require('express');
var app = express();

app.listen(process.env.PORT || 8080, function () {
    console.log('Server is running on 8080');
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/ang-ui-components-kamino.htm');
    //res.send('It is just API Server...');
});

app.use(express.static(__dirname + '/'));