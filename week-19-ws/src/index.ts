import WebSocket, {WebSocketServer} from 'ws';
import http from 'http';

// const server = http.createServer(function(request: any, response : any){
//   console.log((new Date()) + 'Recieved request for' + request.url);
//   response.end('hi there');
// });

// const wss = new WebSocketServer({server});

// let count = 0;

// wss.on('connection', function connection(socket){
//   socket.on('error', console.error);

//   socket.on('message', function message(data, isBinary){
//     wss.clients.forEach(function each(client){
//       if(client.readyState === WebSocket.OPEN){
//         client.send(data, {binary: isBinary});
//       }
//     });
//   });

//   socket.send('Hello! Message From Server!!');
//   console.log("User Count : ", ++count);
// })

// server.listen(8080, function() {
//   console.log(new Date() + "Server started at port : 8080" )
// })



// Express server
import express from 'express';

const app = express();

const httpServer = app.listen(8080);

app.get('/', (req, res) => {
  res.send("Hello World");
})

const wss = new WebSocketServer({server: httpServer});

wss.on('connection', function connection(socket){
  socket.on('error', console.error);

  socket.on('message', function message(data, isBinary){
    wss.clients.forEach(function each(client){
      if(client.readyState === WebSocket.OPEN){
        client.send(data, { binary: isBinary });
      }
    });
  });

  socket.send('Hello! Message From Server!!');
})