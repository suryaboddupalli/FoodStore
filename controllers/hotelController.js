const Hotel = require('../model/hotelSchema')
const http = require('../constants/http')

const hotelDetails = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send('Internal Server Error')
    }
}

const addHotel = async (req, res) => {
    try {
        const { hotelName, locality, hotelType } = req.body
        const { hotelImg } = req.file;
        const newHotel = new Hotel(
            { hotelName, locality, hotelType, hotelImg }
        )
        newHotel.save()
        res.send('Data saved')
        res.status(http.SUCCESS)
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send('Internal Server Error')
    }
}

module.exports = {
    hotelDetails, addHotel
}