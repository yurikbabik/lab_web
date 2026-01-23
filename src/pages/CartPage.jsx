import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';
import PrimaryButton from '../components/PrimaryButton';

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="empty-cart">
        <p>Your cart is empty</p>
        <Link to="/catalog">
          <PrimaryButton>Continue Shopping</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
