// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })

// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");

    setInterval(function () {
        ws.send('Welcome');
    }, 1000);


    // sending message
    ws.on("message", data => {


        wss.clients.forEach((client) => {
            if (client.readyState === WebSocketServer.OPEN) {
                client.send(data);
            }



        });

    });

    console.log("The WebSocket server is running on port 8080");
})