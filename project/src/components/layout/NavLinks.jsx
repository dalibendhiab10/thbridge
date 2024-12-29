import React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from 'lucide-react';

const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLinks = () => {
  const navigate = useNavigate();

  const handleClick = (path, id) => {
    navigate(path);
    setTimeout(() => scrollToId(id), 20); 
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <ul className="flex space-x-8">
        <li>
          <button
            onClick={() => handleClick("/home", "home")}
            className="block text-black hover:text-primary"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("/home", "courses")}
            className="block text-black hover:text-primary"
          >
            Courses
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("/home", "contact")}
            className="block text-black hover:text-primary"
          >
            Contact
          </button>
        </li>
      </ul>
      <button
        onClick={() => handleClick("/login", "header")}
        className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition-colors w-full"
      >
        <LogIn className="h-4 w-4" />
        <span>Login</span>
      </button>{" "}
    </nav>
  );
};

export default NavLinks;
