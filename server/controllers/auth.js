const { SECRET } = process.env
const jwt = require("jsonwebtoken")
const { User } = require("../models/user")
const bcrypt = require('bcryptjs')

let createToken = (username, id) => {
    const token = jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" })
    return token
}

module.exports = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body
            let foundUser = await User.findOne({
                where: { username: username.trim() }
            })

            if(foundUser){
                res.status(400).send('That username has already been taken.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({username, hashedPass: hash})

                const token = createToken(newUser.username, newUser.id)

                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token,
                    exp
                })
            }
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        try {
        } catch (err) {
            console.log(err)
        }
    }
}
