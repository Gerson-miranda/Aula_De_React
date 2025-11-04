import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCart([...cart, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((soma, item) => soma + item.preco, 0);

  return (
    <CartContext.Provider value={{ cart, adicionarAoCarrinho, removerDoCarrinho, total }}>
      {children}
    </CartContext.Provider>
  );
}
