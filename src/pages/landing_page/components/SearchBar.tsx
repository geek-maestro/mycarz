import React from "react";

const SearchBar = () => {
  return (
    <div className="items-center  justify-center mx-auto w-full md:absolute lg:absolute flex z-20">
      <div className="bg-primary p-10 rounded-2xl">
        <div className="flex flex-col mg:flex-row lg:flex-row items-center text-textPrimary w-full justify-between gap-5">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-[50px] w-[50px] object-cover"
            />
          </div>
          <div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="border-b border-b-gray-200 bg-white rounded-lg py-2 px-3 w-[280px] text-gray-500"
            />
          </div>
          <div>+ Different return location</div>

          <div className="flex items-center">
            <input
              type="date"
              name=""
              id=""
              className="border-r-2 px-3 bg-white text-gray-500 py-2 rounded-tl-xl rounded-bl-xl"
            />
            {/* <div className="divider divider-horizontal divider-start" /> */}
            <input
              type="time"
              name=""
              id=""
              className="px-3 bg-white text-gray-500 py-2 rounded-tr-xl rounded-br-xl"
            />
          </div>
          <div className="flex items-center">
            <input
              type="date"
              name=""
              id=""
              className="border-r-2 px-3 bg-white text-gray-500 py-2 rounded-tl-xl rounded-bl-xl"
            />
            <input
              type="time"
              name=""
              id=""
              className="px-3 bg-white text-gray-500 py-2 rounded-tr-xl rounded-br-xl"
            />
          </div>

          <div>
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
