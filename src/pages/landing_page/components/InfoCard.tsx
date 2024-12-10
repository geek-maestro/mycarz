const InfoCard = () => {
  return (
    <div className="rounded-xl h-[350px] overflow-hidden">
      <div className="relative bg-[url('/business.webp')] bg-cover w-full h-full">
        <div className="bg-black bg-opacity-65 w-full h-full flex flex-col p-5 ">
          <div className="my-auto">
            <fieldset className="border-2 border-gray-200 rounded-lg shadow-lg w-[150px] items-center justify-center flex">
              <legend className="text-base font-medium bg-gray-400 px-3 py-1 rounded-md text-gray-700 text-center">
                Save Up to
              </legend>
              <div className="p-4 text-3xl font-bold text-gray-40">20%</div>
            </fieldset>
          </div>

          <div>
            <div className="text-2xl uppercase text-textPrimary font-bold">
              rental cars for bussiness customers
            </div>
            <div className="text-base text-textPrimary capitalize">
              take advantage of benefits and preferncial rates
            </div>
          </div>

          <div>register now</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
