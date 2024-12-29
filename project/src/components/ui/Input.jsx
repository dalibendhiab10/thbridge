import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-black mb-2">{label}</label>
      <input
        id={id}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...props}
      />
    </div>
  );
};

export default Input;