var express = require('express');
var app = express();

var things = require('./things.js');

app.get('/hello', function(req, res) {
    res.send("hello world!");
});

app.post('/hello', function(req, res) {
    res.send("You just called the post method at '/helo'!\m");
});

app.all('/test', function(req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

app.listen(3000);