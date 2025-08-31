import React from 'react';
import * as S from './Navbar.styles';

// eslint-disable-next-line react/prop-types
const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <S.Nav>
      <S.Logo>MiniLoja</S.Logo>
      <S.Right>
        <S.ThemeToggle onClick={onToggleTheme} aria-label="Alternar tema">
          {theme === 'light' ? '🌙' : '☀️'}
        </S.ThemeToggle>
        <S.CartBadge aria-label="Carrinho com 3 itens">
          🛒
          <S.CartCount>3</S.CartCount>
        </S.CartBadge>
      </S.Right>
    </S.Nav>
  );
};

export default Navbar;
