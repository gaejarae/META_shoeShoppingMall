// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList';
import CardRegistration from './components/CardRegistration';
import CardAddition from './components/CardAddition';
import './App.css';

function Header() {
  const location = useLocation(); // 현재 경로를 가져옴

  // 경로가 "/"일 때만 헤더를 보여줌 (상품 목록 페이지)
  if (location.pathname === '/') {
    return (
      <div>
        <header className="header">
          <div className="cart-container">
            🛒
          </div>
        </header>
        <h1>신발 쇼핑몰입니다</h1>
        <h4>현재 신발이 있습니다</h4>
      </div>
    );
  }

  return null; // 다른 페이지에서는 헤더를 렌더링하지 않음
}

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 개수 상태
  const [cards, setCards] = useState([]); // 카드 목록 상태

  // Handle adding items to the cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // 상품 추가 시 개수 증가
  };

  // Handle adding a new card
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]); // 카드 추가
  };

  return (
    <Router>
      <div className="App">
        {/* Header가 조건부로 렌더링 */}
        <Header />
        
        <Routes>
          {/* Product List page */}
          <Route
            path="/"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          {/* Card Registration page */}
          <Route
            path="/card-registration"
            element={<CardRegistration cards={cards} />}
          />
          {/* Card Addition page */}
          <Route
            path="/add-card"
            element={<CardAddition onCardAdded={handleAddCard} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
