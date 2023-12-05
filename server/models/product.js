const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Product: sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        productName: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING(2000),
        imageURL: DataTypes.STRING(3000)
    })
}