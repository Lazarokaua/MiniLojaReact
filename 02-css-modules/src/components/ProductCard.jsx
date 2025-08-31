import React from 'react';

import styles from './ProductCard.module.css';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image, buttonVariant } = product;

  // Adiciona uma classe específica para a tag para facilitar a estilização
  const tagClassName = tag ? (tag === 'Novo' ? styles.tagNew : styles.tagPromo) : '';

  const buttonStyle = buttonVariant === 'outline' ? styles.btnOutline : buttonVariant === 'ghost' ? styles.btnGhost : styles.btnSolid;

  return (
    <div className={styles.productCard}>
      <div className={styles.cardImagePlaceholder}>
        <img src={image} alt={title} loading="lazy" />
      </div>
      {tag && <span className={`${styles.cardTag} ${tagClassName}`}>{tag}</span>}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardPrice}>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <div className={styles.cardRating} aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <button className={`${styles.btn} ${buttonStyle}`}>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;
