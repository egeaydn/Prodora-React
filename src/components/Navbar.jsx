import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Premium Alışveriş</h1>
        </div>
        
        <div className="navbar-search">
          <input type="text" placeholder="Ürün ara..." />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="navbar-menu">
          <a href="#" className="menu-item">Ana Sayfa</a>
          <a href="#" className="menu-item">Kategoriler</a>
          <a href="#" className="menu-item">Yeni Gelenler</a>
          <a href="#" className="menu-item">İndirimler</a>
        </div>

        <div className="navbar-actions">
          <button className="action-button">
            <FaHeart />
            <span className="badge">0</span>
          </button>
          <button className="action-button">
            <FaShoppingBag />
            <span className="badge">0</span>
          </button>
          <button className="action-button">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 