const Sequelize = require('sequelize');
require('dotenv').config();

const host = process.env.DB_HOST;
const dataBase = process.env.DB;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dataBase, user, password, {
  dialect: 'mysql',
  host,
  port: 3306,
});

module.exports = sequelize;
