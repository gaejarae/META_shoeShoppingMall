// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CardRegistration from './components/CardRegistration';
import CardAddition from './components/CardAddition';
import Cart from './components/Cart'; // Cart 컴포넌트 import 추가
import './App.css';

function Header({ cartCount, onCartClick }) {
  const location = useLocation(); // 현재 경로를 가져옴
  const navigate = useNavigate(); // navigate 함수 추가

  const handleCartClick = () => {
    navigate('/cart');
  };

  // 경로가 "/"일 때만 헤더를 보여줌 (상품 목록 페이지)
  if (location.pathname === '/') {
    return (
      <div>
        <header className="header">
          <div className="cart-container" onClick={handleCartClick}> {/* onClick 이벤트 추가 */}
            🛒 {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
          </div>
        </header>
        <h1>신발 쇼핑몰입니다</h1>
        <h4>현재 6개의 신발이 있습니다</h4>
      </div>
    );
  }

  return null; // 다른 페이지에서는 헤더를 렌더링하지 않음
}

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 개수 상태
  const [cartItems, setCartItems] = useState([]); // 장바구니 아이템 상태 추가
  const [cards, setCards] = useState([]); // 카드 목록 상태

  // Handle adding items to the cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.brand === product.brand);
    if (existingItem) {
      // 이미 있는 제품이면 수량을 증가시킴
      handleUpdateQuantity(existingItem, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]); // 장바구니에 새로운 상품 추가 시 기본 수량 설정
    }
    setCartCount(cartCount + 1); // 상품 추가 시 개수 증가
  };

  const handleUpdateQuantity = (product, quantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.brand === product.brand ? { ...item, quantity } : item
      )
    );
  };

  // Handle adding a new card
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]); // 카드 추가
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} onCartClick={() => {}} />
        
        <Routes>
          <Route
            path="/"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />}
          />
          <Route
            path="/card-registration"
            element={<CardRegistration cards={cards} />}
          />
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
