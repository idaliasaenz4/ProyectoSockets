var express = require ('express');
var app = express();

//como trabajaremos con socket, es recomendado usar el modulo HTTP 
//para pasarle la app a express y manejar bien http

var server = require('http').Server(app);

//aqui estara toda la funcionalidad de los sockets
// se requiere la libreria socket.io
//se pasa la variable Server que tiene la app express y HTTP

var io = require('socket.io')(server);

app.get('/',function(req, res){
    res.status(200).send("Hola Mundo")
});

server.listen(3002, function(){
    console.log("el servidor esat corriendo en http://localHost:3002");
});