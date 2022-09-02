const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Emed1213',
    port: 5432,
    database: 'checkin',
    logging: false,
  });

  module.exports = { db, DataTypes }