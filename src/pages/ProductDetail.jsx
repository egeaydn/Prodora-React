import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import Footer from '../components/Footer';
import './ProductDetail.css';

const ProductDetail = ({ products, onAddToFavorites, favorites, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-detail-error">Ürün bulunamadı</div>;
  }

  // Örnek ürün görselleri
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];

  return (
    <div className="product-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Geri Dön
      </button>
      <div className="product-detail-container">
        <div className="product-detail-gallery">
          <div className="main-image">
            <img src={productImages[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-list">
            {productImages.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <div className="product-rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="star-icon" />
              ))}
            </div>
            <span className="rating-count">(128 değerlendirme)</span>
          </div>
          <p className="product-detail-price">{product.price.toLocaleString('tr-TR')} TL</p>
          <p className="product-detail-desc">{product.description}</p>
          <div className="product-detail-actions">
            <button 
              className={`favorite-detail-button${favorites.includes(product.id) ? ' active' : ''}`}
              onClick={() => onAddToFavorites(product.id)}
              style={{
                padding: '0.7rem 1.4rem',
                background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginRight: '1rem',
                boxShadow: '0 2px 8px rgba(79,70,229,0.08)',
                transition: 'background 0.2s, box-shadow 0.2s'
              }}
            >
              <FaHeart /> Favorilere Ekle
            </button>
            <button 
              className="cart-detail-button"
              onClick={() => onAddToCart(product)}
              style={{
                padding: '0.7rem 1.4rem',
                background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(79,70,229,0.08)',
                transition: 'background 0.2s, box-shadow 0.2s'
              }}
            >
              <FaShoppingCart /> Sepete Ekle
            </button>
          </div>
          <div className="product-features">
            <h3>Özellikler</h3>
            <ul>
              <li>Yüksek kaliteli malzeme</li>
              <li>Garanti süresi: 2 yıl</li>
              <li>Ücretsiz kargo</li>
              <li>7/24 destek</li>
            </ul>
          </div>
          <div className="product-benefits">
            <div className="benefit-item">
              <FaTruck />
              <span>Ücretsiz Kargo</span>
            </div>
            <div className="benefit-item">
              <FaShieldAlt />
              <span>Güvenli Alışveriş</span>
            </div>
            <div className="benefit-item">
              <FaUndo />
              <span>Kolay İade</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail; 