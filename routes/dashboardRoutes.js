const router = require('express').Router()
const c = require('../controllers/dashboardController')
const verificarToken = require('../middleware/verificarToken')

router.get('/percentage-completed', verificarToken, c.getPercentageCompleted)
router.get('/avg-median-time', verificarToken, c.getAvgMedianTime)
router.get('/ranking-products', verificarToken, c.rankingProducts)
router.get('/total-product-accesses', verificarToken, c.getTotalProductAccesses)
router.get('/users-per-industry', verificarToken, c.getUsersPerIndustry)
router.get('/users-per-country', verificarToken, c.getUsersPerCountry)

module.exports = router