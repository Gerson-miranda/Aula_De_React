import './App.css'

import Footer  from './componets/Footer'
import Header from './componets/Header'
import HomePage from './pages/HomePage'
import SobreNosPage from './pages/SobreNosPage'
import FaleConoscoPage from './pages/FaleConoscoPage'
import ServicosPage from './pages/ServicosPage'
import CarrinhoPage from './pages/CarrinhoPage'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import PagamentoPage from './pages/PagamentoPage';

function App() {
  return (
    <CartProvider>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sobre-nos' element={<SobreNosPage/>}/>
          <Route path='/fale-conosco' element={<FaleConoscoPage/>}/>
          <Route path='/servicos' element={<ServicosPage/>}/>
          <Route path='/carrinho' element={<CarrinhoPage/>}/>
          <Route path='/pagamento' element={<PagamentoPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </CartProvider>
  )
}

export default App
