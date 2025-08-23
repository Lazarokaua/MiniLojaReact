import React from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MiniLoja</div>
      <div className="navbar-right">
        <button onClick={onToggleTheme} className="theme-toggle" aria-label="Alternar tema">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="cart-badge" aria-label="Carrinho com 3 itens">
          🛒
          <span className="cart-count">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
