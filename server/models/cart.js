const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Cart: sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        quantity: DataTypes.INTEGER
    })
}