import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>Premium Alışveriş, en kaliteli ürünleri en uygun fiyatlarla sunan güvenilir alışveriş platformudur.</p>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/products">Ürünler</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kategoriler</h3>
          <ul>
            <li><Link to="/category/electronics">Elektronik</Link></li>
            <li><Link to="/category/fashion">Moda</Link></li>
            <li><Link to="/category/home">Ev & Yaşam</Link></li>
            <li><Link to="/category/sports">Spor</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <ul className="contact-info">
            <li>
              <FaPhone className="contact-icon" />
              <span>+90 555 123 4567</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@premiumalisveris.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>İstanbul, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Premium Alışveriş. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 