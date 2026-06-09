const router = require('express').Router();
const productController = require('../controllers/productController');
const verificarToken = require('../middleware/verificarToken')

router.get('/', productController.getAllProducts);
router.put('/:product_id', productController.updateProduct);
router.post('/', verificarToken, productController.createProduct)

module.exports = router;