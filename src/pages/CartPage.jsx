import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';
import PrimaryButton from '../components/PrimaryButton';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.items);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity(productId, newQuantity));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
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
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>You have {totalQuantity} item(s) in your cart</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="item-carat">{item.carat} Carat</p>
                <p className="item-description">{item.description}</p>
              </div>

              <div className="cart-item-price">
                <p>${item.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>

              <div className="cart-item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button
                className="cart-item-remove"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Link to="/catalog">
            <PrimaryButton className="continue-btn">Continue Shopping</PrimaryButton>
          </Link>
          <button className="checkout-btn" onClick={() => alert('Checkout functionality coming soon!')}>
            Proceed to Checkout
          </button>
          <button className="clear-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
