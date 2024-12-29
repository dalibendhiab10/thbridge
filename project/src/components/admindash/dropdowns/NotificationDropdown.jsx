import React from 'react';
import { Bell } from 'lucide-react';

const NotificationDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      message: "New enrollment in React Fundamentals",
      time: "5 minutes ago",
    },
    {
      id: 2,
      message: "New enrollment in Advanced TypeScript",
      time: "1 hour ago",
    },
  ];

  return (
    <div
      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      onMouseLeave={onClose}
    >
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border-b border-gray-100 hover:bg-gray-50"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm text-gray-900">{notification.message}</p>
                <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 text-center border-t border-gray-200">
        <button className="text-sm text-primary hover:text-primary/80">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
