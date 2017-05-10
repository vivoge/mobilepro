var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



app.route('/').get(function (req,res) {

    var aid = req.query.aid;

    if(aid){
        var news = require('./news.json');
        var arg = news.filter(function (item) {
            return item.aid = aid;
        })
        res.send(arg)
    }

    if(req.query.car){
        var imgUrl = fs.readFileSync('./imgurl.json');
        res.send(imgUrl);
    }





});


app.route('/content').get(function (req,res) {
    var catid = req.query.catid;
    var data = fs.readFileSync('news.json');
    res.send(data)
});


app.listen(9090);
console.log('Listening on port 9090...');
