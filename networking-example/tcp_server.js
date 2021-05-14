process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
const sockets = {};
let counter = 0;

server.on('connection', (socket) => {
    socket.id = counter++;
    console.log('Client Connected');
    socket.write('Please Enter Your Name: ');
    socket.on('data', (data) => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            sockets[socket.id] = socket;
            socket.write(`Welcome ${socket.name}!\n`);
        } else {
            Object.values(sockets).forEach((clientSocket) => {
                if (clientSocket.id !== socket.id) {
                    clientSocket.write(`${socket.name}: `);
                    clientSocket.write(data);
                }
            });
        }
    });
    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client Disconnected');
    });
});


server.on('connection', (socket) => {

});

server.listen(8080, () => console.log('Server Bound'));