const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserType = sequelize.define('UserType', {
    user_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },

    dashboard: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    edit_products: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}, {
    tableName: 'user_type',
    timestamps: false
});

module.exports = UserType;