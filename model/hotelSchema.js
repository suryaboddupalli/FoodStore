const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String
    },
    locality: {
        type: String
    },
    hotelType: {
        type: String
    },
    hotelImg: {
        type: String,
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)