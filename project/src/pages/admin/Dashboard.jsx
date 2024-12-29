import React from 'react';
import { BookOpen, Users, DollarSign, TrendingUp } from 'lucide-react';
import DashboardCard from '@/components/admindash/DashboardCard';

const stats = {
  totalCourses: 12,
  totalEnrollments: 156,
  monthlyIncome: 4500,
  trends: {
    enrollments: 12.5,
    income: 8.3,
    courses: -2.1,
  },
};

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={BookOpen}
          trend={{
            value: stats.trends.courses,
            isPositive: stats.trends.courses > 0,
          }}
        />
        <DashboardCard
          title="Total Enrollments"
          value={stats.totalEnrollments}
          icon={Users}
          trend={{
            value: stats.trends.enrollments,
            isPositive: stats.trends.enrollments > 0,
          }}
        />
        <DashboardCard
          title="Monthly Income"
          value={`${stats.monthlyIncome.toLocaleString()} Tnd`}
          icon={DollarSign}
          trend={{
            value: stats.trends.income,
            isPositive: stats.trends.income > 0,
          }}
        />
        <DashboardCard
          title="Avg. Course Price"
          value={`${(stats.monthlyIncome / stats.totalCourses).toFixed(2)} Tnd`}
          icon={TrendingUp}
        />
      </div>

    </div>
  );
};

export default Dashboard;
