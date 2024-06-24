const router = require('express').Router();
const products = require('../controllers/product.controller');

router.get('/', products.findAll);

module.exports = router;