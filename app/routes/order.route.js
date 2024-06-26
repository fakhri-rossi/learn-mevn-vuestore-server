const router = require('express').Router();
const Order = require('../controllers/order.controller');

router.get('/:id', Order.findOrder);
router.post('/:id/add', Order.addToCart);
router.delete('/:id/product/:product', Order.removeFromCart);

module.exports = router;