const express = require('express')

const AnuncianteController = require('./controllers/AnuncianteController')
const ImovelController = require('./controllers/ImovelController')

const routes = express.Router();

routes.get('/imoveis', ImovelController.index)
routes.post('/imoveis', ImovelController.create)
routes.delete('/imoveis/:id', ImovelController.delete)

routes.get('/anunciante', AnuncianteController.index)
routes.post('/anunciante', AnuncianteController.create)

module.exports = routes