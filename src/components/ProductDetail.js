// src/components/ProductDetail.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail({ products, onAddToCart }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const navigate = useNavigate();

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate(-1)}>&lt; 뒤로가기</button>
      <img src={product.imgUrl} alt={product.brand} className="product-image" />
      <div className="product-info">
        <h2>{product.brand}</h2>
        <p>{product.description}</p>
        <p>{product.price.toLocaleString()}원</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>장바구니 담기</button>
      </div>
    </div>
  );
}

export default ProductDetail;
