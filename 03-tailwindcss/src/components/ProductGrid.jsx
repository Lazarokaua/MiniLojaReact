import React from 'react';
import ProductCard from './ProductCard';

// eslint-disable-next-line react/prop-types
const ProductGrid = ({ products }) => {
  return (
    <main className="grid gap-6 pt-28 px-8 pb-8 grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:px-4 sm:pb-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default ProductGrid;
