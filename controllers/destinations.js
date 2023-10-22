const Flight = require('../models/flight');

module.exports = {
    create,
};

async function create(req,res){
    const flight = await Flight.FlightModel.findById(req.params.flightId);
    console.log('adding destination!! aalfkaefa', req.body, ' into flight destinations', flight.destinations)
    flight.destinations.push(req.body);
    try {
        // Save any changes made
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`); 
}

