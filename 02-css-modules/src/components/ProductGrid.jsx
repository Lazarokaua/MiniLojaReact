import React from 'react';
import ProductCard from './ProductCard';

import styles from './ProductGrid.module.css';

// eslint-disable-next-line react/prop-types
const ProductGrid = ({ products }) => {
  return (
    <main className={styles.productGrid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default ProductGrid;
