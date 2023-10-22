var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

// GET /flights
router.get('/', flightsController.index);
// GET /flights/new
router.get('/new', flightsController.new);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:flightId', flightsController.show);
// POST /flights/create
router.post('/', flightsController.create);
module.exports = router;
