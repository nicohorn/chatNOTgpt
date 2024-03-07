const express = require('express');
const { createServer } = require('node:http')
const { join } = require('node:path');
const { Server } = require("socket.io")



const app = express();
const server = createServer(app);
const port = 3002;

const io = new Server(server);

app.use(express.static(__dirname, {
    contentTypeMap: {
        '.js': 'application/javascript'
    }
}));
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})


io.on('connection', (socket) => {



    socket.on("username", (username) => {

        socket.nickname = username;
        console.log(socket)
    })


    socket.on('chat message', (msg) => {

        io.emit('chat message', { message: msg, nickname: socket.nickname });
    });



});

server.listen(port, () => {
    console.log(`This is running on port ${port}`)
})


