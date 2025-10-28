// projeto_aula\src\components\Funcionario\index.jsx

import { useState } from 'react'
import './style.css'

function Funcionario(){
    const[nome,setNome]= useState('')
    const[telefone,setTelefone]= useState('')

    const[funcionarios,setFuncionarios]= useState([])

    const handleAdicionarFuncionario = (event) =>{
        event.preventDefault()
        if(nome && telefone){
            setFuncionarios([...funcionarios,{nome,telefone}])
            setNome('')
            setTelefone('')
        }
    }
    return(
        <div className='container'>
            <h2>Adicionar Funcionario</h2>
            <form onSubmit={handleAdicionarFuncionario}>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome (e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone (e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
            <h3>Funcionario Adicionados</h3>
            <ul>
                {funcionarios.map((funcionarios, index) => (
                    <li key={index}>{funcionarios.nome} - {funcionarios.telefone}</li>
                ))}
            </ul>
        </div>
    )
}
export default Funcionario