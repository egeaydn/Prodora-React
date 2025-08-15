import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, onAddToFavorites, onAddToCart, onDetail }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image" onClick={onDetail} style={{cursor:'pointer'}}>
        <img src={image} alt={name} />
        <button 
          className="favorite-button"
          onClick={(e) => {e.stopPropagation(); onAddToFavorites(id);}}
        >
          <FaHeart />
        </button>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">{price} TL</p>
        <p className="description">{description}</p>
        <button className="cart-add-button" onClick={() => onAddToCart(product)}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 