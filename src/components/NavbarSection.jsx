import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoLogIn, IoHelpCircle } from "react-icons/io5"; // Import icons

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events and update state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black bg-opacity-60" : "bg-transparent"
      } p-4 fixed w-full z-10 top-0 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="src/assets/favicon.png" alt="Logo" className="h-12" />
          <span className="text-white font-bold text-xl">
            MYTHRI <span>MEDICALS</span>
          </span>
        </div>

        {/* Search Bar with Icon */}
        <div className="relative w-96 ml-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full border-none focus:outline-none"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Right-side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Login Button with Icon */}
          <button className="px-4 py-2 bg-transparent border-2 border-[#1BA59E] text-[#1BA59E] rounded-full hover:bg-[#1BA59E] hover:text-white focus:border-[#1BA59E] focus:ring-2 focus:ring-[#1BA59E] transition-colors flex items-center space-x-2">
            <IoLogIn className="w-5 h-5" /> {/* Login icon */}
            <span>Login/
Register
</span>
          </button>

          {/* Help Button with Icon */}
          <button className="px-4 py-2 bg-transparent border-2 border-[#F39425] text-[#F39425] rounded-full hover:bg-[#F39425] hover:text-white focus:border-[#F39425] focus:ring-2 focus:ring-[#F39425] transition-colors flex items-center space-x-2">
            <IoHelpCircle className="w-5 h-5" /> {/* Help icon */}
            <span>Help</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
