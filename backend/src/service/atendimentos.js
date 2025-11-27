import Atendimento from '../model/atendimentos.js'
import Cliente from '../model/clientes.js'

class ServiceAtendimento {

    async FindAll(clienteId) {

        const cliente = await Cliente.findByPk(clienteId)
        if(!cliente) {
            throw new Error(`Cliente ${id} não encontrado para conclusão de cadastro!`)
        }

        const atendimentos = await Atendimento.findAll({
            where: {
                clienteId: clienteId
            }
        })

        return atendimentos
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("favor informar o ID")
        }

        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        return atendimento
    }

    async Create(dia, hora, valor, concluido, clienteId) {
        if (!dia || !hora || !valor || concluido == null ) {
            throw new Error("Faça o favor de preencher todos os campos!!!")
        }

        const cliente = await Cliente.findByPk(clienteId)
        if(!cliente) {
            throw new Error(`Cliente ${id} não encontrado para conclusão de cadastro!`)
        }

        if( dia < 1 || dia > 31) {
            throw new Error("Preencha com um dia válido!")
        }

        await Atendimento.create({
            dia,
            hora,
            valor,
            concluido,
            clienteId
        })
    }

    async Update(id, dia, hora, valor, concluido) {
        if (!id) {
            throw new Error("Faça o favor de preencher todos os campos!!!")
        }

        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        atendimento.dia = dia || atendimento.dia
        atendimento.hora = hora || atendimento.hora
        atendimento.valor = valor || atendimento.valor
        atendimento.concluido = concluido || atendimento.concluido

        await atendimento.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error("favor informar o ID")
        }

        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        await atendimento.destroy()
    }
}

export default new ServiceAtendimento()