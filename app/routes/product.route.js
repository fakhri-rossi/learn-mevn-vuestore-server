const router = require('express').Router();
const products = require('../controllers/product.controller');

router.get('/', products.findAll);
router.get('/:product_id', products.showOne);

module.exports = router;