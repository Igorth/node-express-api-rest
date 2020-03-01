const express = require('express');

const app = express();

// toda vez que o usuario acessar a rota
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(3001);