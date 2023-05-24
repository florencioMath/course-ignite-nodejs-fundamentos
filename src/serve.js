import http from 'node:http';

const server = http.createServer((request, response) => {
  response.end('florencioMath - Node.js Fundamentos');
});

server.listen(3333);
