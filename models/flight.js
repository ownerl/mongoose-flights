const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airlines = ['American', 'Southwest', 'United', 'Lufthansa', 'Air Canada', 'Turkish', 'Fly Emirates', 'Westjet', 'Air New Zealand', 'Air Astana'];
const airports = ['AUS', 'DFW', 'LAX', 'YYG', 'YEG', 'SAN', 'DEN'];

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: airports,
    },
    arrival: {
        type: Date,
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: airlines
    },
    airport: {
        type: String,
        enum: airports
    },
    flightNo: {
        type: Number,
        required: true,
        min: 1,
        max: 9999
    },
    departs: Date,
    destinations: [destinationSchema]
});



module.exports = {
    airlines,
    airports,
    FlightModel: mongoose.model('Flight', flightSchema)
};