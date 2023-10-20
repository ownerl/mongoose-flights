const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const airlines = ['American', 'Southwest', 'United', 'Lufthansa', 'Air Canada', 'Turkish', 'Fly Emirates', 'Westjet', 'Air New Zealand', 'Air Astana'];
const airports = ['AUS', 'DFW', 'LAX', 'YYG', 'YEG', 'SAN', 'DEN'];

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
    departs: {
        type: Date,
        default: (Date.now() * 60000 * 60 * 24 * 365)
    }
})

module.exports = {
    airlines,
    airports,
    FlightModel: mongoose.model('Flight', flightSchema)
};