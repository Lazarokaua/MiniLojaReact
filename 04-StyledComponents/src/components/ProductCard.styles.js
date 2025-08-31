import styled, { css } from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.shadow};
  }
`;

export const CardImagePlaceholder = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.skeletonBg};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Tag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tagText};
  background-color: ${({ theme, tag }) => (tag === 'Novo' ? theme.colors.tagNewBg : theme.colors.tagPromoBg)};
`;

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  height: 2.8em; /* 2 lines * 1.4 line-height */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Rating = styled.div`
  color: ${({ theme }) => theme.ratingColor};
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transition};
  margin-top: auto;
  border: 2px solid transparent;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.primaryText};
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.shadow};
          }
        `;
      default: // solid
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.primaryText};
          &:hover {
            opacity: 0.85;
          }
        `;
    }
  }}
`;