// projeto\src\components\InfoAluno\index.jsx

import './style.css'
import { useState } from 'react';


function InfoAluno(){
    // const nome = "Gerson Miranda"
    // const idade = 19
    // const curso = "Systems Analysis and Development"

    // hook useState
    const [nome, setNome] = useState("Gerson Miranda")
    const [idade, setIdade] = useState(19)
    const [curso, setCurso] = useState("Systems Analysis and Development")
    return(
        <div className="info-aluno">
            <h1>Student info</h1>
            <p>Nome: {nome} </p>
            <p>Age: {idade} </p>
            <p>Course: {curso} </p>
        </div>
    )
}
export default InfoAluno