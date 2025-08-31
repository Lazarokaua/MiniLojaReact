

import React from 'react';
import * as S from './SkeletonCard.styles';

const SkeletonCard = () => {
  return (
    <S.Card>
      <S.Image />
      <S.Content>
        <S.Title />
        <S.Price />
        <S.Rating />
        <S.Button />
      </S.Content>
    </S.Card>
  );
};

export default SkeletonCard;
