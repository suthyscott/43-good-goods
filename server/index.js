const express = require('express')
const cors = require('cors')
require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
const {PORT} = process.env

const app = express()

app.get('/api/products', () => console.log('hit products'))

app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))