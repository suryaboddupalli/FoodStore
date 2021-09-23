const express = require('express')
const router = express.Router()
const hotelController = require('../controllers/hotelController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

router.get('/', hotelController.hotelDetails);
router.post('/add', upload.single('hotelImg'), hotelController.addHotel)

module.exports = router