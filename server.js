'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
server.on('error', onError); //Quando acontece um 'error', chama a função 'onError'
server.on('listening', onListening); //
console.log('Server listening on port', port);

function normalizePort(val) { //Normalizando a porta padrão
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;  
    }
    
    return false;
}  

function onError(error) { // Tratativa de erro
    if (error.syscall !== 'listen'){ 
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port : 
        'Port ' + port;
       
    switch (error.code){
        case 'EACCES' : // Verifica se é um erro de permissão.
            console.error(bind + ' requires elevated privileges'); 
            process.exit(1);
            break;
        case 'EADDRINUSE' : //Verifica se é um erro pois já está em uso.
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }    
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on' + bind);
}