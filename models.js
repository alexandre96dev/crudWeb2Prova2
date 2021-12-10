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
livro.sync({force:true})

//LISTAR USUARIOS
usuario.findAll({raw:true}).then( usuario => {
    console.log(usuario);})

//LISTAR LIVROS
livro.findAll({raw:true}).then( livro => {
console.log(livro);})