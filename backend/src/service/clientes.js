import Cliente from '../model/clientes.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const jwt_segredo = "S3gREd0L3G4l"
const SALT = 10 // Deixe entre 10 e 12

class ServiceCliente {

    async FindAll() {
        const cliente = await Cliente.findAll()

        return cliente
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("favor informar o ID")
        }

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        return cliente
    }

    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("Faça o favor de preencher todos os campos!!!")
        }

        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await Cliente.create({
            nome,
            email,
            senha: senhaCriptografada,
        })
    }

    async Update(id, nome, email, senha) {
        if (!id) {
            throw new Error("Faça o favor de preencher todos os campos!!!")
        }

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        cliente.nome = nome || cliente.nome
        cliente.email = email || cliente.email
        cliente.senha = senha // Ternário / if()
            ? await bcrypt.hash(String(senha), SALT) // if / { * }
            : cliente.senha // else / } else

        await cliente.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error("favor informar o ID")
        }

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        await cliente.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error('Email ou senha inválidos!')
        }

        // se o email ou a senha for invalido eu não gero o token
        const cliente = await Cliente.findOne({ where: { email } })

        if (
            !cliente
            || !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error('Email ou senha inválidos!')
        }

        // criar o token
        return jwt.sign(
            { id: cliente.id, nome: cliente.nome, permissao: cliente.permissao },
            jwt_segredo,
            { expiresIn: 60 * 60 }
        )

    }

}

export default new ServiceCliente()