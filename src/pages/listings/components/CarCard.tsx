import { BsLuggage } from "react-icons/bs";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { carProps } from "../../../types/dashboard";
import { listingProps } from "../../../types/listings";

interface CarCardProps {
  item: carProps | null;
  setSelected: Dispatch<SetStateAction<listingProps | null>>;
  selected: listingProps | null;
}

const CarCard: React.FC<CarCardProps> = ({ item, selected, setSelected }) => {
  const [car, setCar] = useState<carProps | null>(null);

  useEffect(() => {
    if (item) {
      setCar(item);
    }
  }, [item]);

  return (
    <div
      className="group relative rounded-lg flex flex-col bg-gradient-to-br from-[#ff7f50] via-[#ff4500] to-[#b40711] h-[400px] overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      onClick={() => document.getElementById("car_modal_3")?.showModal()}
    >
      {/* Image Section */}
      <div className="w-full h-[60%] group-hover:h-[60%] mt-10">
        <img
          src={car?.image?.[0]?.url || ""}
          alt={car?.name || "Car Image"}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info Section */}
      <div className="bg-opacity-20 px-3 py-3 space-y-2 rounded flex-1">
        {/* Car Details */}
        <div className="absolute top-2 text-[#f1f1f1]">
          <div>
            <div className="text-xl font-semibold capitalize">{car?.name}</div>
            <div className="text-sm capitalize">{car?.carBrand}</div>
          </div>

          {/* Icons and Stats */}
          <div className="flex flex-wrap items-center gap-3 text-white mt-5">
            <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <FaUser />
              <span className="text-xs">{car?.seats}</span>
            </div>
            <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <BsLuggage />
              <span className="text-xs">{car?.seats}</span>
            </div>
            <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <FaCarAlt />
              <span className="text-xs">{car?.carType}</span>
            </div>
          </div>
        </div>

        {/* Price (Hidden on Hover) */}
        <div className="group-hover:opacity-0 transition-opacity duration-300 absolute text-[#f1f1f1] bottom-2">
          {/* <div>Unlimited km</div> */}
          <div className="font-bold text-lg">${car?.price} / week</div>
        </div>

        {/* Additional Info (Two rows) */}
        <div className="text-xs text-white mt-4">
          <div className="font-semibold mb-2">T/C Apply</div>
          <div className="flex w-full justify-between">
          <div className="w-[45%]">All Inclusive!</div>
          <div className="w-[45%]">Unlimited Mileage</div>
          </div>
        </div>

        <div className="text-xs text-white">
        <div className="flex w-full justify-between">
          <div className="w-[45%]">No deposit</div>
          <div className="w-[45%]">No insurance</div>
          </div>
        </div>
      </div>

      {/* Book Now Button (Shown on Hover) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white px-5 transition-opacity duration-300">
        <button className="text-lg font-bold py-2 px-4 bg-black/50 rounded-lg w-full flex items-center justify-evenly">
          <div>Book Now</div>
          <MdOutlineCarRental size={25} />
        </button>
      </div>
    </div>
  );
};

export default CarCard;
