// File Path: components/Form.tsx

import React, { useContext, useEffect, useState } from "react";
import { createBooking, getLocations } from "../../../../services";
import { carProps } from "../../../../types/dashboard";
import { useUser } from "@clerk/clerk-react";
import { BookingContext } from "../../../../context/BookingContexts";
import emailjs from '@emailjs/browser'
import { emailDataProps, locationResProps } from "../../../../types/forms";

export interface FormDetails {
  location: string;
  name: string;
  email: string;
  pickupdate: string;
  pickuptime: string;
  dropoffdate: string;
  dropofftime: string;
  contact: string;
  carId: string;
}

interface FormProps {
    car: carProps;
  }

const Form = ({ car }: FormProps) => {
    const [loc, setLoc] = useState<locationResProps["storedLocations"]>([]);
  const { user } = useUser();
  const bookingContext = useContext(BookingContext);

  if (!bookingContext) {
    throw new Error("BookingContext must be used within a BookingProvider");
  }

  const { setShowToast } = bookingContext;

  const [formDetails, setFormDetails] = useState<FormDetails>({
    location: "",
    name: "",
    email: "",
    pickupdate: "",
    pickuptime: "",
    dropoffdate: "",
    dropofftime: "",
    contact: "",
    carId: "",
  });

  const getLocation = async () => {
    try {
      const res = await getLocations();
      setLoc(res?.storedLocations || []);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  useEffect(() => {
    if (car) {
      setFormDetails((prev) => ({
        ...prev,
        carId: car.id,
      }));
    }
  }, [car]);

  useEffect(() => {
    if (user) {
      setFormDetails((prev) => ({
        ...prev,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = async () => {
  try {
    console.log(formDetails, "Form details to be submitted");
    const res = await createBooking(formDetails);

    if (res) {
      console.log("Booking created successfully:", res);

      // Set booking ID and show toast
    //   setBookingId(res?.createBooking?.id);
      setShowToast(true);

      // Send confirmation email
      handleSendEmail({
        username: user?.fullName,
        carBrand: car?.name,
        dropoffdate: formDetails?.dropoffdate,
        dropofftime: formDetails?.dropofftime,
        pickupdate: formDetails?.pickupdate,
        pickuptime: formDetails?.pickuptime,
        location: formDetails?.location,
        useremail: user?.primaryEmailAddress?.emailAddress,
        bookingid: res?.createBooking?.id, // Use the booking ID returned from the response
      });
    }
  } catch (error) {
    console.error("Error creating booking:", error);
  }
};

const handleSendEmail = (emailData: emailDataProps) => {
  emailjs
    .send(
      "service_c4qmp7z", // Replace with your EmailJS service ID
      "template_yxekg2i", // Replace with your EmailJS template ID
      emailData,          // Data to send
      "ST3K66GSTJEhXRgDT" // Replace with your public key
    )
    .then(
      () => {
        console.log("Email sent successfully");
      },
      (error) => {
        console.error("Failed to send email:", error.text);
      }
    );
};


  return (
    <div className="space-y-5">
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="location" className="text-gray-400">
          PickUp Location
        </label>
        <select
          className="select select-bordered w-full max-w-lg capitalize"
          name="location"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>
            PickUp Location
          </option>
          {loc.map((location) => (
            <option key={location.id} value={location.address}>
              {location.address}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label htmlFor="pickupdate" className="text-gray-400">
            Pickup Date
          </label>
          <input
            type="date"
            name="pickupdate"
            className="input input-bordered w-full max-w-lg"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropoffdate" className="text-gray-400">
            Dropoff Date
          </label>
          <input
            type="date"
            name="dropoffdate"
            className="input input-bordered w-full max-w-lg"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-5 mb-5">
        <div className="flex flex-col  w-full">
          <label htmlFor="pickuptime" className="text-gray-400">
            Pickup Time
          </label>
          <input
            type="time"
            name="pickuptime"
            className="input input-bordered w-full max-w-lg"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dropofftime" className="text-gray-400">
            Dropoff Time
          </label>
          <input
            type="time"
            name="dropofftime"
            className="input input-bordered w-full max-w-lg"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="contact" className="text-gray-400">
          Contact
        </label>
        <input
          type="tel"
          name="contact"
          className="input input-bordered w-full max-w-lg"
          onChange={handleChange}
        />
      </div>

      <div className="modal-action">
        <button
          className="btn capitalize bg-primary text-white hover:bg-secondary px-5"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button className="btn px-5">Close</button>
      </div>
    </div>
  );
};

export default Form;
