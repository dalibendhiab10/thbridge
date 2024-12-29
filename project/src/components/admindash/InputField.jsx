import React from 'react';

const InputField = ({ label, icon: Icon, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          {...props}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                     placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default InputField;
