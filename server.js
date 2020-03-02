const express = require('express');
const mongose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();

// Iniciando o Database
mongose.connect('mongodb://localhost:27017/nodeapirest');


requireDir('./src/models');

const Product = mongose.model('Product');



// Primeira rota
// toda vez que o usuario acessar a rota
app.get('/', (req, res) => {
    Product.create({ 
        title: 'React', 
        description: 'Build native apps',
        url: 'http://github.com/facebook/react-native'
    })
    return res.send('Hello Rock');
});

app.listen(3001);