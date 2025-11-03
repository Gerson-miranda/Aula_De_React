// projeto_aula\src\components\Header\index.jsx

import {Link,NavLink} from 'react-router-dom'
import Logo from '../../assets/Logo.png'

import './style.css'

export default function Header(){
    return(
        <header className='header-container'>
            <div className='logo'>
                <Link to='/'>
                <img src={Logo} alt="Logo da Contabilidade" />
                </Link>
            </div>
            <nav className='nav'>
                <NavLink to='./servicos' >servicos</NavLink>
                <NavLink to='./sobre-nos' >sobre-nos</NavLink>
                <NavLink to='./fale-conosco' >contato</NavLink>
            </nav>
        </header>
    )
}