const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name_product: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    desc_product: {
        type: DataTypes.STRING(255)
    },

    html_link: {
        type: DataTypes.STRING(255)
    },

    image_link: {
        type: DataTypes.STRING(255)
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

}, {
    tableName: 'product',
    timestamps: false
});

module.exports = Product;