// projeto_aula\src\components\Header\index.jsx

import './style.css'
function Header(){
    return(
        <header className="header-container">
            <div className="logo">Sistema de Funcionarios</div>
            <nav>
                <link to="/">Home</link>
                <link to="/cadastro">Cadastrar</link>
                <link to="/listar">Ver Todos</link>
            </nav>
        </header>
    )
}
export default Header