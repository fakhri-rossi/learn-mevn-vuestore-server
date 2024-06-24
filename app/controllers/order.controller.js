const db = require('../models');
const Order = db.orders;

const findOrder = async (req, res) => {
    const id = Number(req.params.id);
    const order = await Order.findOne({ user_id: id }).populate('cart_items');
    res.send(order);
};

module.exports = {
    findOrder
}