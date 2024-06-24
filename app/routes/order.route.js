const router = require('express').Router();
const Order = require('../controllers/order.controller');

router.get('/:id', Order.findOrder);

module.exports = router;