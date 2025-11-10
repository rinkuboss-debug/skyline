import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Button from "./Button";
import { navItems } from "../constant/data";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const ScrollTrigger = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior : "smooth" });
    }

  }

  return (
    <header className="header bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src="/images/Logo.png"
            alt="Skyline Logo"
            width={115}
            height={59}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => ScrollTrigger(item.href.replace("#", ""))}
                className="hover:text-gray-700 transition bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
          <Button label="Get Started" className="secondary-btn" />
        </ul>


        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl text-gray-700" onClick={handleClick}>
          <RiMenuFill />
        </button>

        {/* Mobile Navigation Menu (hidden by default) */}
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <button className="ml-auto mb-10" onClick={handleClick}>
            <RiCloseFill />
          </button>

          <ul className="flex flex-col flex-1 justify-center items-center gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => ScrollTrigger(item.href.replace("#", ""))}
                  className="hover:text-sky-600 transition-colors text-lg font-medium bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <Button label="Get Started" className="secondary-btn" />
          </ul>
        </nav>

        {/* overlay */}
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={handleClick}>

        </div>
      </div>
    </header>
  );
};

export default Header;
