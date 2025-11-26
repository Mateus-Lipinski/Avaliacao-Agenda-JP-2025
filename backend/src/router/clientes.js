import express from 'express'
import ControllerCliente from '../controller/clientes.js'
import authMiddleware from '../middleware/auth.js'

const routerCliente = express.Router()

// rota do login
routerCliente.post('/login', ControllerCliente.Login)

//// api/v1
// rotas do cliente
routerCliente.get('/clientes/', authMiddleware(), ControllerCliente.FindAll)
routerCliente.get('/cliente/:id', authMiddleware(), ControllerCliente.FindOne)
routerCliente.post('/cliente/', ControllerCliente.Create)
routerCliente.put('/cliente/:id', authMiddleware(), ControllerCliente.Update)
routerCliente.delete('/cliente/:id', authMiddleware(), ControllerCliente.Delete)

export default routerCliente