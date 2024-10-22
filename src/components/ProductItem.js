// src/components/ProductItem.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; 

function ProductItem({ product, onAddToCart }) {
  const [buttonText, setButtonText] = useState('담기');
  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    setButtonText('담김!');
    onAddToCart();
  };

  const handleBuyNowClick = () => {
    navigate('/card-registration');
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <div className="button-group">
        <button className="add-to-cart-button" onClick={handleAddToCartClick}>
          {buttonText}
        </button>
        <button className="buy-now-button" onClick={handleBuyNowClick}>
          구매
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
