//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "ds!";

client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setPresence({
       status: "idle", // online,idle...
       activity: {
           name: "La cosa que quieras poner",
           type: "PLAYING"
       }
   });

});

client.on('message', message => {

  if (message.content.startsWith("ds!ping")) {
   let ping = Math.floor(message.client.ws.ping);
   message.channel.send(':ping_pong: ¡Pong! `'+ping+' ms.`'); 

  }
  
});

client.login(process.env.TOKEN);

