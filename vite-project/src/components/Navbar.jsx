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
          scrolled ? "bg-[#111827] shadow-md z-40" : "bg-transparent"
        } hidden lg:flex  px-20 py-4 text-black justify-between items-center transition-colors duration-300 ease-in-out fixed top-0 left-0 w-full`}
      >
        <div className="text-4xl font-bold text-[#fff] border-1 border rounded p-3">
          <span>HE</span>
        </div>
        <div>
          <ul className="flex space-x-6 uppercase text-white">
            <li className="hover:text-[#10b981] hover:border-b-2 border-[#10b981] hover:pb-4 transition-all duration-300 ease-in-out">
              Home
            </li>
            <li className="hover:text-[#10b981] hover:border-b-2 border-[#10b981] hover:pb-4 transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="hover:text-[#10b981] hover:border-b-2 border-[#10b981] hover:pb-4 transition-all duration-300 ease-in-out">
              Projects
            </li>
            <li className="hover:text-[#10b981] hover:border-b-2 border-[#10b981] hover:pb-4 transition-all duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded text-white bg-[#10b981] hover:text-[#fff] hover:bg-transparent hover:border-1 border-solid border-[#10b981]">
            Contact me
          </button>
          <button className="px-3 py-2 rounded text-white border-1 border-[#10b981] rounded hover:text-white hover:bg-[#10b981]">
            Download CV
          </button>
        </div>
      </nav>

      {/* MOBILE NAV BAR */}

      <nav className="relative z-40 lg:hidden flex flex-row justify-between px-8 py-4 bg-[#111827] top-0 right-0 ">
        <div className="text-4xl font-bold text-white border-1 rounded p-2">
          <span>HE</span>
        </div>

        <button onClick={handleIsOpen} className="text-[#2563eb] text-4xl">
          {" "}
          <FontAwesomeIcon icon={faBars} />{" "}
        </button>

        {isOpen && (
          <div className="absolute z-40 flex-col items-center justify-center space-y-6 top-20 left-0 bg-[#111827] px-4 py-8 w-full transition-all duration-300 ease-in-out">
            <ul className="flex-col space-y-6 uppercase text-white text-center items-center ">
              <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:pb-4 transition-all duration-300 ease-in-out">
                Home
              </li>
              <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:pb-4 transition-all duration-300 ease-in-out">
                About
              </li>
              <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:pb-4 transition-all duration-300 ease-in-out">
                Projects
              </li>
              <li className="hover:text-orange-600 hover:border-b-2 border-orange-600 hover:pb-4 transition-all duration-300 ease-in-out">
                Contact
              </li>
            </ul>

            <div className="flex flex-col space-y-4 px-4 py- ">
              <button className="px-3 py-2 rounded text-white bg-[#2563eb] hover:text-orange-600 hover:bg-transparent hover:border-1 border-solid border-orange-600">
                Contact me
              </button>
              <button className="px-3 py-2 rounded text-[#2563eb] border-1 border-[#2563eb] rounded hover:text-white hover:bg-[#2563eb]">
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
