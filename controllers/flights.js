const { Template } = require('ejs');
const Flight = require('../models/flight');
const { now } = require('mongoose');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
    newTicket,
}

async function newTicket(req,res) {
    console.log(req.body)
    const newTicket = {
        seat: req.body.seat,
        price: req.body.price,
        flight: req.params.flightId,
    }
    try {
        await Ticket.create(newTicket);
        res.redirect(`/flights/${req.params.flightId}`)
    } catch (err) {
        res.redirect('/flights')
    }
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
    const newFlight = new Flight.FlightModel();
    const dt = newFlight.departs;
    console.log(newFlight);
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    console.log(departsDate);
    res.render('flights/new', {
        airlines,
        airports,
        departsDate
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
    const newDestination = new Flight.DestinationModel();
    const ddt = newDestination.arrival;
    let destinationDate = `${ddt.getFullYear()}-${(ddt.getMonth() + 1).toString().padStart(2, '0')}`;
    destinationDate += `-${ddt.getDate().toString().padStart(2, '0')}T${ddt.toTimeString().slice(0, 5)}`;
    const flight = await Flight.FlightModel.findById(req.params.flightId);
    const tickets = await Ticket.find({flight: flight._id});
    if (flight) {
        res.render('flights/show', {
            tickets,
            airlines,
            airports,
            flight,
            destinationDate,
        });
    } else {
        res.redirect('/flights');
    }
}