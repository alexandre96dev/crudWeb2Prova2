
const express = require('express')
const cors = require('cors')
const app = express()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('db', 'root', '12345678', {dialect: 'mysql', host: 'localhost'})
const usuarios = require('./models/usuario.js')
const livro = require('./models/livro.js');
const usuario = require('./models/usuario.js');

app.listen(5500, () => console.log('Rodando na porta 5500'))



app.use(cors())

app.use(express.json())



let users = [
	usuario.all()
]

let livros = [
	livro.all()
]
app.route('/api').get((req, res) => res.json({ 
	users
}))



app.route('/api/:id').get((req, res) => { 
	const userId = req.params.id 
	const user = users.find(user => Number(user.id) === Number(userId)) 
	if (!user) { 
		return res.json('User nor found!') 
	} 
	res.json(user)
})

app.route('/api/').post((req, res) => { 
	const lastId = users[users.length - 1].id 
	users.push(
		{ 
		  id: lastId + 1, 
		  name: req.body.name, 
		  email: req.body.email,
		  senha: req.body.senha,
		  city: req.body.city 
		}
	)
	usuario.create({
		id: lastId + 1, 
		name: req.body.name, 
		email: req.body.email,
		password: req.body.senha,
		cidade: req.body.city 
	}) 
	res.json('Saved user')
})
app.route('/api/:id').put((req, res) => { 
	const userId = req.params.id 
	const user = users.find(user => Number(user.id) === Number(userId)) 
	if (!user) { 
		return res.json('User nor found!') 
	} 
	const updatedUser = { 
		...user, 
		name: req.body.name, 
		email: req.body.email,
		senha: req.body.senha,
		city: req.body.city 
	} 
	users = users.map(user => { 
	if (Number(user.id) === Number(userId)) { 
		user = updatedUser 
	} 
		return user 
	}) 
	res.json("Updated user")
})
app.route('/api/:id').delete((req, res) => { 
	const userId = req.params.id 
	users = users.filter(user => Number(user.id) !== Number(userId)) 

	usuario.destroy({where: {'id': userId}})
	res.json('Deleted User')


})
//--------------------------------------------------------------------------
app.route('/book').get((req, res) => res.json({ 
	livros
}))
app.route('/book/:id').get((req, res) => { 
	const livroId = req.params.id 
	const livro = livros.find(livro => Number(livro.id) === Number(livroId)) 
	if (!livro) { 
		return res.json('livro nor found!') 
	} 
	res.json(livro)
})

app.route('/book/').post((req, res) => { 
	const lastId = livros[livros.length - 1].id 
	livros.push(
		{ 
		  id: lastId + 1, 
		  name: req.body.name, 
		  isbn: req.body.isbn,
		  autor: req.body.autor,
		  data: req.body.data 
		}
	)
	livro.create({
		id: lastId + 1, 
		name: req.body.name, 
		ISBN: req.body.isbn,
		Autor: req.body.autor,
	}) 
	res.json('Saved user')
})
app.route('/book/:id').put((req, res) => { 
	const livroId = req.params.id 
	const livro = livros.find(livro => Number(livro.id) === Number(livroId)) 
	if (!livro) { 
		return res.json('livro nor found!') 
	} 
	const updatedlivro = { 
		...livro, 
		name: req.body.name, 
		isbn: req.body.isbn,
		autor: req.body.autor,
		data: req.body.data 
	} 
	livros = livros.map(livro => { 
	if (Number(livro.id) === Number(livroId)) { 
		livro = updatedlivro 
	} 
		return livro 
	}) 
	res.json("Updated user")
})
app.route('/book/:id').delete((req, res) => { 
	const livroId = req.params.id 
	livros = livros.filter(livro => Number(livro.id) !== Number(livroId))
	livro.destroy({where: {'id': livroId}}) 
	res.json('Deleted livro')
})