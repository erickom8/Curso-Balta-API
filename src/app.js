'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json()); //Todo o conteúdo convertido em json
app.use(bodyParser.urlencoded({ extended: false })); //Codificar tbm url

const route = router.get('/', (req, res, next) =>{ //Criando Rota
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) =>{ //Enviar Informações
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) =>{ 
    const id = req.params.id;
    res.status(200).send({
        id:id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) =>{ //Criando Rota
    res.status(200).send(req.body);
});


app.use('/', route); //Atribuindo rota
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

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