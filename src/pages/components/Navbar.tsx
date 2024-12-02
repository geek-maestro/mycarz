import { useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center w-full py-5 px-4 md:px-10">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Car Rental</div>

        {/* Mobile Menu and Avatar */}
        <div className="flex items-center md:hidden text-white space-x-4">
          {/* User Avatar for Mobile */}
          <FaUserCircle
            size={30}
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="cursor-pointer"
          />
          {/* Hamburger Menu */}
          <FaBars
            size={25}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full md:relative md:top-0 md:flex md:items-center md:justify-between bg-gray-700 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg py-4 md:py-0">
            <li className="cursor-pointer px-4 md:px-0" onClick={() => setMenuOpen(false)}>Home</li>
            <li className="cursor-pointer px-4 md:px-0" onClick={() => setMenuOpen(false)}>Services</li>
            <li className="cursor-pointer px-4 md:px-0" onClick={() => setMenuOpen(false)}>Collections</li>
            <li className="cursor-pointer px-4 md:px-0" onClick={() => setMenuOpen(false)}>Contact</li>
          </ul>
          <div className="px-4 md:px-0 md:ml-10">
            <input
              type="search"
              placeholder="Search"
              className="rounded-lg bg-transparent border-2 text-white px-3 py-1"
            />
          </div>
        </div>

        {/* User Avatar for Desktop */}
        <div className="relative hidden md:block text-white">
          <FaUserCircle
            size={35}
            className="cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          />
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setUserMenuOpen(false);
                    navigate("/register");
                  }}
                >
                  Register
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Login
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile User Menu */}
      {userMenuOpen && !menuOpen && (
        <div className="absolute right-4 top-16 w-40 bg-gray-700 rounded-lg shadow-lg md:hidden">
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => {
                setUserMenuOpen(false);
                navigate("/register");
              }}
            >
              Register
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => setUserMenuOpen(false)}
            >
              Login
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
