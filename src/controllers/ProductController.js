const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        // so executa depois que conseguir os registros do banco de dados
        const products = await Product.find();

        return res.json(products);
    },
};