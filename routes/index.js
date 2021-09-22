const express = require('express')
const userRouter = require('./userRoute')
const hotelRouter = require('./hotelRoute')
const recipeRouter = require('./recipeRoute')
const app = express();

const router = () => {
    app.use('/user', userRouter)
    app.use('/hotel', hotelRouter)
    app.use('/recipe', recipeRouter)
    return app
}

module.exports = router;
