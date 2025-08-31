import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.shadow};
  transition: background-color ${({ theme }) => theme.transition}, border-color ${({ theme }) => theme.transition};
  z-index: 10;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ThemeToggle = styled.button`
  font-size: 1.5rem;
`;

export const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.tagPromoBg};
  color: ${({ theme }) => theme.colors.tagText};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
`;