'use strict';

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var request = require("request");

app.get('/', function (req, res) {
    var options = {
        method: 'GET',
        url: `https://xwicyrmextrf4lr-workshopatp.adb.us-ashburn-1.oraclecloudapps.com/ords/ords/api/users/?id=${Math.floor(Math.random()*1000)}`,
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        res.send(body);
    });    
});

http.listen(80, function () {
    console.log('listening on *:80');
});
