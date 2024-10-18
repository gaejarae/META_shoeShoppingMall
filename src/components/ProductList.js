// src/components/ProductList.js
import React, { useState } from 'react';
import './Product.css'; // 통합된 CSS 파일을 불러옵니다.

// 로컬 이미지 import
import img1 from '../image/img1.jpeg';
import img2 from '../image/img2.jpeg';
import img3 from '../image/img3.jpeg';
import img4 from '../image/img4.jpeg';
import img5 from '../image/img5.jpeg';
import img6 from '../image/img6.jpeg';

const products = [
  { brand: '브랜드 A', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgUrl: img1 },
  { brand: '브랜드 A', description: '힙한 컬러가 매력적인 신발', price: '25,000원', imgUrl: img2 },
  { brand: '브랜드 B', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgUrl: img3 },
  { brand: '브랜드 B', description: '힙한 컬러가 매력적인 신발', price: '35,000원', imgUrl: img4 },
  { brand: '브랜드 C', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgUrl: img5 },
  { brand: '브랜드 C', description: '힙한 컬러가 매력적인 신발', price: '35,000원', imgUrl: img6 },
];

function ProductList({ onAddToCart }) {
  const [buttonState, setButtonState] = useState(Array(products.length).fill({ text: '담기', disabled: false }));

  const handleAddToCart = (index) => {
    onAddToCart();
    const updatedState = [...buttonState];
    updatedState[index] = { text: '담김!', disabled: true };
    setButtonState(updatedState);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img 
            src={product.imgUrl} 
            alt={`${product.brand} 이미지`} 
            className="product-image" // 필요에 따라 CSS 추가 가능
          />
          <div className="product-info">
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <button 
            className="add-to-cart-button" 
            onClick={() => handleAddToCart(index)} 
            style={{ backgroundColor: buttonState[index].disabled ? '#ccc' : 'black' }}
          >
            {buttonState[index].text}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
