import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CardRegistration from './components/CardRegistration';
import CardAddition from './components/CardAddition';
import Cart from './components/Cart';
import PaymentComplete from './components/PaymentComplete';
import ProductDetail from './components/ProductDetail';
import './App.css';

// 로컬 이미지 import
import img1 from './image/img1.jpeg';
import img2 from './image/img2.jpeg';
import img3 from './image/img3.jpeg';
import img4 from './image/img4.jpeg';
import img5 from './image/img5.jpeg';
import img6 from './image/img6.jpeg';

function Header({ cartCount, onCartClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  if (location.pathname === '/') {
    return (
      <div>
        <header className="header">
          <div className="cart-container" onClick={handleCartClick}>
            🛒 {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
          </div>
        </header>
        <h1>신발 쇼핑몰입니다</h1>
        <h4>현재 6개의 신발이 있습니다</h4>
      </div>
    );
  }

  return null;
}

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, brand: '브랜드 A', description: '편안하고 착용감이 좋은 신발', price: 35000, imgUrl: img1 },
    { id: 2, brand: '브랜드 A', description: '힙한 컬러가 매력적인 신발', price: 25000, imgUrl: img2 },
    { id: 3, brand: '브랜드 B', description: '편안하고 착용감이 좋은 신발', price: 45000, imgUrl: img3 },
    { id: 4, brand: '브랜드 B', description: '힙한 컬러가 매력적인 신발', price: 35000, imgUrl: img4 },
    { id: 5, brand: '브랜드 C', description: '편안하고 착용감이 좋은 신발', price: 35000, imgUrl: img5 },
    { id: 6, brand: '브랜드 C', description: '힙한 컬러가 매력적인 신발', price: 35000, imgUrl: img6 }
  ]);
  const [cards, setCards] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
  };

  const handleUpdateQuantity = (product, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetail products={products} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />}
          />
          <Route
            path="/card-registration"
            element={<CardRegistration cards={cards} cartItems={cartItems} />}
          />
          <Route
            path="/add-card"
            element={<CardAddition onCardAdded={handleAddCard} />}
          />
          <Route
            path="/payment-complete"
            element={<PaymentComplete />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
