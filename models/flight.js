const { Schema, default: mongoose } = require ('mongoose')

const Flight = new Schema (
    {
        airline: { type: String, required: true},
        flightNumber: { type: Number, required: true},
        price: { type: Number, required: true},
        numberOfSeats: { type: Number, required: true},
        departingAirport: { type: String, required: true},
        arrivalAirport: { type: String, required: true},
        departureDate: { type: Date, required: true},
    })

    { timestamps: true }


module.exports = Flight

