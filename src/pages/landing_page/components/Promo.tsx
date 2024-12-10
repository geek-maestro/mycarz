import PromoCard from "./PromoCard";

const Promo = () => {
  const cars = [
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
    { name: "Cheverollete", price: 300, image: "/chev.webp" },
  ];
  return (
    <div className="md:h-[60vh] lg:h-[60vh] h-full items-center justify-center md:container lg:container w-full mx-auto">
      <div>
        <div className="font-bold text-center text-5xl bg-transparent uppercase">
          The perfect car for your next trip from Carcassonne Airport
        </div>
        <div className="">
          <div className="carousel carousel-end rounded-box gap-3 w-full">
            {cars.map((item, index) => (
              <div className="carousel-item">
                <PromoCard item={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
