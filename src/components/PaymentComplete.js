// src/components/PaymentComplete.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentComplete.css';

function PaymentComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount, totalAmount } = location.state || { itemCount: 0, totalAmount: 0 };

  return (
    <div className="payment-complete">
      <h1>결제 완료!</h1>
      <p>총 {itemCount}개의 상품을 구매하셨습니다.</p>
      <p>총 결제 금액</p>
      <p>{totalAmount.toLocaleString()}원</p>
      <button className="view-products-button" onClick={() => navigate('/')}>상품 목록 보기</button>
    </div>
  );
}

export default PaymentComplete;
