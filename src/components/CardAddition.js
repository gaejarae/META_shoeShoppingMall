// src/components/CardAddition.js
import React, { useState } from 'react';
import './CardAddition.css';
import { useNavigate } from 'react-router-dom';


function CardAddition({ onCardAdded }) {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  const handleCompleteClick = () => {
    // Create a new card object
    const newCard = {
      cardNumber: `************${cardNumber.slice(-4)}`, // Hide the first 12 digits
      expiryDate,
      cardHolderName, // Corrected from cardHolder to cardHolderName
      securityCode: '***', // Hide security code
      password: '****' // Hide password
    };

    // Add the new card to the parent component's state
    onCardAdded(newCard);
    
    // Navigate back to the Card Registration page
    navigate('/card-registration');
  };

  return (
    <div className="add-card-screen">
      <header>
        <button className="back-button" onClick={() => navigate(-1)}>&lt;</button>
        <button className="close-button" onClick={() => navigate('/')}>⨉</button>
      </header>

      <h2>카드 추가하기</h2>
      <div className="card-preview">카드 이미지</div>

      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="카드 번호"
        maxLength="16"
      />

      <input
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="MM/YY"
        maxLength="5"
      />

      <input
        type="text"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength="30"
      />

      <input
        type="password"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        placeholder="CVC/CVV"
        maxLength="3"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value.slice(0, 2))} // Limit to 2 digits
        placeholder="비밀번호 (앞 두 자리)"
        maxLength="2"
      />

      <button onClick={handleCompleteClick}>작성완료</button>
    </div>
  );
}

export default CardAddition;
