const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Jachis10',
  port: 5432,
  database: 'checkin',
  logging: false,
});

module.exports = { db, DataTypes };
