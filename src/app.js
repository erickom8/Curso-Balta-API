'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://erickom:escirico22@cluster0.nwrg1mx.mongodb.net/?retryWrites=true&w=majority');

//Carrega os Models
const Product = require('./models/product');

//Carrega as rotas
const indexRoute = require('../src/Routes/index-route'); 
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