const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT
const url = process.env.MongoDB_URL
const app = express();
const router = require('./routes/index')

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('connected')
})
app.use(express.json())
app.use(cors())

app.use('/', router())

app.listen(PORT, () => {
    console.log('server connected')
})

