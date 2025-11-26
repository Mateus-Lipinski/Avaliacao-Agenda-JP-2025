import express from 'express'
import cors from 'cors'
import routerCliente from './router/clientes.js'
import routerAtendimento from './router/atendimentos.js'
import database from './config/database.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', routerCliente)
app.use('/api/v1', routerAtendimento)

const porta = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(porta, () => {
            console.info("Servidor rodando na porta " + porta)
        })
    })
    .catch((e) => {
        console.log("Não foi possível conectar com o banco"+ e)
    })