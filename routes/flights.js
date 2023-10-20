var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

// GET /flights
router.get('/', flightsController.index);

module.exports = router;
