// src/components/ProductItem.js
import React, { useState } from 'react';
import './Product.css'; // 통합된 CSS 파일을 불러옵니다.

function ProductItem({ product, onAddToCart }) {
  const [buttonText, setButtonText] = useState('담기');

  const handleClick = () => {
    setButtonText('담김!');
    onAddToCart();
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <button className="add-to-cart-button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default ProductItem;
