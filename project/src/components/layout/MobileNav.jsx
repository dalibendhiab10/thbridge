import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const MobileNav = ({ isOpen, closeMenu }) => {
  const navigate = useNavigate();

  const handleClick = (path, id) => {
    navigate(path);
    setTimeout(() => {
      scrollToId(id);
      closeMenu(); 
    }, 0);
  };

  const handleLogin = () => {
    navigate('/login');
    closeMenu();
  };

  return (
    <div
      className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
        isOpen ? 'opacity-100 z-[975]' : 'opacity-0 pointer-events-none z-[975]'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleClick('/home', 'home')}
              className="block text-black hover:text-primary w-full text-left"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('/home', 'courses')}
              className="block text-black hover:text-primary w-full text-left"
            >
              Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('/home', 'contact')}
              className="block text-black hover:text-primary w-full text-left"
            >
              Contact
            </button>
          </li>
          <li className="pt-4">
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition-colors w-full"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
