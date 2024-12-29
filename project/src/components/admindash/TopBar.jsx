import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import NotificationDropdown from './dropdowns/NotificationDropdown';
import UserDropdown from './dropdowns/UserDropdown';

const TopBar = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <NotificationDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <span className="hidden md:inline text-sm font-medium">Admin User</span>
            </button>
            <UserDropdown
              isOpen={showUserMenu}
              onClose={() => setShowUserMenu(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
