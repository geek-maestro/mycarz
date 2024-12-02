import { useState } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full py-5 px-4 md:px-10">
        <div className="text-white text-2xl font-bold w-[30%]">Car Rental</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
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
          } absolute top-16 left-0 w-full md:bg-transparent md:static md:flex md:space-x-10 mx-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 text-white text-lg py-4 md:py-0">
            <li className="cursor-pointer px-4 md:px-0">Home</li>
            <li className="cursor-pointer px-4 md:px-0">Services</li>
            <li className="cursor-pointer px-4 md:px-0">Collections</li>
            <li className="cursor-pointer px-4 md:px-0">Contact</li>
          </ul>
          <div className="px-4 md:px-0">
            <input
              type="search"
              placeholder="Search"
              className="rounded-lg bg-transparent border-2 text-white px-3 py-1 md:ml-10"
            />
          </div>
        </div>

        {/* User Icon with Menu */}
        <div className="relative text-white hidden md:block">
          <FaUserCircle
            color="white"
            size={35}
            className="cursor-pointer"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          />
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer" onClick={() => navigate('/register')}>
                  Register
                </li>
                <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
