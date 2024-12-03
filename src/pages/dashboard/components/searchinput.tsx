import { FaLocationDot } from "react-icons/fa6";

const Searchinput = () => {
  return (
    <div className="w-full justify-center">
      <h2 className="capitalize text-center text-[20px] text-gray-400">
        Let get you the perfect ride
      </h2>
      <div className="flex justify-center items-center my-3">
        <div className="flex bg-gray-100 py-1 px-3 gap-2 divide-x rounded-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
          <div className="flex items-center">
            <FaLocationDot color="gray" size={20} />
            <input
              type="text"
              name=""
              id=""
              className="p-2 outline-none bg-transparent text-gray-500 w-[65%]"
              placeholder="location"
            />
          </div>
          <div className="flex items-center text-gray-500">
            <input
              type="date"
              name=""
              id=""
              className="p-2 outline-none bg-transparent text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchinput;
