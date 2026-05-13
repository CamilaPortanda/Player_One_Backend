const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EventType = sequelize.define('EventType', {
    event_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    event_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    description: {
        type: DataTypes.STRING(255)
    }

}, {
    tableName: 'event_type',
    timestamps: false
});

module.exports = EventType;