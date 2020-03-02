const express = require('express');
const mongose = require('mongoose');

// Iniciando o APP
const app = express();

// Iniciando o Database
mongose.connect('mongodb://localhost:27017/nodeapirest');

// Primeira rota
// toda vez que o usuario acessar a rota
app.get('/', (req, res) => {
    res.send('Hello Roc');
});

app.listen(3001);