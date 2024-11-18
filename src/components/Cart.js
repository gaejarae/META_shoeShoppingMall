// src/components/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, onUpdateQuantity }) {
  const navigate = useNavigate();
  // 배송비 계산
  const calculateShipping = (total) => (total >= 100000 ? 0 : 3000);

  // 총금액, 배송비 및 최종금액 계산
  const calculateTotal = () => {
    const itemTotal = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price); // 가격을 숫자로 변환
      const quantity = parseInt(item.quantity, 10) || 1; // 수량을 숫자로 변환, 기본 값 1 설정
      if (isNaN(price) || isNaN(quantity)) {
        return sum;
      }
      return sum + price * quantity;
    }, 0);
    const shipping = calculateShipping(itemTotal);
    return { itemTotal, shipping, grandTotal: itemTotal + shipping };
  };

  const { itemTotal, shipping, grandTotal } = calculateTotal();

  return (
    <div className="cart">
    <button className="back-button" onClick={() => navigate(-1)}>{'←'}</button>
      <h2>장바구니</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.imgUrl} alt={`${item.brand} 이미지`} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.brand}</h3>
                <p>{item.price.toLocaleString()}원</p>
                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(item, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <div>
            <p>상품 금액: {itemTotal.toLocaleString()}원</p>
            <p>배송비: {shipping.toLocaleString()}원</p>

            <div className="cart-summary">
            <p className="grand-total">총 금액: {grandTotal.toLocaleString()}원</p>
            </div>
          </div>
          <button className="checkout-button" onClick={() => navigate('/card-registration')}>결제하기</button>
        </div>
      ) : (
        <p>장바구니가 비어 있습니다.</p>
      )}
    </div>
  );
}

export default Cart;
