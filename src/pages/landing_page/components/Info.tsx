import { AiOutlineGlobal } from "react-icons/ai";
import { FaCarRear } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="bg-gray-500 p-5 text-textPrimary w-full h-full my-10">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between container self-center mx-auto">
        <div className="flex flex-col md:w-[30%] lg:w-[30%]">
          <div className="flex gap-5 items-center">
            <div>
              <AiOutlineGlobal size={50} />
            </div>
            <div className="text-sm font-semibold capitalize">global reach</div>
          </div>
          <div className="text-xl font-semibold">
            2,000+ stations in over 105 countries
          </div>
        </div>
        <div className="flex flex-col md:w-[30%] lg:w-[30%]">
          <div className="flex gap-5 items-center">
            <div>
              <FaCarRear size={50} />
            </div>
            <div className="text-xl font-semibold capitalize">
              Distinctive fleet
            </div>
          </div>
          <div className="text-xl font-semibold capitalize">
            From high-end convertibles to premium SUVs
          </div>
        </div>
        <div className="flex flex-col md:w-[30%] lg:w-[30%]">
          <div className="flex gap-5 items-center">
            <div>
              <MdVolunteerActivism size={50} />
            </div>
            <div className="text-xl font-semibold">Exceptional service</div>
          </div>
          <div className="text-xl font-semibold">
            Stress-free, trustworthy, no hidden costs
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tr from-secondary via-accent to-primary relative w-full h-[300px] md:h-[700px] lg:h-[700px] rounded-2xl z-10 md:container lg:container mx-auto"  data-aos ="fade-up" data-aos-duration ="1000">
        <div className="bg-[url('/car1.png')] lg:bg-contain bg-contain md:bg-contain bg-no-repeat mt-5 h-full w-full" />
        <div className="absolute bottom-5 left-5">
          <fieldset className="border-2 border-gray-200 rounded-lg shadow-lg w-[150px] items-center justify-center flex">
            <legend className="text-base font-medium bg-gray-400 px-3 py-1 rounded-md text-gray-700 text-center">
              Save Up to
            </legend>
            <div className="p-4 text-3xl font-bold text-gray-40">20%</div>
          </fieldset>
        </div>
          </div>

        <div className="my-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {Array.from({ length: 8 }).fill(
              <div  data-aos ="fade-up" data-aos-duration ="1000">
              <InfoCard />
              </div>
            )}
          </div>
      </div>
      
    </div>
  );
};

export default Info;
