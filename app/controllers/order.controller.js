const db = require('../models');
const Order = db.orders;

const findOrder = async (req, res) => {
    const id = Number(req.params.id);
    const order = await Order.findOne({ user_id: id }).populate('cart_items');
    res.header('Access-Control-Allow-Origin', '*');
    res.send(order);
};

const addToCart = async(req, res) => {
    const user_id = Number(req.params.id);
    const product = String(req.body.product);
    const result = await Order.updateOne({user_id},{ 
        $addToSet: { cart_items: product } 
    });

    res.header('Access-Control-Allow-Origin', '*');
    res.send(result);
}

const removeFromCart = async(req, res) => {
    const user_id = Number(req.params.id);
    const product = String(req.params.product);
    const result = await Order.updateOne({user_id},{ 
        $pull: { cart_items: product } 
    });

    res.header('Access-Control-Allow-Origin', '*');
    res.send(result);
}

module.exports = {
    findOrder,
    addToCart,
    removeFromCart
}