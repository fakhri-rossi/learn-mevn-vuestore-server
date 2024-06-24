const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user_id: Number,
    cart_items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;