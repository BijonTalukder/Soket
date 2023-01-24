const express = require('express');
const app = express();
const http=require('http');
const httpServer = http.createServer(app);
const  { Server } = require("socket.io");
const io = new Server(httpServer);

io.on('connection', (socket) => {

console.log('new user connect ')
socket.on('disconnect',(socket)=>{
  console.log("user disconnect")
})
socket.send('fifa ')
socket.on('message',(data)=>{
  console.log(data)
})
  });

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/app.html')
})

httpServer.listen(5000,function(){
    console.log('heelo')
})