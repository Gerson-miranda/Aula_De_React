import {Routes,Routes} from 'react-router-dom'
import Header from './components/Header'
import Funcionario from './components/Funcionario'
import Footer from './components/Footer'
import './App.css'
import HomePage from './pages/HomePage'
import ADDFuncionarioPage from './pages/ADDFuncionarioPage'
import ListarPage from './pages/ListarPage'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="main-content">
          <Router path='/' element={<HomePage/>}></Router>
          <Router path='/cadastro' element={<ADDFuncionarioPage/>}></Router>
          <Router path='/listar' element={<ListarPage/>}></Router>
          {/* <h1>Gerson</h1> */}
          <Funcionario />
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default App