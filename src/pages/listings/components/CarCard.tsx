import { BsLuggage } from "react-icons/bs";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { carProps } from "../../../types/dashboard";
import BookingForm from "../../landing_page/components/BookingForm";
import { listingProps } from "../../../types/listings";

interface CarCardProps {
  item: carProps | null;
  setSelected: Dispatch<SetStateAction<listingProps | null>>
  selected: listingProps | null
}

const CarCard: React.FC<CarCardProps> = ({ item, selected, setSelected }) => {
  const [car, setCar] = useState<carProps | null>(null);

  useEffect(() => {
    if (item) {
      setCar(item);
    }
  }, [item]);

  return (
    <div className="group relative rounded-lg flex flex-col bg-gradient-to-br from-[#ff7f50] via-[#ff4500] to-[#b40711] h-[400px] overflow-hidden shadow-lg transition-transform transform hover:scale-105"  onClick={()=>document.getElementById('car_modal_3').showModal()}>
      {/* Image Section */}
      <div className="w-full h-[60%] group-hover:h-full">
        <img
          src={car?.image?.[0]?.url || ""}
          alt={car?.name || "Car Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col h-full text-gray-500 ">
        <div className="bg-[#ffffffcc] bg-opacity-20 px-3 py-3 space-y-2 rounded">
          {/* Car Details */}
          <div>
            <div className="text-2xl font-bold capitalize">{car?.name}</div>
            <div className="text-sm capitalize">{car?.carBrand}</div>
          </div>

          {/* Icons and Stats */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <FaUser />
              <span>{car?.seats}</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <BsLuggage />
              <span>{car?.seats}</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
              <FaCarAlt />
              <span>{car?.carType}</span>
            </div>
          </div>

          {/* Price (Hidden on Hover) */}
          <div className="group-hover:opacity-0 transition-opacity duration-300">
            <div>Unlimited km</div>
            <div className="font-bold text-lg text-gray-500">${car?.price} / week</div>
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

      {/* { selected && (
        <BookingForm />
      )} */}
    </div>
  );
};

export default CarCard;
