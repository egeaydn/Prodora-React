import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, onAddToFavorites }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <button 
          className="favorite-button"
          onClick={() => onAddToFavorites(id)}
        >
          <FaHeart />
        </button>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">{price} TL</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard; 