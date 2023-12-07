const express = require('express')
const cors = require('cors')
require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()
const {PORT} = process.env

const {register, login} = require('./controllers/auth')
const {getAllProducts} = require('./controllers/products')
const {isAuthenticated} = require('./middleware/isAuthenticated')
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Product} = require("./models/product")

const app = express()

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log("hello there")
    next()
})

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/products', isAuthenticated, getAllProducts)

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))
    })
    .catch(() => console.log('not connected to DB'))