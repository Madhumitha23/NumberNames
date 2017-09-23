var express = require('express');

var app = express();

app.get('/',function(request,response){
    response.sendFile(__dirname+'/indexhtm.html');
});

var server = app.listen(3000,function(req,res){
    console.log("catch the action at localhost:"+3000);
});