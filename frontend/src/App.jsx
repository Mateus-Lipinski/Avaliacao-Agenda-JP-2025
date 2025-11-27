import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Clientes from './pages/Clientes'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
import Atendimentos from './pages/Atendimentos'
import All_Atendimentos from './pages/Atendimentos/all_atendimentos'
import CreateAtendimento from './pages/Atendimentos/create'
import UpdateAtendimento from './pages/Atendimentos/update'
import { AuthProvider } from './auth/Content'
import PrivateRouter from './router/PrivateRouter'

function App() {

  // pegar token
  return (
    <AuthProvider>
      <Header />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp />}/>

        <Route element={<PrivateRouter />}>
          {/* Rotas do cliente */}
          <Route path='/clientes' element={<Clientes/>} />
          <Route path='/create/cliente' element={<CreateCliente/>} />
          <Route path='/update/cliente' element={<UpdateCliente/>} />
        </Route>

          {/* Rotas do atendimento */}
          <Route path='/atendimentos' element={<Atendimentos />} />
          <Route path='/all_atendimentos' element={<All_Atendimentos />} />
          <Route path='/create/atendimento' element={<CreateAtendimento />} />
          <Route path='/update/atendimento' element={<UpdateAtendimento />} />
      
      </Routes>

      <Footer />
    </AuthProvider>
  )
}

export default App