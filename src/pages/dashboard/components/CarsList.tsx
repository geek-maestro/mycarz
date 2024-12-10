import { Dispatch, SetStateAction, useRef, useState } from "react";
import { carProps } from "../../../types/dashboard";
import CarCard from "../../listings/components/CarCard";
import BookingModal from "./CarBooking/BookingModal";
import BookingForm from "../../landing_page/components/BookingForm";
import { listingProps } from "../../../types/listings";
// import { useAuth } from "@clerk/clerk-react";

interface CarsListProps {
  cars: carProps[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelected: Dispatch<SetStateAction<listingProps | null>>
  selected: listingProps | null
}

const CarsList: React.FC<CarsListProps> = ({ cars, setOpen, open, setSelected, selected }) => {
  const modalRef = useRef(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start w-full p-4">
        {cars?.map((car) => (
          <div
            key={car?.id}
            onClick={() => {
              // handleCarClick(car)
              setSelected(car);
              setOpen(true)
            }}
            className="cursor-pointer"
          >
            <CarCard item={car} setSelected ={setSelected} selected ={selected}/>
          </div>
        ))}
      </div>

      <dialog ref={modalRef} id="car_modal_3" className="modal bg-transparent w-full">
        <BookingForm car ={selected} open ={open} setOpen={setOpen}/>
      </dialog>

      {/* {open && ( */}
        {/* <BookingForm open ={open} setOpen ={setOpen}/> */}
      {/* )} */}
    </div>
  );
};

export default CarsList;
