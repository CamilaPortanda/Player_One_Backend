const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Minigame = sequelize.define('Minigame', {
    minigame_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name_minigame: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'product_id'
        }
    }

}, {
    tableName: 'minigame',
    timestamps: false
});

module.exports = Minigame;