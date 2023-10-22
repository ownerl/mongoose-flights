const { Template } = require('ejs');
const Flight = require('../models/flight');
const { now } = require('mongoose');

module.exports = {
    index,
    new: newFlight,
    show,
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
    let nowDate = Date.now() + 60000 * 60 * 24 * 365;
    nowDate = new Date(nowDate);
    //console.log('tempdate here =========', nowDate);
    res.render('flights/new', {
        airlines,
        airports,
        testdefined: nowDate
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

async function show(req,res) {
    const airlines = Flight.airlines;
    const airports = Flight.airports;
    const flight = await Flight.FlightModel.findById(req.params.flightId);
    res.render('flights/show', {
        airlines,
        airports,
        flight,
    });
}