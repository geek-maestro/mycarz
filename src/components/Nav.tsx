import { RiEdit2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import InputComponent from "./InputComponent";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#DF0609] text-white sticky top-0">
      <nav className="flex flex-wrap items-center justify-between py-5 px-5 lg:px-10">
        {/* Logo */}
        <div className="font-bold text-[30px] lg:text-[50px]">mycarz</div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden lg:block lg:w-[50%]">
          <InputComponent
            placeholder="Search"
            type="search"
            rightIcon={<RiEdit2Fill size={30} />}
            
          />
        </div>

        {/* Right Section: Notifications and Profile */}
        <div className="flex items-center space-x-5 lg:space-x-10">
          {/* Notifications Icon */}
          <IoMdNotifications size={25} className="cursor-pointer" />

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src="/bg.jpeg"
              alt="profile"
              className="object-cover rounded-full h-12 w-12 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48">
                <button
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  onClick={() => alert("Profile Update Clicked")}
                >
                  Update Profile
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  onClick={() => alert("Logout Clicked")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div className="block lg:hidden px-5 py-2">
        <InputComponent
          placeholder="Search"
          type="search"
          rightIcon={<RiEdit2Fill size={25} />}
        />
      </div>
    </header>
  );
};

export default Nav;
