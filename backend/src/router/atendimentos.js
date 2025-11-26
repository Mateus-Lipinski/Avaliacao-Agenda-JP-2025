import express from 'express'
import ControllerAtendimento from '../controller/atendimentos.js'

const routerAtendimento = express.Router()

//// api/v1
// rotas do atendimento
routerAtendimento.get('/atendimentos/', ControllerAtendimento.FindAll)
routerAtendimento.get('/atendimento/:id', ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimento/', ControllerAtendimento.Create)
routerAtendimento.put('/atendimento/:id', ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default routerAtendimento