'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) =>{ //Enviar Informações
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) =>{ 
    const id = req.params.id;
    res.status(200).send({
        id:id,
        item: req.body
    });
});

router.delete('/', (req, res, next) =>{ //Criando Rota
    res.status(200).send(req.body);
});

module.exports = router;