const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define(
  'User',
  {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { notEmpty: true }
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { notEmpty: true }
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: 
        {
            isEmail: true,
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: { notEmpty: true }
    },
    pass_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: { notEmpty: true }
    },
    user_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 
        {
            model: 'user_types',
            key: 'user_type_id'
        }
    },
    date_registered: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    country: {
        type: DataTypes.STRING(75),
        allowNull: false,
        validate: { notEmpty: true }
    },
    industry: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { notEmpty: true }
    },
    job_position: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { notEmpty: true }
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: 
        {
            notEmpty: true,
            len: [1, 255]
        }
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    pfp_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'profile_picture',
            key: 'pfp_id'
        }
    }
  },
  {
    tableName: 'users',
    timestamps: false,
  }
);

User.associate = (models) => {
        User.belongsTo(models.UserType, {
            foreignKey: "user_type_id",
            as: "userType"
        });
    };

module.exports = User;
