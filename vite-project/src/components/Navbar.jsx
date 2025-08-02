import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {}
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
    console.log("is open");
  };

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
    <>
      {/* DESKTOP */}
      <nav
        className={`${
          scrolled ? "bg-white shadow-md z-40" : "bg-transparent"
        } hidden lg:flex  px-20 py-4 text-black justify-between items-center transition-colors duration-300 ease-in-out fixed top-0 left-0 w-full`}
      >
        <div className="text-4xl font-bold text-orange-600 border-1 border-orange-600 rounded p-5">
          <span>HE</span>
        </div>
        <div>
          <ul className="flex space-x-4 uppercase">
            <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:mb-4 transition-all duration-300 ease-in-out">
              Home
            </li>
            <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:mb-4 transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:mb-4 transition-all duration-300 ease-in-out">
              Projects
            </li>
            <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:mb-4 transition-all duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded text-white bg-orange-600 hover:text-black hover:bg-transparent hover:border-1 border-solid border-orange-600">
            Contact me
          </button>
          <button className="px-3 py-2 rounded text-black border-1 border-orange-600 rounded hover:text-white hover:bg-orange-600">
            Download CV
          </button>
        </div>
      </nav>

      {/* MOBILE NAV BAR */}

      <nav className="lg:hidden flex flex-row justify-between px-8 py-2">
        <div className="text-4xl font-bold text-orange-600 border-1 border-orange-600 rounded p-5">
          <span>HE</span>
        </div>

        <button onClick={handleIsOpen} className="text-orange-600 text-4xl">
          {" "}
          <FontAwesomeIcon icon={faBars} />{" "}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
