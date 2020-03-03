const express = require('express');
const cors = require('cors');
const mongose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Database
mongose.connect('mongodb://localhost:27017/nodeapirest');


requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));


app.listen(3001);