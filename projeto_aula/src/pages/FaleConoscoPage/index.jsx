// projeto_aula\src\pages\FaleConoscoPage\index.jsx

import './style.css'

export default function FaleConoscoPage(){
    function handlesubmit(){
        e.preventDefault();
        alert("Mensagem envida! em breve entraremos em contato.")
    }
    return(
        <section className='FaleConoscoPage'>
            <h1>fale conosco</h1>
            <p>
                Tire suas dúvidas e peça um orçamento sem compromisso

            </p>
            <form className='form' onSubmit={handlesubmit} >
                <div className='grid- cols-3'>
                    <label htmlFor="field">
                        <span>Nome</span>
                        <input type="text"  required placeholder='Seu Nome'/>
                    </label>
                    <label className='field'>
                        <span>E-mail</span>
                        <input type="text" required placeholder='voce@email.com' />
                    </label>
                    <label className='field'>
                        <span>telefone</span>
                        <input type="text" required placeholder='(00) 00000-00000' />
                    </label>
                    <label className='field'>
                        <span>CPF</span>
                        <input type="text" required placeholder=' 00.0000.000-00' />
                    </label>
                </div>

                <label htmlFor="">
                    <span>Assuntos</span>
                    <input type="text" required placeholder='EX.: Abertura de empresa' />
                </label>

                <label htmlFor="">
                    <span>Mensagem</span>
                    <textarea rows="6" required placeholder='Conte-nos um pouco de seu caso'></textarea>
                    </label>

                    <button className='btn primary' type='submit' >Enviar</button>
            </form>
        </section>
    )
}