import React from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenuButton = ({ isOpen, onClick }) => {

  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 text-black hover:text-primary  transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

export default MobileMenuButton;