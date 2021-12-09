const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs', 'root', '12345678', {dialect: 'mysql', host: 'localhost'})

const postagem = sequelize.define('postagem',{
    title:{
        type : Sequelize.STRING

    
    },
    conteudo: {
        type : Sequelize.TEXT

    } 

})
postagem.sync({
    force: true

})

// postagem.findAll({raw:true}).then( postagem => {
// console.log(postagem);

// })
    