const Sequelize = require('sequelize');

//CONEXÃO COM O BANCO
const sequelize = new Sequelize('db', 'root', '12345678', {dialect: 'mysql', host: 'localhost'})

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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
})
usuario.sync({force:true})