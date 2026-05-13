const { Sequelize } = require('sequelize');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  throw new Error(
    'Falta DATABASE_URL en el entorno. Ponlo en backend/.env'
  );
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = sequelize;
