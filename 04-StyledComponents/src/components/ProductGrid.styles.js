import styled from 'styled-components';

export const Grid = styled.main`
  display: grid;
  gap: 1.5rem;
  padding: 7rem 2rem 2rem; /* Top padding to account for fixed navbar */
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 7rem 1rem 1rem;
  }
`;