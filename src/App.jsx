import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToFavorites = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const handleAddToCart = (product) => {
    setCart(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              favorites={favorites}
              onAddToFavorites={handleAddToFavorites}
              cartItems={cart}
              onAddToCart={handleAddToCart}
            />
          } 
        />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cart} />} 
        />
        <Route 
          path="/product/:id" 
          element={
            <ProductDetail 
              favorites={favorites}
              onAddToFavorites={handleAddToFavorites}
              onAddToCart={handleAddToCart}
              products={[
                {
                  id: 1,
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
  );
}

export default App;
