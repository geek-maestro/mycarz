import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import Hero from "./components/hero";
import Searchinput from "./components/searchinput";
import CarsFilterOption from "./components/CarsFilterOption";
import { getCarList } from "../../services";
import { carProps } from "../../types/dashboard";
import CarsList from "./components/CarsList";
import ToastMsg from "./components/CarBooking/ToastMsg";
import { BookingContext } from "../../context/BookingContexts";

interface CarListResult {
  cars: carProps[];
}

const Dashboard = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [cars, setCars] = useState<carProps[]>([]);
  const [filteredList, setFilteredList] = useState<carProps[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const _getCarList = async () => {
    const result: CarListResult = await getCarList();
    console.log(result);
    setCars(result.cars);
    setFilteredList(result.cars);
  };

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/login");
    }
  }, [isLoaded]);

  useEffect(() => {
    _getCarList();
  }, []);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [showToast]);

  if (!isLoaded) return "Loading...";

  const filteredCarList = (brand: string) => {
    const filterList = filteredList.filter((item) => item.carBrand === brand);
    setCars(filterList);
  };

  const orderedList = (order: number) => {
    const sortedData = [...filteredList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCars(sortedData);
  };

  return (
    <div className="w-full ">
      <BookingContext.Provider value={{ showToast, setShowToast }}>
        {/* hero */}
        <Hero />
        <Searchinput />
        <CarsFilterOption
          cars={filteredList}
          setBrand={(value: string) => filteredCarList(value)}
          orderList={(value: number) => orderedList(value)}
        />
        <CarsList cars={cars} />
        {showToast && <ToastMsg msg="Booking created Successfully" />}
      </BookingContext.Provider>
    </div>
  );
};

export default Dashboard;
