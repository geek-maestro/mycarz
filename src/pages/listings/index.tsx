import { useState } from "react";
import { useNavigate } from "react-router";
import CarCard from "./components/CarCard";
import InputComponent from "../../components/InputComponent";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import {
  formValueProps,
  listingProps,
  SelectedFilters,
} from "../../types/listings";
// import moment from "moment";

const Listings = () => {
  const navigate = useNavigate();
  const carDetails = {
    pickupdate: new Date(),
    returnDate: new Date(),
    pickuptime: new Date(),
    returntime: new Date(),
    resetForm: () => {},
  };

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [selectedCar, setSelectedCar] = useState<listingProps | null>(null);
  const carData = [
    {
      id: 1,
      image: "/car1.png",
      price: 20000,
      type: "Honda",
      gearshift: "Automatic",
      passengers: 4,
      rentalType: "Daily",
      description:
        "A reliable Honda sedan with great mileage and modern features.",
      images: ["/car1.png", "/car1.png", "/car1.png", "/car1.png"],
    },
    {
      id: 2,
      image: "/car1.png",
      price: 15000,
      type: "Toyota",
      gearshift: "Manual",
      passengers: 2,
      rentalType: "Weekly",
      description:
        "A compact Toyota coupe, perfect for city driving and efficiency.",
      images: ["/car1.png", "/car1.png", "/car1.png", "/car1.png"],
    },
    {
      id: 3,
      image: "/car1.png",
      price: 30000,
      type: "Nissan",
      gearshift: "Automatic",
      passengers: 6,
      rentalType: "Monthly",
      description:
        "A spacious Nissan SUV, ideal for family trips and off-road adventures.",
      images: ["/car1.png", "/car1.png", "/car1.png", "/car1.png"],
    },
    {
      id: 4,
      image: "/car1.png",
      price: 18000,
      type: "Hyundai",
      gearshift: "Manual",
      passengers: 4,
      rentalType: "Hourly",
      description:
        "A stylish Hyundai hatchback with excellent fuel economy and comfort.",
      images: ["/car1.png", "/car1.png", "/car1.png", "/car1.png"],
    },
  ];

  const filters = [
    {
      name: "price",
      id: 1,
      key: "price",
      options: ["low to high", "high to low"],
    },
    {
      name: "vehicle type",
      id: 2,
      key: "type",
      options: ["Honda", "Hyundai", "Toyota", "Nissan"],
    },
    {
      name: "gearshift",
      id: 3,
      key: "gearshift",
      options: ["Automatic", "Manual"],
    },
    {
      name: "passengers",
      id: 4,
      key: "passengers",
      options: ["4", "2", "6"],
    },
    {
      name: "rental type",
      id: 5,
      key: "rentalType",
      options: ["Daily", "Weekly", "Monthly", "Hourly"],
    },
  ];

  const validationSchema = Yup.object().shape({
    pickupdate: Yup.string().required("Pick-up date is required."),
    returnDate: Yup.string().required("Return date is required."),
    pickuptime: Yup.string().required("Pick-up time is required."),
    returntime: Yup.string().required("Return time is required."),
  });

  const calculateTotal = (values: FormikValues) => {
    const { pickupdate, returnDate, pickuptime, returntime } = values;

    if (!pickupdate || !returnDate || !pickuptime || !returntime) {
      return "Please complete all fields.";
    }

    const totalHours =
      (new Date(`${returnDate}T${returntime}`).getTime() -
        new Date(`${pickupdate}T${pickuptime}`).getTime()) /
      (1000 * 60 * 60);

    const pricePerHour = selectedCar ? selectedCar.price / 24 : 0;

    if (totalHours < 0) {
      return "Invalid time range.";
    }

    return `$${(totalHours * pricePerHour).toFixed(2)}`;
  };

  const handleFilterChange = (
    filterKey: keyof SelectedFilters,
    option: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: option,
    }));
  };

  const filteredCars = carData.filter((car) => {
    return Object.entries(selectedFilters).every(([key, value]) => {
      if (!value) return true;
      if (key === "price") return true;
      return (
        String(car[key as keyof listingProps]).toLowerCase() ===
        value.toLowerCase()
      );
    });
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (selectedFilters.price === "low to high") return a.price - b.price;
    if (selectedFilters.price === "high to low") return b.price - a.price;
    return 0;
  });

  // const navigateToBooking = (car: any) => {
  //   navigate("/booking", { state: { item: car } });
  // };

  const rent = async (
    values: formValueProps,
    { resetForm }: FormikHelpers<formValueProps>
  ) => {
    if (
      !values.pickupdate ||
      !values.returnDate ||
      !values.pickuptime ||
      !values.returntime
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (
      new Date(`${values.returnDate}T${values.returntime}`) <=
      new Date(`${values.pickupdate}T${values.pickuptime}`)
    ) {
      alert("Return date/time must be after pick-up date/time.");
      return;
    }

    navigate("/home/booking", {
      state: {
        item: selectedCar ? { ...selectedCar } : null, // Ensure serializability
        values: {
          pickupdate: values.pickupdate.toISOString(),
          returnDate: values.returnDate.toISOString(),
          pickuptime: values.pickuptime.toISOString(),
          returntime: values.returntime.toISOString(),
        },
      },
    });
    resetForm();
  };

  return (
    <div>
      {/* <Nav /> */}

      <div className="flex px-10">
        <div
          className={`flex-1 ${
            selectedCar ? "lg:mr-[33%]" : ""
          } lg:pr-5 overflow-y-auto`}
        >
          <div className="py-5 border-b border-b-[#DF0609] font-semibold">
            WHICH CAR DO YOU WANT TO DRIVE?
          </div>

          <div className="flex flex-wrap gap-4 my-5 text-[#010101] text-base">
            {filters.map((filter) => (
              <div key={filter.id} className="flex flex-col">
                <label className="font-semibold mb-2 capitalize">
                  {filter.name}
                </label>
                <select
                  className={`rounded-2xl px-5 py-2 ${
                    selectedFilters[filter.key as keyof SelectedFilters]
                      ? "bg-[#DF0609] text-[#f1f1f1]"
                      : "bg-[#F5F5F5]"
                  }`}
                  onChange={(e) =>
                    handleFilterChange(
                      filter.key as keyof SelectedFilters,
                      e.target.value
                    )
                  }
                  value={selectedFilters[filter.key as keyof SelectedFilters] || ""}
                >
                  <option value="">All</option>
                  {filter.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div
            className={`my-10 grid ${
              selectedCar
                ? "grid-cols-2"
                : "grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
            } gap-5 items-center mx-auto`}
          >
            {sortedCars.map((car) => (
              <CarCard key={car.id} item={car} selected={setSelectedCar} />
            ))}
          </div>
        </div>

        {selectedCar && (
          <div className="lg:w-1/3 bg-white p-5 rounded-lg shadow-lg fixed top-0 right-0 h-full lg:block overflow-y-scroll">
            <div
              onClick={() => setSelectedCar(null)}
              className="cursor-pointer text-gray-500 font-semibold"
            >
              Close
            </div>
            <div className="text-lg font-bold mb-3">{selectedCar.type}</div>
            <img
              src={selectedCar.image}
              alt={selectedCar.type}
              className="w-full h-48 object-cover mb-4"
            />
            <CarouselProvider
              naturalSlideWidth={150}
              naturalSlideHeight={100}
              totalSlides={selectedCar.images.length}
              visibleSlides={3}
              isIntrinsicHeight
            >
              <Slider>
                {selectedCar.images.map((img, index) => (
                  <Slide key={index} index={index}>
                    <div className="flex justify-center items-center space-x-5">
                      <img
                        src={img}
                        alt={`Car Image ${index + 1}`}
                        className="w-[150px] h-[100px] object-contain border rounded-lg"
                      />
                    </div>
                  </Slide>
                ))}
              </Slider>
              <div className="flex justify-between mt-3">
                <ButtonBack className="px-3 py-2 bg-gray-200 rounded">
                  Back
                </ButtonBack>
                <ButtonNext className="px-3 py-2 bg-gray-200 rounded">
                  Next
                </ButtonNext>
              </div>
            </CarouselProvider>

            <p className="text-gray-600">{selectedCar.description}</p>

            <div className="my-5">
              <div className="capitalize text-xl font font-semibold py-3">
                Car details
              </div>
              <div className="flex flex-col border rounded-lg p-5">
                <div>
                  <div>Car Brand</div>
                  <div>rating</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Year</div>
                  <div>2020</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Type</div>
                  <div>Honda</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Color</div>
                  <div>Red</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Rental Type</div>
                  <div>Per Hour</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Car Insurance</div>
                  <div>2020</div>
                </div>
              </div>
            </div>

            <Formik
              initialValues={carDetails}
              validationSchema={validationSchema}
              onSubmit={rent}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  <div className="my-5">
                    <div className="capitalize text-xl font font-semibold py-3">
                      Rental Details
                    </div>
                    <div className="flex flex-col border rounded-lg p-5">
                      {/* Date Inputs */}
                      <div className="flex justify-between items-center border-b py-1">
                        <div>
                          <InputComponent
                            label="Pick-Up Date"
                            type="date"
                            placeholder=""
                            // value={moment(values.pickupdate).format("ddd, Do MMM, yyyy")}
                            change={handleChange("pickupdate")}
                          />
                          {touched.pickupdate && errors.pickupdate && (
                            <div className="text-red-500 text-sm">
                              {String(errors.pickupdate)}
                            </div>
                          )}
                        </div>
                        <div>
                          <InputComponent
                            label="Drop-Off Date"
                            type="date"
                            placeholder=""
                            // value={moment(values.returnDate).format('ddd, Do MMM, yyyy')}
                            change={handleChange("returnDate")}
                          />
                          {touched.returnDate && errors.returnDate && (
                            <div className="text-red-500 text-sm">
                              {String(errors.returnDate)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Time Inputs */}
                      <div className="flex justify-between items-center border-b py-1">
                        <div>
                          <InputComponent
                            label="Pick-Up Time"
                            type="time"
                            placeholder=""
                            change={handleChange("pickuptime")}
                            // value={moment(values?.pickuptime).format("HH:mm a")}
                          />
                          {touched.pickuptime && errors.pickuptime && (
                            <div className="text-red-500 text-sm">
                              {String(errors.pickuptime)}
                            </div>
                          )}
                        </div>
                        <div>
                          <InputComponent
                            label="Drop-Off Time"
                            type="time"
                            placeholder=""
                            change={handleChange("returntime")}
                            // value={moment(values?.returnDate).format("ddd, Do MMMM,yyyy")}
                          />
                          {touched.returntime && errors.returntime && (
                            <div className="text-red-500 text-sm">
                              {String(errors.returntime)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Total Time */}
                      <div className="flex justify-between items-center border-b py-1">
                        <div className="capitalize">Total Price</div>
                        <div className="font-semibold text-lg">
                          {calculateTotal(values)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center py-5">
                    <button
                      type="submit"
                      onClick={() => {
                        // e.preventDefault();
                        handleSubmit();
                      }}
                      className="bg-red-600 text-white w-[60%] py-2 rounded-lg font-semibold"
                    >
                      Book Car
                    </button>
                  </div>
                </>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
