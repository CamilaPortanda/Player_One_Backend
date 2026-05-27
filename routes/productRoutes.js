const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.put('/:product_id', productController.updateProduct);

module.exports = router;