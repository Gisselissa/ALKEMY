const Sequelize = require('sequelize');

const filmModel = require('./models/films');
const userModel = require('./models/users');

const sequelize = new Sequelize('rest_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Film = filmModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincronizadas');
  })
  .catch((err) => {
    console.log(err)
  })

  module.exports = {
    Film,
    User
  }