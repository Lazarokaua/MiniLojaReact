import React from 'react';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image, buttonVariant } = product;

  // Adiciona uma classe específica para a tag para facilitar a estilização
  const tagClassName = tag ? (tag === 'Novo' ? 'tag-new' : 'tag-promo') : '';

  return (
    <div className="product-card">
      <div className="card-image-placeholder">
        <img src={image} alt={title} loading="lazy" />
      </div>
      {tag && <span className={`card-tag ${tagClassName}`}>{tag}</span>}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <div className="card-rating" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <button className={`btn btn-${buttonVariant || 'solid'}`}>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;
