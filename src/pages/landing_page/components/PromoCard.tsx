const PromoCard = ({ item }) => {
  return (
    <div className="bg-gradient-to-br from bg-primary via-[#EB4335] to-secondary rounded-xl w-[90%] md:w-[350px] lg:w-[350px] p-5">
      <div className="text-left w-full flex-col">
        <div className="text-xl">{item.name}</div>
        <div className="flex items-center">
          <div className="text-sm">or similar</div>
          <div className="divider divider-horizontal" />
          <div className="text-sm capitalize">sedan</div>
        </div>
      </div>

      <div>
        <img src={item.image} alt="" />
      </div>

      <div className="text-left w-full flex-col">
        <div className="text-xl">{item.price}</div>
        <div>Book now</div>
      </div>
    </div>
  );
};

export default PromoCard;
