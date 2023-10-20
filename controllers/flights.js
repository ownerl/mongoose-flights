const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
}

async function index(req,res) {
    const flights = await Flight.FlightModel.find({});
    res.render('flights', {
        flights
    });
}

async function newFlight(req,res) {
    const airlines = Flight.airlines;
    const airports = Flight.airports;
    res.render('flights/new', {
        airlines,
        airports,
    });
}

async function create(req,res) {
    console.log(req.body)
    try {
        await Flight.FlightModel.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message })
    }
    }