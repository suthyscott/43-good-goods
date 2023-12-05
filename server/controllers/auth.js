const { SECRET } = process.env
const jwt = require("jsonwebtoken")

let createToken = (username, id) => {
    const token = jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" })
    return token
}

module.exports = {
    register: async (req, res) => {
        try {
            const { username, password} = req.body
            // use the username and password to create a user in the db, and then that user's primary key is the id we use to create a token
            const userToken = createToken(username, id)
            res.status(200).send(userToken)
        } catch (err) {
            console.log(err)
        }
    },
    login: async (req, res) => {
        try {
        } catch (err) {
            console.log(err)
        }
    }
}
