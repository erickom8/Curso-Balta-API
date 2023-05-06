'use strict';

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) =>{ //Criando Rota
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route); //Atribuindo rota

module.exports = app;