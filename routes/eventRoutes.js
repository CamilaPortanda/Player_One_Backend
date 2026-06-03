const router = require('express').Router()
const verificarToken = require('../middleware/verificarToken')
const eventController = require('../controllers/eventController')

router.post('/product-view', verificarToken, eventController.logProductPageView)
router.post('/product-click', verificarToken, eventController.logProductClick)

module.exports = router