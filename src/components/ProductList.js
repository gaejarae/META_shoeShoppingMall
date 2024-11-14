// src/components/ProductList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

// 로컬 이미지 import
import img1 from '../image/img1.jpeg';
import img2 from '../image/img2.jpeg';
import img3 from '../image/img3.jpeg';
import img4 from '../image/img4.jpeg';
import img5 from '../image/img5.jpeg';
import img6 from '../image/img6.jpeg';

const products = [
  { brand: '브랜드 A', description: '편안하고 착용감이 좋은 신발', price: 35000, imgUrl: img1, quantity: 1 },
  { brand: '브랜드 A', description: '힙한 컬러가 매력적인 신발', price: 25000, imgUrl: img2, quantity: 1 },
  { brand: '브랜드 B', description: '편안하고 착용감이 좋은 신발', price: 35000, imgUrl: img3, quantity: 1 },
  { brand: '브랜드 B', description: '힙한 컬러가 매력적인 신발', price: 35000, imgUrl: img4, quantity: 1 },
  { brand: '브랜드 C', description: '편안하고 착용감이 좋은 신발', price: 35000, imgUrl: img5, quantity: 1 },
  { brand: '브랜드 C', description: '힙한 컬러가 매력적인 신발', price: 35000, imgUrl: img6, quantity: 1 },
];

function ProductList({ onAddToCart }) {
  const [buttonState, setButtonState] = useState(Array(products.length).fill({ text: '담기', disabled: false }));
  const navigate = useNavigate();

  const handleAddToCart = (index) => {
    onAddToCart(products[index]); // 장바구니에 해당 상품을 추가
    const updatedState = [...buttonState];
    updatedState[index] = { text: '담김!', disabled: true };
    setButtonState(updatedState);
  };

  const handleBuyNow = () => {
    navigate('/card-registration');
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          <img src={product.imgUrl} alt={`${product.brand} 이미지`} className="product-image" />
          <div className="product-info">
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price.toLocaleString()}원</p>
          </div>
          <div className="button-group">
            <button 
              className="add-to-cart-button" 
              onClick={() => handleAddToCart(index)} 
              style={{ backgroundColor: buttonState[index].disabled ? '#ccc' : 'black' }}
            >
              {buttonState[index].text}
            </button>
            <button className="buy-now-button" onClick={handleBuyNow}>
              구매
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
