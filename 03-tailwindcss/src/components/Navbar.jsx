import React from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 px-8 bg-card-bg border-b border-border-color shadow-DEFAULT transition-colors duration-DEFAULT z-10">
      <div className="font-bold text-2xl">MiniLoja</div>
      <div className="flex items-center gap-6">
        <button onClick={onToggleTheme} className="text-2xl" aria-label="Alternar tema">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="relative text-2xl" aria-label="Carrinho com 3 itens">
          🛒
          <span className="absolute top-[-5px] right-[-10px] bg-tag-promo-bg text-tag-text rounded-full w-5 h-5 flex justify-center items-center text-xs font-bold">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
