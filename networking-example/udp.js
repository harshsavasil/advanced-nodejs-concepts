const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// Server
const server = dgram.createSocket('udp4');
server.on('listening', () => console.log('UDP Server Listening..'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

// Client
setInterval(() => {
    const client = dgram.createSocket('udp4');
    const msg = Buffer.from('Harsh Rocks');
    client.send(msg, 0, 5, PORT, HOST, (err) => {
        if (err) throw err;
        console.log('UDP Message Sent!');
        client.send(msg, 6, 5, PORT, HOST, (err) => {
            if (err) throw err;
            console.log('UDP Message Sent!');
            client.close();
        });
    });

}, 1000);
