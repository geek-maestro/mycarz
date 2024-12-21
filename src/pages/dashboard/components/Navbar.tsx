const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-primary z-30 overflow-hidden pb-5">
      <nav className="max-w-full relative">
        <div className="navbar bg-primary">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" href="/">
              <img src="/_logo.png" alt="Logo" className="h-10 w-10" />
            </a>
            <div className="text-yellow-500 font-bold text-lg">MyCarzRentalUSA</div>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto bg-[#f1f1f1]"
              />
            </div>
            <div className="dropdown dropdown-end relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg absolute right-0"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="w-[90%] mx-auto flex md:hidden items-center justify-center sticky top-2">
          <input
            type="search"
            className="w-full bg-white text-slate-600 px-3 py-2 rounded-lg shadow-md"
            placeholder="Search..."
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
