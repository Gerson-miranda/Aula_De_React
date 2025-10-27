// projeto-aulons\src\components\Footer\index.jsx

import './style.css'
function Footer(){
    return(
        <footer className='footer-container'>
            <p>&copy;{new Date().getFullYear()} Senai dendezeiros 
                <br />CNPJ: 12.345.678/002-94
            <p>Todos os direitos reservados</p>
            </p>
        </footer>
    )
}

export default Footer