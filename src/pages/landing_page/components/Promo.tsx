import { useEffect, useRef, useState } from "react";
import { getCarList } from "../../../services";
import { CarListResult, carProps } from "../../../types/dashboard";
import PromoCard from "./PromoCard";
import CarCard from "../../listings/components/CarCard";
import BookingForm from "./BookingForm";

const Promo = () => {
  const [cars, setCars] = useState<carProps[]>([]);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  // const cars = [
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  //   { name: "Cheverollete", price: 300, image: "/chev.webp" },
  // ];

  const _getCarList = async () => {
    const result: CarListResult = await getCarList();
    console.log(result);
    setCars(result.cars);
  };

  useEffect(() => {
    _getCarList();
  }, []);

  return (
    <div className="md:h-[60vh] lg:h-[60vh] h-full items-center justify-center w-full mx-auto">
      <div>
        <div className="font-bold text-center text-3xl bg-transparent uppercase">
          The perfect car for your next trip from Carcassonne Airport
        </div>
        <div className="w-full">
          <div className="carousel carousel-end rounded-box gap-3 w-full">
            {cars?.slice(0, 5).map((item, index) => (
              <div className="carousel-item w-[300px]"  key={item?.id}
                data-aos ="fade-right" data-aos-duration ="1000"
              onClick={() => {
                // handleCarClick(car)
                setSelected(item);
                setOpen(true)
              }}>
                <CarCard
                  item={item}
                  setSelected={setSelected}
                  // key={index}
                  selected={selected}
                />
              </div>
            ))}
          </div>
          <dialog
            ref={modalRef}
            id="car_modal_3"
            className="modal bg-transparent flex items-center justify-center"
          >
            <BookingForm car={selected} open={open} setOpen={setOpen} />
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Promo;
