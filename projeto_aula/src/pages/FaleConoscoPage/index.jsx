// projeto_aula\src\pages\FaleConoscoPage\index.jsx

import './style.css'

export default function SobreNosPage(){
    return(
        <section className='sobre'>
            <h1>fale conosco</h1>
            <p>
                Tire suas dúvidas e peça um orçamento sem compromisso

            </p>
            <form className='form' onSubmit={handlesubmit} >
                <div className='grid- cols-3'>
                    <label htmlFor="field">
                        <span>Nome</span>
                        <input type="text" />
                    </label>
                </div>
            </form>
        </section>
    )
}