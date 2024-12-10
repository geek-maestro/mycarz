import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url(bg.jpeg)] bg-cover h-[100vh]">
      <div className="w-full h-full items-center justify-center">
        <div className="bg-black bg-opacity-75 h-full">
          <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center container mx-auto">
            <div className="px-10 my-auto h-full justify-center flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold capitalize">
                Premium car rental in your area
              </h2>
              <h2 className="text-lg text-gray-400 pr-29 mt-5 capitalize">
                book the selected car effortlessly, pay for driving only, Book
                the car now
              </h2>
              <button
                className="p-2 mt-5 bg-secondary text-white capitalize px-4 rounded-full hover:scale-105 transition-all w-[250px]"
                onClick={() => navigate("/home")}
              >
                Explore more
              </button>
            </div>
            <div className="w-full h-[500px]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
