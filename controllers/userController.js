require('dotenv').config();
const User = require('../model/userschema')
const jwt = require('jsonwebtoken')
const sceret = process.env.JWT_SCERET;
const http = require('../constants/http')

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;
        if (await User.findOne({ email: email })) {
            res.status(http.BAD_REQUEST).send('User already exist')
        } else {
            const newuser = new User({
                firstName, lastName, email, phone, password
            })
            newuser.save();
            res.status(http.SUCCESS).send('User Registered Successfully')
        }
    }
    catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR).send('Internal Server Error')
    }
}

const userDetail = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.send('Internal Server Error')
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        await User.findOne({ email: email, password: password })
            .then((data) => {
                if (data) {
                    const payload = {
                        id: data.id
                    }
                    const Admin = data.admin
                    const Token = jwt.sign(payload, sceret)
                    res.json({ Token, Admin })
                }
                else {
                    res.status(http.BAD_REQUEST)
                    res.json({
                        error: 'Invalid Credentials'
                    })
                }
            })
            .catch((error) => {
                res.send(error)
            })
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send('Internal Server Error')
    }
}


module.exports = {
    register, login, userDetail
}