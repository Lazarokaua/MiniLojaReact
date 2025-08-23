import React from 'react';
import ProductCard from './ProductCard';

// eslint-disable-next-line react/prop-types
const ProductGrid = ({ products }) => {
  return (
    <main className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default ProductGrid;
