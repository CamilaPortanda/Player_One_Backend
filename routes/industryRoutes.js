const router = require('express').Router();
const industryController = require('../controllers/industryController');

router.get('/', industryController.getAllIndustries);

module.exports = router;