import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="menu-item">Ana Sayfa</Link>
          <Link to="/categories" className="menu-item">Kategoriler</Link>
          <Link to="/new-arrivals" className="menu-item">Yeni Gelenler</Link>
          <Link to="/discounts" className="menu-item">İndirimler</Link>
        </div>

        <div className="navbar-actions">
          <button className="action-button">
            <FaHeart />
            <span className="badge">0</span>
          </button>
          <Link to="/cart" className="action-button" style={{display:'flex',alignItems:'center',gap:'4px'}}>
            <FaShoppingBag />
            <span className="badge">0</span>
          </Link>
          <button className="action-button">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 