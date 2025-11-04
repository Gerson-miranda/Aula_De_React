import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './style.css';

export default function ServicosPage() {
  const { adicionarAoCarrinho } = useContext(CartContext);

  const produtos = [
    { id: 1, nome: "Paracetamol 500mg", preco: 12.90, imagem: "https://via.placeholder.com/150" },
    { id: 2, nome: "Ibuprofeno 200mg", preco: 18.50, imagem: "https://via.placeholder.com/150" },
    { id: 3, nome: "Vitamina C", preco: 25.00, imagem: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="ServicosPage">
      <h1>Produtos da Farmácia</h1>

      <div className="produtos-grid">
        {produtos.map((p) => (
          <div key={p.id} className="produto-card">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>R$ {p.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(p)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </section>
  );
}
