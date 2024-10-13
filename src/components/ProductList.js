// src/components/ProductList.js
import React, { useState } from 'react';
import './Product.css'; // 통합된 CSS 파일을 불러옵니다.

const products = Array(6).fill({
  brand: '브랜드 A',
  description: '편안하고 착용감이 좋은 신발',
  price: '35,000원',
});

function ProductList({ onAddToCart }) {
  const [buttonState, setButtonState] = useState(Array(products.length).fill({ text: '담기', disabled: false })); // 버튼 상태 초기화

  const handleAddToCart = (index) => {
    onAddToCart();
    const updatedState = [...buttonState];
    updatedState[index] = { text: '담기!', disabled: true }; // 버튼 클릭 시 텍스트 변경 및 비활성화
    setButtonState(updatedState);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img 
            src={`https://via.placeholder.com/184x123`} 
            alt={`${product.brand} 이미지`} 
          />
          <div className="product-info">
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <button 
            className="add-to-cart-button" 
            onClick={() => handleAddToCart(index)} 
            style={{ backgroundColor: buttonState[index].disabled ? '#ccc' : 'black' }} // 버튼 색상 변경
          >
            {buttonState[index].text} {/* 현재 텍스트 표시 */}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
