import React, { use } from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-md z-40" : ""
      } flex justify-between items-center p-4 transition-all duration-300 position-fixed top-0 left-0 w-full`}
    >
      <div className="text-3xl font-bold border-1 border-black rounded p-2">
        <span>HE</span>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button>Contact me</button>
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
