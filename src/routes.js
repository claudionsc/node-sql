const express = require('express')
const UserController = require('./controlers/UserController')
const AddressController = require('./controlers/AddressController')
const TechController = require('./controlers/TechController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

// MÉTODOS DO CONTROLLER 

routes.get('/users', UserController.index) 
routes.post('/users', UserController.store)

// RELACIONAIS 1-N
routes.get('/users/:user_id/addresses', AddressController.index) 
routes.post('/users/:user_id/addresses', AddressController.store)

// RELACIONAIS N-N
routes.get('/users/:user_id/techs', TechController.index) 
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

module.exports = routes