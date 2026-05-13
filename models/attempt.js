const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attempt = sequelize.define('Attempt', {
    attempt_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },

    minigame_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'minigame',
            key: 'minigame_id'
        }
    },

    attempt_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },

    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    time_played: {
        type: DataTypes.TIME
    }

}, {
    tableName: 'attempts',
    timestamps: false
});

module.exports = Attempt;