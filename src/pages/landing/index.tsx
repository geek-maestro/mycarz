import InputComponent from "../../components/InputComponent";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    const filters = [
        'distance', 'hourly', 'flat rate'
    ]
  return (
    <div className="w-screen h-full bg-[#2F3B41] justify-center items-center flex text-white min-h-screen p-2 md:py-5 md:px-10">
      <div className="bg-[url(/bg.jpeg)] w-full h-full bg-cover overflow-hidden border-2 border-[#FFFFFF] rounded-[30px] px-5">
        <Navbar />

        <div>
            <div className="text-3xl py-5">
            MyCarz Car Rental Services
            </div>
            <div className="w-[55%] text-base">
            Affordable and flexible car rentals for every journey. Choose from a wide 
            range of vehicles for hassle-free travel experince.
            </div>
        </div>


        <div className="my-5">
            {/* search form */}
            <div className="w-full md:w-[75%] lg:w-[55%] border-2 rounded-[25px] p-5 h-[50%] items-center">
                {/* filter */}
                <div className="flex-col sm:flex md:flex-row lg:flex-row items-center justify-between w-full">
                    {filters.map((filter, index) => (
                        <div key={index} className="py-2 border px-5 md:px-10 lg:px-10 capitalize border-white rounded-lg my-4">{filter}</div>
                    ))}
                </div>

                <div className="space-y-10 my-10">
                    <InputComponent placeholder={'Pickup address'}/>
                    <InputComponent placeholder={'Drop off address'}/>
                    <InputComponent placeholder={'Pick up date'}/>
                    <InputComponent placeholder={'Pick up time'}/>
                </div>
            <div className="items-center flex  justify-end">
                <button className="border bg-[#F4592F] px-5 py-2 rounded-lg">
                    Search Now
                </button>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
