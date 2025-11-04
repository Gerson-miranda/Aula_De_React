// projeto_aula\src\components\Header\index.jsx

import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Logo from '../../assets/logo-de-farmacia.png';
import './style.css';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo da Farmácia" />
        </Link>
      </div>

      <nav className="nav">
        <NavLink to="/servicos">serviços</NavLink>
        <NavLink to="/sobre-nos">sobre nós</NavLink>
        <NavLink to="/fale-conosco">contato</NavLink>

        <Link to="/carrinho" className="cart-icon">
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </nav>
    </header>
  );
}
