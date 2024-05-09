var express = require('express');
var app=express();
var server=require('http').Server(app);
var io = require ('socket.io')(server);

/Usamo un middleware para usar elementos estaticos en la seccion publica de la aplicación/
app.use(express.static('public'));

app.get('/', function(req,res){
    res.status(200).send("Hola mundo");
});

/*De esta forma activamos socket para que este escuchando mandamos un mensaje de control por consola para saber que pasa
y tenemos que hacer que el mensaje venga del navegador web mediante html y JS */ 
io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket')
    socket.emit('message',{
        id:1,
        texto: "Hola soy un mensaje",
        autor: "Idalia Saenz Martinez"
    });
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");
});
