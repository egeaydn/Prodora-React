import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import HomeSlider from '../components/Slider';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ favorites, onAddToFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Örnek ürün verileri
  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      price: 12999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Yüksek performanslı, ince ve hafif laptop"
    },
    {
      id: 2,
      name: "Akıllı Saat",
      price: 2499,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Fitness takibi ve bildirimler için akıllı saat"
    },
    {
      id: 3,
      name: "Kablosuz Kulaklık",
      price: 1999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Aktif gürültü önleme özellikli kulaklık"
    },
    {
      id: 4,
      name: "Akıllı Telefon",
      price: 15999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Son teknoloji akıllı telefon"
    },
    {
      id: 5,
      name: "Tablet",
      price: 8999,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "İnce ve hafif tablet"
    },
    {
      id: 6,
      name: "Akıllı Ev Sistemi",
      price: 3999,
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Tüm evinizi kontrol edin"
    }
  ];

  // Filtreleme ve sıralama işlemleri
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesPrice = true;
      switch (priceFilter) {
        case 'under1000':
          matchesPrice = product.price < 1000;
          break;
        case '1000to5000':
          matchesPrice = product.price >= 1000 && product.price <= 5000;
          break;
        case '5000to10000':
          matchesPrice = product.price > 5000 && product.price <= 10000;
          break;
        case 'over10000':
          matchesPrice = product.price > 10000;
          break;
        default:
          matchesPrice = true;
      }

      return matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <div className="home-page">
      <div className="home">
        <Navbar />
        <HomeSlider />
        
        <div className="section-title">
          <h2>Öne Çıkan Ürünler</h2>
          <p>En çok tercih edilen ürünlerimiz</p>
        </div>

        <div className="filters">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="price-filter">
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="all">Tüm Fiyatlar</option>
              <option value="under1000">1000 TL Altı</option>
              <option value="1000to5000">1000 TL - 5000 TL</option>
              <option value="5000to10000">5000 TL - 10000 TL</option>
              <option value="over10000">10000 TL Üstü</option>
            </select>
          </div>

          <div className="sort-filter">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Varsayılan Sıralama</option>
              <option value="priceAsc">Fiyat (Düşükten Yükseğe)</option>
              <option value="priceDesc">Fiyat (Yüksekten Düşüğe)</option>
              <option value="nameAsc">İsim (A-Z)</option>
              <option value="nameDesc">İsim (Z-A)</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-link">
              <ProductCard
                product={product}
                onAddToFavorites={onAddToFavorites}
                isFavorite={favorites.includes(product.id)}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home; 