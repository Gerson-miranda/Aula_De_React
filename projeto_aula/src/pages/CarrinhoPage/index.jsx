import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './style.css';

export default function CarrinhoPage() {
  const { cart, removerDoCarrinho, total } = useContext(CartContext);
  const navigate = useNavigate(); // hook para navegar programaticamente

  return (
    <section className="CarrinhoPage">
      <h1>Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className="carrinho-lista">
            {cart.map((item, index) => (
              <li key={index} className="carrinho-item">
                <span>{item.nome}</span>
                <span>R$ {item.preco.toFixed(2)}</span>
                <button className="remover-btn" onClick={() => removerDoCarrinho(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="carrinho-total">
            <strong>Total:</strong> R$ {total.toFixed(2)}
          </div>

          <button 
            className="btn-pagar" 
            onClick={() => navigate("/pagamento")}
          >
            Ir para pagamento
          </button>
        </>
      )}
    </section>
  );
}
