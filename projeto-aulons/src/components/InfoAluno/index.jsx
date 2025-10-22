// projeto-aulons\src\components\InfoAluno\index.jsx
import './style.css'
import { useState } from 'react';


function InfoAluno(){
    // const nome = "Gerson Miranda"
    // const idade = 19
    // const curso = "Systems Analysis and Development"

    // hook useState
    const [nome, setNome] = useState("Gerson Miranda")
    const [idade, setIdade] = useState(19)
    const [peso, setPeso] = useState(80)
    const [altura, setAltura] = useState(1.75)
    const [turma, setTurma] = useState("3A")
    const [curso, setCurso] = useState("Systems Analysis and Development")
    const [turno, setTurno] = useState("Night")
    return(
        <div className="info-aluno">
            <h1>Student info</h1>
            <p>Nome: {nome} </p>
            <p>Age: {idade} </p>
            <p>Weight: {peso} kg</p>
            <p>Height: {altura} m</p>
            <p>Class: {turma} </p>
            <p>Course: {curso} </p>
            <p>Shift: {turno} </p>
        </div>
    )
}
export default InfoAluno
