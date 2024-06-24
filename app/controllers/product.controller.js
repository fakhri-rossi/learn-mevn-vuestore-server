const db = require('../models');
const Product = db.products;

const findAll = (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
    
        }).catch((err) => {
            res.status(409).send({
                message: err.message
            })
        });
}

const showOne = async (req, res) => {
    const { product_id } = req.params
    const product = await Product.findOne({ _id: product_id });
    res.send(product);
}

module.exports = {
    findAll,
    showOne
};