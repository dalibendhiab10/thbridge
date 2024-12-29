import React, { useState, useEffect } from 'react';
import { LayoutDashboard, BookOpen, MessageSquare, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsMobile(false);
        setIsSidebarOpen(true);
      } else {
        setIsMobile(true);
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-0 -ml-64'
        } ${isMobile ? 'h-full' : 'h-auto'} lg:ml-0 fixed lg:relative bg-primary text-white border-r border-primary/20 transition-all duration-300 z-50`}
      >
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6">
          <Link
            to="/adminDash"
            className={`flex items-center px-6 py-3 hover:bg-primary/80 ${isActive('/admin') ? 'bg-primary/80' : ''}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/adminCourses"
            className={`flex items-center px-6 py-3 hover:bg-primary/80 ${isActive('/admin/courses') ? 'bg-primary/80' : ''}`}
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Courses
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
