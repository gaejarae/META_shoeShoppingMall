// src/components/CardRegistration.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardRegistration.css';

function CardRegistration({ cards, cartItems }) { // cartItems prop 추가
  const navigate = useNavigate();

  const handleAddCardClick = () => {
    navigate('/add-card'); // 카드 추가 화면으로 이동
  };

  const handlePayWithCard = () => {
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    navigate('/payment-complete', {
      state: { itemCount, totalAmount }
    });
  };

  return (
    <div className="card-registration-screen">
      <header>
        <button className="back-button" onClick={() => navigate(-1)}>&lt;</button>
        <button className="close-button" onClick={() => navigate('/')}>⨉</button>
      </header>
      <h2>카드 등록하기</h2>

      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div key={index} className="card-item">
            <p>카드 {index + 1} (**** **** **** {card.cardNumber.slice(-4)})</p>
            <button onClick={handlePayWithCard}>이 카드로 결제하기</button>
          </div>
        ))
      ) : (
        <p>등록된 카드가 없습니다.</p>
      )}

      <div className="add-card-container">
        <button className="add-card-button" onClick={handleAddCardClick}>+</button>
      </div>
    </div>
  );
}

export default CardRegistration;
