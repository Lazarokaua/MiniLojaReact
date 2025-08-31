import React from 'react';
import * as S from './ProductCard.styles';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image, buttonVariant } = product;

  return (
    <S.Card>
      <S.CardImagePlaceholder>
        <img src={image} alt={title} loading="lazy" />
      </S.CardImagePlaceholder>
      {tag && <S.Tag tag={tag}>{tag}</S.Tag>}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.Price>
        <S.Rating aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </S.Rating>
        <S.Button variant={buttonVariant || 'solid'}>Adicionar</S.Button>
      </S.Content>
    </S.Card>
  );
};

export default ProductCard;
