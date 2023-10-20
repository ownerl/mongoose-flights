const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Lufthansa', 'Air Canada', 'Turkish', 'Fly Emirates', 'Westjet', 'Air New Zealand', 'Air Astana']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'YYG', 'YEG', 'SAN', 'DEN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: Date
})