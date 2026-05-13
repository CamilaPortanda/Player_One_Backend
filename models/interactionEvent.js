const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const InteractionEvent = sequelize.define('InteractionEvent', {
    event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },

    event_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'event_type',
            key: 'event_type_id'
        }
    },

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'product_id'
        }
    },

    minigame_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'minigame',
            key: 'minigame_id'
        }
    },

    source: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    event_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'interaction_event',
    timestamps: false
});

module.exports = InteractionEvent;