const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    averageRating: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;