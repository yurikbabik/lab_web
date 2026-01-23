import React from 'react';
import '../styles/PrimaryButton.css';

const PrimaryButton = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button 
      className={`primary-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
