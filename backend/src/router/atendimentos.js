import express from 'express'
import ControllerAtendimento from '../controller/atendimentos.js'
import authMiddleware from '../middleware/auth.js'

const routerAtendimento = express.Router()

//// api/v1
// rotas do atendimento
routerAtendimento.get('/atendimentos/:clienteId', authMiddleware(), ControllerAtendimento.FindAll)
routerAtendimento.get('/atendimento/:id', authMiddleware(), ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimento/:clienteId', authMiddleware(), ControllerAtendimento.Create)
routerAtendimento.put('/atendimento/:id', authMiddleware(), ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/:id', authMiddleware(), ControllerAtendimento.Delete)

export default routerAtendimento