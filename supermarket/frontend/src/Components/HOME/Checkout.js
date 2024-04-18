import React from 'react';
import "./checkout.css";
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { totalAmount } = location.state;
console.log(totalAmount);
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Checkout;
