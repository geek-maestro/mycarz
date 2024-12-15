// /src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = () => {
  const [showAddressField, setShowAddressField] = useState(false);

  const toggleAddressField = () => {
    setShowAddressField(!showAddressField);
  };

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center w-full p-5 z-20">
      <div className="bg-primary p-5 md:p-10 rounded-2xl w-full md:w-auto">
        <div className="flex flex-col md:flex-row items-center text-textPrimary justify-between gap-5">
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
              placeholder="Search"
              className="border border-gray-200 bg-white rounded-lg py-2 px-3 w-full md:w-[280px] text-gray-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="date"
              className="border border-gray-200 px-3 bg-white text-gray-500 py-2 rounded-tl-lg rounded-bl-lg"
            />
            <input
              type="time"
              className="border border-gray-200 px-3 bg-white text-gray-500 py-2 rounded-tr-lg rounded-br-lg"
            />
          </div>

          <div className="flex items-center">
            <input
              type="date"
              className="border border-gray-200 px-3 bg-white text-gray-500 py-2 rounded-tl-lg rounded-bl-lg"
            />
            <input
              type="time"
              className="border border-gray-200 px-3 bg-white text-gray-500 py-2 rounded-tr-lg rounded-br-lg"
            />
          </div>

          <div>
            <button
              className="text-blue-500 underline"
              onClick={toggleAddressField}
            >
              + Add delivery address
            </button>
            {showAddressField && (
              <input
                type="text"
                placeholder="Enter delivery address"
                className="mt-2 border border-gray-200 bg-white rounded-lg py-2 px-3 w-full md:w-[280px] text-gray-500"
              />
            )}
          </div>

          <div>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
