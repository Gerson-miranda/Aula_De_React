// src/pages/PagamentoPage/index.jsx
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function PagamentoPage() {
  const { cart, clearCart } = useContext(CartContext);
  const [nome, setNome] = useState("");
  const [cartao, setCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

  const handlePagamento = (e) => {
    e.preventDefault();
    alert("Pagamento realizado com sucesso!");
    clearCart(); // esvazia o carrinho
    navigate("/"); // redireciona para a home
  };

  return (
    <section className="pagamento-page">
      <h2>Pagamento</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="resumo-carrinho">
            <h3>Resumo do Pedido</h3>
            {cart.map((item, index) => (
              <div key={index} className="resumo-item">
                <span>{item.nome}</span>
                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
            ))}
            <div className="total">
              <strong>Total:</strong> R$ {total}
            </div>
          </div>

          <form className="form-pagamento" onSubmit={handlePagamento}>
            <label>
              Nome no Cartão
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </label>
            <label>
              Número do Cartão
              <input
                type="text"
                value={cartao}
                onChange={(e) => setCartao(e.target.value)}
                placeholder="0000 0000 0000 0000"
                required
              />
            </label>
            <label>
              Validade
              <input
                type="text"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
                placeholder="MM/AA"
                required
              />
            </label>
            <label>
              CVV
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
              />
            </label>

            <button type="submit" className="btn primary">
              Confirmar Pagamento
            </button>
          </form>
        </>
      )}
    </section>
  );
}
