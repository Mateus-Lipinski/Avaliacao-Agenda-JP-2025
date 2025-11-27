import { useEffect, useState } from 'react'
import { getAllAtendimentos } from '../../api/atendimentos'

function All_Atendimentos() {
    const [conteudo, setConteudo] = useState([])

    useEffect(() => {
        async function Carregar() {
            const todosAtendimentos = await getAllAtendimentos();
            setConteudo(todosAtendimentos);
        }
        Carregar();
    }, [])

    return (
        <main>
            {
                conteudo.length == 0
                    ? <div>
                        <label>Nenhum atendimento cadastrado (Ou não está logado)</label>
                    </div>
                    : conteudo.map(atendimentos =>
                        <div className='card char' key={atendimentos.id}>
                            <h2>Atendimento Nº: {atendimentos.id}</h2>
                            <h2>Dia: {atendimentos.dia}</h2>
                            <h2>Hora: {atendimentos.hora}</h2>
                            <h2>Valor: {atendimentos.valor}</h2>
                            <h2>Concluido: {atendimentos.concluido ? 'Sim' : 'Nao'}</h2>
                        </div>)
            }
        </main>
    )
}

export default All_Atendimentos