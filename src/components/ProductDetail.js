import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';
import '../App.css'; // App.css를 불러와서 헤더 스타일 적용

function ProductDetail({ products, onAddToCart, cartCount }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const navigate = useNavigate();

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="App">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}> ← </button>
        <div className="cart-container" onClick={() => navigate('/cart')}>
          🛒 {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
        </div>
      </header>
      <div className="product-detail">
        <img src={product.imgUrl} alt={product.brand} className="product-image" />
        <div className="product-info">
          <h2>{product.brand}</h2>
          <p>{product.description}</p>
          <p>{product.price.toLocaleString()}원</p>
          <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>장바구니 담기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
