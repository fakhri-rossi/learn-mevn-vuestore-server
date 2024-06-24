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

module.exports = {
    findAll
};