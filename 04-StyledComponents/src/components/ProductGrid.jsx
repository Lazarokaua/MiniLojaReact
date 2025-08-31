import React from 'react';
import ProductCard from './ProductCard';
import * as S from './ProductGrid.styles';

// eslint-disable-next-line react/prop-types
const ProductGrid = ({ products }) => {
  return (
    <S.Grid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Grid>
  );
};

export default ProductGrid;
