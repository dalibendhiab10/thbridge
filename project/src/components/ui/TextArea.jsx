import React from 'react';

const TextArea = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-black mb-2">{label}</label>
      <textarea
        id={id}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...props}
      />
    </div>
  );
};

export default TextArea;