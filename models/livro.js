const Sequelize = require('sequelize');

//CONEXÃO COM O BANCO
const sequelize = new Sequelize('db', 'root', '12345678', {dialect: 'mysql', host: 'localhost'})

const livro = sequelize.define('livro',{
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
    },
    livro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
})

module.exports = livro