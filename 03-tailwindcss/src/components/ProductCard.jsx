import React from 'react';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image, buttonVariant } = product;

  // Adiciona uma classe específica para a tag para facilitar a estilização
  const tagClassName = tag ? (tag === 'Novo' ? 'tag-new' : 'tag-promo') : '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative transform transition-transform duration-300 hover:scale-105">
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      {tag && (
        <span className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold ${
          tag === 'Novo' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }`}>
          {tag}
        </span>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <div className="text-yellow-400 mb-4" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <button className={`w-full py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
          buttonVariant === 'outline'
            ? 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
