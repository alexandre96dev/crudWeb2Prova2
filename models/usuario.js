const Sequelize = require('sequelize');

//CONEXÃO COM O BANCO
const sequelize = new Sequelize('db', 'root', '', {dialect: 'mysql', host: 'localhost'})

const usuario = sequelize.define('usuario',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
})
module.exports = usuario