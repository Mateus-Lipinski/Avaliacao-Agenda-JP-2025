import { Link } from "react-router-dom"
import './style.css'
import { AuthContext } from '../../auth/Content'
import { useContext } from 'react'

function Header() {

    const { token } = useContext(AuthContext)

    return (
        <header>
            <h1>Avaliação</h1>

            <Link to={'/'}>
                <button>
                    Voltar para Home
                </button>
            </Link>

            {
                !token
                    ? null
                    : <Link to='/clientes'>
                        <button>
                            Clientes
                        </button>
                    </Link>
            }

            <Link to='/atendimentos'>
                <button>
                    Atendimentos
                </button>
            </Link>

            <Link to='/login'>
                <button>
                    Login
                </button>
            </Link>

        </header >
    )
}

export default Header