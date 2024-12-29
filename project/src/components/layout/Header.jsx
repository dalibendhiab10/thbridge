import React, { useState } from "react";
import NavLinks from "@/components/layout/NavLinks";
import MobileNav from "@/components/layout/MobileNav";
import MobileMenuButton from "@/components/ui/MobileMenuButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="header" className="fixed top-0 left-0 right-0 bg-white shadow-md z-[1000]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold hidden md:block lg:block xl:block">
                The{" "}
              </span>
              <img
                src="/logo.png"
                alt="logo"
                className="h-10 md:mr-[-10px] lg:mr-[-10px] xl:mr-[-10px]"
              />{" "}
              <span className="text-xl font-bold hidden md:block lg:block xl:block">
                ridge{" "}
              </span>
            </div>
            <NavLinks />
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        <MobileNav isOpen={isMenuOpen} closeMenu={closeMenu} />
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[950]"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
