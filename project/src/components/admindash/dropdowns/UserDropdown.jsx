import React from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const UserDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log('Logout');
    logout();
    navigate('/AdminLogin');
  
  };

  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      onMouseLeave={onClose}
    >
      <div className="p-3 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900">Admin User</p>
        <p className="text-xs text-gray-500">admin@example.com</p>
      </div>
      <div className="p-2">
        <button
          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => console.log('Settings')}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </button>
        <button
          className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
