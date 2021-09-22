const http = require('http');
const express = require('express')

//Week 1 code
//const routes = require('./routes')
//console.log(routes.someText);
//const server = http.createServer(routes.handler);

const app = express();
const server = http.createServer(app);

server.listen(3000);

