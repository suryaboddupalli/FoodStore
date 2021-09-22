const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
    },
    admin: {
        type: Boolean,

    }
}, { timestamps: true }
)


module.exports = mongoose.model('User', userSchema)