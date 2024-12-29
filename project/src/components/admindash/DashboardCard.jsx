import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {trend && (
          <span
            className={`text-sm font-medium ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
