import React from "react";
import { carProps } from "../../../../types/dashboard";
import CarCard from "../../../listings/components/CarCard";
import Form from "./Form";

const BookingModal = ({selected}: carProps) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className="border-b pb-2">
            <h3 className="text-[30px] font-light test-gray-400 capitalize">Rent your dreamcar now!</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div><CarCard item ={selected} /></div>
            <div><Form car ={selected}/></div>
        </div>
    </form>
  );
};

export default BookingModal;
