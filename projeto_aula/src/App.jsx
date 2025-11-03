import './App.css'

import Footer  from './componets/Footer'
import Header from './componets/Header'
import HomePage from './pages/HomePage'
import SobreNosPage from './pages/SobreNosPage'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/sobre-nos' element={<SobreNosPage/>}/>
      </Routes>
    </main>
      <Footer/>
    </>
  )
}

export default App
