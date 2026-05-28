const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const industries = sequelize.define('Industry', {
    industry_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    industry_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }

}, {
    tableName: 'industries',
    timestamps: false
});

module.exports = industries;