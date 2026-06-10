const router = require('express').Router()
const verificarToken = require('../middleware/verificarToken')
const tokenOpcional = require('../middleware/tokenOpcional')
const eventController = require('../controllers/eventController')

router.post('/product-view', tokenOpcional, eventController.logProductPageView)
router.post('/product-click', tokenOpcional, eventController.logProductClick)
router.post('/rock-view', tokenOpcional, eventController.logRockPageView)
router.post('/game-view', verificarToken, eventController.logGamePageView)
router.post('/desc-changed', verificarToken, eventController.logProdDescChanged)
router.post('/product-added', verificarToken, eventController.logProductAdded)


module.exports = router