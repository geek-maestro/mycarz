// import {  useAuth, UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router"; // Updated import

const PubNav = () => {
  const navItems = ["home", "history", "contact-us"];
  // const { isSignedIn } = useAuth()
  // const navigate=  useNavigate()
  return (
    <header className="flex items-center p-5 shadow-md sticky top-0 h-full w-full bg-gradient-to-r from-[#ff4500] to-[#b40711] text-white z-10">
      <nav className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-full py-5 px-4 md:px-10">
          {/* Logo */}
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-[50px] w-[50px] object-cover"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 capitalize">
            {navItems.map((item, index) => (
              <NavLink
                to={`/${item}`}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                    : "hover:text-yellow-400"
                }
              >
                {item.replace("-", " ")}
              </NavLink>
            ))}
          </div>

          {/* User Avatar */}
          {/* <div className="flex items-center">
            {isSignedIn ? (
            <UserButton showName />
          ): (
            <div className="flex space-x-4">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
                >
                  Sign Up
                </button>
              </div>
          )}
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default PubNav;
