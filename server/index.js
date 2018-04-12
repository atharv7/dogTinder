const express = require('express')
const app = express()

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

var User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
  primaryKey: true },
  name: Sequelize.STRING,
  emailaddress: Sequelize.STRING,
  breedsliked: Sequelize.STRING
}, {
  tableName: 'users',
  timestamps: false
})

app.get('/users/:id', (request, response) => {
  const userId = request.params.id
  User.findById(userId).then(user => {
    response.send(user)
  })
})

app.get('/users', (request, response) => {
  User.findAll().then(users => {
    response.send({ users })
  })
})

User.findById(1).then((user) => console.log(JSON.stringify(user)))
