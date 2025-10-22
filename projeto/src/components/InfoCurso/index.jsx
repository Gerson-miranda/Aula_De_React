// projeto\src\components\InfoCurso\index.jsx

import'./style.css'
import { useState } from 'react';

function InfoCurso(){
    // const nomeCurso = "Systems Analysis and Development"
    // const duracao = "2 years"
    // const modalidade = "Online"
    const [nomeCurso, setNomeCurso] = useState("Systems Analysis and Development")
    const [cargaHoraria, setDuracao] = useState("360 hours")
    const [local, setModalidade] = useState("Senai")
    const [dateStart, setDataInicio] = useState("01/08/2024")
    const [dateTerm, setDataTermino] = useState("01/08/2026")
    return(
        <div className="info-curso">
            <h1>Course info</h1>
            <p>Course Name: {nomeCurso} </p>
            <p>Duration: {cargaHoraria} </p>
            <p>local: {local} </p>
            <p>dateStart: {dateStart} </p>
            <p>dateTerm:{dateTerm}</p>
        </div>
    )
}

export default InfoCurso