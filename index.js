const http = require('http');

const hostname = '127.0.0.1';
port = 3000;

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo cnoruel');
});

server.listen(port, hostname, () => {
    console.log(`Iniciando Servidor Web en hhttp://${hostname}:${port}/`);
})
