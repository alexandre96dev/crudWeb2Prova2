const Sequelize = require('sequelize');

//CONEXÃO COM O BANCO
const sequelize = new Sequelize('db', 'root', '', {dialect: 'mysql', host: 'localhost'})

const livro = sequelize.define('livro',{
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
    ISBN: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Autor: {
      type: Sequelize.STRING,
      allowNull: false,
    }
})

module.exports = livro