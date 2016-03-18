var express = require('express');

var app = express();

app.get('/', function (req, res) {
    var data = {
        ipaddress: getIpAddress(req),
        language: getLanguage(req),
        software: getSoftware(req)
    };
    res.send(data);
});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port :{1}!'.replace('{1}', process.env.PORT));
});

function getIpAddress (req) {
    return req.headers['x-forwarded-for'];
}

function getLanguage (req) {
    var hlanguage = req.headers['accept-language'];
    return hlanguage ? hlanguage.split(',')[0] : null;
}

function getSoftware (req) {
    var hagent = req.headers['user-agent'];
    return hagent ? hagent.split(/\(|\)/)[1] : null;
}