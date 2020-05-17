const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'my_password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    aquire: 3000,
    idle: 10000
  }
});