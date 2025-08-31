import styled, { keyframes } from 'styled-components';

const skeletonPulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Skeleton = styled.div`
  animation: ${skeletonPulse} 1.5s infinite alternate;
  background-color: ${({ theme }) => theme.colors.skeletonBg};
  border-radius: 12px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled(Skeleton)`
  width: 100%;
  height: 200px;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Title = styled(Skeleton)`
  width: 80%;
  height: 20px;
  margin-bottom: 0.5rem;
`;

export const Price = styled(Skeleton)`
  width: 50%;
  height: 24px;
  margin-bottom: 0.5rem;
`;

export const Rating = styled(Skeleton)`
  width: 70%;
  height: 16px;
  margin-bottom: 1rem;
`;

export const Button = styled(Skeleton)`
  width: 100%;
  height: 48px;
`;