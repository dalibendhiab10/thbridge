import React from 'react';

const Button = ({ children,onClick, className = '', ...props }) => {
  return (
    <button
      className={`bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary  hover:text-black transition-colors ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;