const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinations');

// POST /flights/:flightId/destinations
router.post('/flights/:flightId/destinations', destinationsController.create);

module.exports = router;