import { useEffect, useState } from "react";
import { carProps } from "../../../types/dashboard";

interface CarsFilterOptionProps {
  cars: carProps[];
  setBrand: (value: string) => void;
  orderList: (value: number) => void;
}

const CarsFilterOption: React.FC<CarsFilterOptionProps> = ({ cars, setBrand, orderList }) => {
  const [carBrands, setCarBrands] = useState<string[]>([]);

  const filterList = () => {
    const Brands = new Set<string>();
    cars.forEach((element) => {
      Brands.add(element.carBrand);
    });
    setCarBrands(Array.from(Brands));
    console.log(Brands, "filtered brands");
  };

  useEffect(() => {
    if (cars) {
      filterList();
    }
  }, [cars]);

  return (
    <div className="my-10 flex items-center">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="text-[30px]">Cars Catalog</h2>
          <h2>Explore our cars you might like</h2>
        </div>
        <div className="flex gap-5">
          <select
            className="select select-bordered max-w-xs hidden md:block w-full"
            onChange={(e) => orderList(Number(e.target.value))}
            defaultValue=""
          >
            <option value="" disabled>
              Price
            </option>
            <option value={-1}>Min to max</option>
            <option value={1}>Max to min</option>
          </select>

          <select className="select select-bordered w-full capitalize max-w-xs" onChange={(e) =>setBrand(e.target.value) }>
            <option value ="">
              Manufacturer
            </option>
            {carBrands?.map((brands, index) => (
              <option value={brands} key={index}>{brands}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarsFilterOption;
