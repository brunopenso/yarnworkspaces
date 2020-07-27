var express = require('express');
var app = express();
//const shared = require('shared')

app.get('/', function (req, res) {
  res.send('Hello World!');
});
/*
app.get('/uuid', function (req, res) {
  res.send(shared.generate())
})
*/
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});