const express = require('express')
const cors = require('cors')
require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
const {PORT} = process.env

const {register, login} = require('./controllers/auth')
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Product} = require("./models/product")

const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/products', () => console.log('hit products'))

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))
    })
    .catch(() => console.log('not connected to DB'))