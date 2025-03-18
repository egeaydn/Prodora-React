import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                favorites={favorites}
                onAddToFavorites={handleAddToFavorites}
                products={[
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
                ]}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
