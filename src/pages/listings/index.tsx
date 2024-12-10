import { useContext, useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { listingProps } from "../../types/listings";
import { getCarList } from "../../services";
import { CarListResult, carProps } from "../../types/dashboard";
import CarsList from "../dashboard/components/CarsList";
import { BookingContext } from "../../context/BookingContexts";

const Listings = () => {
  const [cars, setCars] = useState<carProps[]>([]);
  const [filteredCars, setFilteredCars] = useState<carProps[]>([]);
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [selectedCar, setSelectedCar] = useState<listingProps | null>(null);
  const [open, setOpen] = useState(false);
  const bookingContext = useContext(BookingContext);

  if (!bookingContext) {
    throw new Error("BookingContext must be used within a BookingProvider");
  }

  // const { showToast } = bookingContext;

  const _getCarList = async () => {
    try {
      const result: CarListResult = await getCarList();
      setCars(result.cars);
      setFilteredCars(result.cars);

      // Extract car brands dynamically
      const brands = Array.from(new Set(result.cars.map((car) => car.carBrand)));
      setCarBrands(brands);
    } catch (error) {
      console.error("Failed to fetch car list:", error);
    }
  };

  useEffect(() => {
    _getCarList();
  }, []);

  const handleSortByPrice = (order: number) => {
    const sorted = [...filteredCars].sort((a, b) =>
      order === -1 ? a.price - b.price : b.price - a.price
    );
    setFilteredCars(sorted);
  };

  const handleFilterByBrand = (brand: string) => {
    if (!brand) {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.carBrand === brand);
      setFilteredCars(filtered);
    }
  };

  return (
    <div className="my-10">
      <div className="flex px-10">
        <div
          className={`flex-1 lg:pr-5 overflow-y-auto`}
        >
          <div className="py-5 border-b border-b-[#DF0609] font-semibold">
            WHICH CAR DO YOU WANT TO DRIVE?
          </div>

          <div className="flex gap-5 my-10">
            <select
              className="select select-bordered max-w-xs hidden md:block w-full"
              onChange={(e) => handleSortByPrice(Number(e.target.value))}
            >
              <option disabled selected>
                Price
              </option>
              <option value={-1}>Min to max</option>
              <option value={1}>max to min</option>
            </select>

            <select
              className="select select-bordered w-full capitalize max-w-xs"
              onChange={(e) => handleFilterByBrand(e.target.value)}
            >
              <option value="" selected>
                Manufacturer
              </option>
              {carBrands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <CarsList
            cars={filteredCars}
            open={open}
            setOpen={setOpen}
            setSelected={setSelectedCar}
            selected={selectedCar}
          />
        </div>
      </div>

      {/* {selectedCar && (
        <div className="mt-5 px-10">
          <BookingForm selectedCar={selectedCar} />
        </div>
      )} */}

      {/* {showToast && <ToastMsg msg="Booking created Successfully" />} */}
    </div>
  );
};

export default Listings;
