import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createAtendimento } from "../../api/atendimentos";
import './style.css'

export default function CreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        dia: '',
        hora: '',
        valor: '',
        concluido: false
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createAtendimento(atendimento)

        if (response.status === 201) {
            navigate('/atendimentos')
        }
    }

    return (
        <main>
            <div className="atendimento-container">
                <form className="atendimento-form">
                    <h2>Criando atendimento</h2>
                    <div className="input-group">
                        <label>Dia:</label>
                        <input type="number" name="dia" id="dia" value={atendimento.dia} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Hora:</label>
                        <input type="time" name="hora" id="hora" value={atendimento.hora} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Valor:</label>
                        <input type="number" name="valor" id="valor" value={atendimento.valor} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Concluido:</label>
                        <select
                            name="concluido"
                            value={atendimento.concluido}
                            onChange={(e) =>
                                setAtendimento({ ...atendimento, concluido: e.target.value === "true" })
                            }
                            >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <button type="reset">Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                        >Enviar</button>
                </form>
            </div>
        </main>
    )
}