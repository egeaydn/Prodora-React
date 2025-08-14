import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <h2>Sepetim</h2>
      {cartItems.length === 0 ? (
        <p>Sepetinizde ürün yok.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{width:60, height:60, borderRadius:8, marginRight:12}} />
              <span>{item.name}</span> - <span>{item.price} TL</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
