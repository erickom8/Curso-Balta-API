'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('../src/Routes/index-route'); //Carrega as rotas
const productRoute = require('../src/Routes/products-route');

app.use(bodyParser.json()); //Todo o conteúdo convertido em json
app.use(bodyParser.urlencoded({ 
    extended: false
 })); //Codificar tbm url


app.use('/', indexRoute); //Atribuindo rota
app.use('/products', productRoute);

module.exports = app;


/*
Status Code:
    res.status(200).send = ok
    res.status(201).send = created
    res.status(400).send = error bad request
    res.status(401).send = nao autenticado
    res.status(403).send = acesso negado
    res.status(500).send = internal server error
*/