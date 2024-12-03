import React, { useState } from "react";
import { CarListResult, carProps } from "../../../types/dashboard";
import CarCard from "../../listings/components/CarCard";
import BookingModal from "./CarBooking/BookingModal";
import { useAuth } from "@clerk/clerk-react";

const CarsList = ({ cars }: CarListResult) => {
  const [selectedCar, setSelectedCar] = useState<carProps | null>(null);
  const { isSignedIn } = useAuth();

  const handleCarClick = (car: carProps) => {
    if (!isSignedIn) {
      alert("Please sign in to book a car.");
      return;
    }

    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    modal?.showModal();
    setSelectedCar(car);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start w-full p-4">
        {cars?.map((car) => (
          <div
            key={car?.id}
            onClick={() => handleCarClick(car)}
            className="cursor-pointer"
          >
            <CarCard item={car} />
          </div>
        ))}
      </div>
      <dialog id="my_modal_4" className="modal">
        <BookingModal selected={selectedCar} />
      </dialog>
    </div>
  );
};

export default CarsList;
