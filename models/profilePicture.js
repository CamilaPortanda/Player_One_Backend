const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProfilePicture = sequelize.define('ProfilePicture', {
    pfp_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pfp_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    image_link: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'profile_picture',
    timestamps: false
});

module.exports = ProfilePicture;