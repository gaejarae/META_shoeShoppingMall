// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 개수 상태

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // 상품 추가 시 개수 증가
  };

  return (
    <div className="App">
      <header className="header">
        <div className="cart-container">
          🛒
          {cartCount > 0 && (
            <div className="cart-badge">{cartCount}</div>
          )}
        </div>
      </header>

      <div className="content">
        <h1>신발 쇼핑몰</h1>
        <h4>현재 6개의 상품이 있습니다.</h4>
        <ProductList onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;
