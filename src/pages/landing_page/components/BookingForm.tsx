import { BsLuggage } from "react-icons/bs";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
import { carProps } from "../../../types/dashboard";

interface BookingFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  car: carProps;
}

const BookingForm: React.FC<BookingFormProps> = ({
  open: isOpen,
  setOpen: setIsOpen,
  car,
}) => {
  //   const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    const modal = document.getElementById("car_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };
  const navigate = useNavigate();
  console.log(car, "seleted car from modal");

  return (
    <div className="relative w-screen flex items-center justify-center">
      {/* Modal */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end md:items-center md:block md:w-full lg:hidden">
            <div
              className="w-full md:w-full bg-white rounded-t-lg md:rounded-lg  transform transition-transform duration-3000 ease-in-out h-screen overflow-y-auto"
              style={{ transform: "translateY(0)" }} // Animation to slide up
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <div>
                <div className="bg-gradient-to-br from-primary via-accent w-screen relative">
                  <div className="w-full h-full group-hover:h-full">
                    <img
                      src={car?.image[0].url}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-3 py-3 space-y-2 rounded">
                    {/* Car Details */}
                    <div className=" absolute top-2 text-[#f1f1f1]">
                      <div>
                        <div className="text-xl font-semibold capitalize">
                          {car?.name}
                        </div>
                        <div className="text-sm capitalize">
                          {car?.carBrand}
                        </div>
                      </div>

                      {/* Icons and Stats */}
                      <div className="flex flex-wrap items-center gap-3 text-white mt-5">
                        <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <FaUser />
                          <span className="text-xs">{car?.seats}</span>
                        </div>
                        <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <BsLuggage />
                          <span className="text-xs">{car?.seats}</span>
                        </div>
                        <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <FaCarAlt />
                          <span className="text-xs">{car?.carType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="capitalize my-2 ">
                      minimum age of the youngest driver: 18
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-l border-black h-full space-y-5 p-5">
                <div>
                  <div className="my-2 capitalize font-semibold">
                    booking option
                  </div>
                  <div>
                    <div className="form-control w-full">
                      <label className="label cursor-pointe flex flex-col border border-black rounded-tl-lg rounded-tr-lg">
                        <div className="flex w-full gap-2">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                            defaultChecked
                          />
                          <div className="font-semibold text-lg">
                            Best price
                          </div>
                        </div>
                        <div className="flex flex-col w-full px-3">
                          <div className="text-sm">
                            Pay now, cancel and rebook for a fee
                          </div>
                          <div className="text-left">included</div>
                        </div>
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointe flex flex-col border border-black rounded-bl-lg rounded-br-lg">
                        <div className="flex w-full gap-2">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                            defaultChecked
                          />
                          <div className="font-semibold text-lg capitalize">
                            stay flexible
                          </div>
                        </div>
                        <div className="flex flex-col w-full px-3">
                          <div className="text-sm max-w-[70%]">
                            Pay at pick-up, free cancellation and rebooking any
                            time before pick-up time
                          </div>
                          <div>included</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-2 font-semibold">Mileage</div>
                  <div className="flex justify-between items-center w-full border border-black p-3 rounded-lg">
                    <div>
                      <div className="font-semibold text-lg capitalize">
                        Unlimited kilometers
                      </div>
                      <div className="text-sm">
                        All kilometers are included in the price
                      </div>
                    </div>
                    <div>included</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-5">
                      <div className="text-lg font-bold">$40.29 /day</div>
                      <div className="text-sm">$344.45 total</div>
                    </div>
                    <div
                      onClick={() => {
                        const modal = document.getElementById(
                          "my_modal_3"
                        ) as HTMLDialogElement;
                        if (modal) {
                          modal.showModal();
                        }
                      }}
                      className="cursor-pointer underline"
                    >
                      Price details
                    </div>

                    <dialog
                      id="my_modal_3"
                      className="modal w-full max-w-[300px]"
                    >
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="text-smibold md:font-bold mdtext-xl uppercase">
                          price details!
                        </h3>
                        <h2 className="py-4 capitalize">rental charges</h2>
                        <div className="flex items-center justify-between py-4">
                          <div>4 Rental days x $40.55</div>
                          <div>$175.16</div>
                        </div>

                        <div className="border-t border-black border-b ">
                          <h2 className="py-4 capitalize">taxes and fees</h2>
                          <div className="flex items-center justify-between py-4">
                            <div className="capitalize">
                              premium location fee
                            </div>
                            <div>$75.16</div>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <div className="capitalize">environmental fee</div>
                            <div>$5.16</div>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <div className="capitalize">
                              registration fee/ road tax
                            </div>
                            <div>$17.16</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between py-4">
                          <div className="md:font-bold md:text-2xl capitalize">
                            total(incl. tax)
                          </div>
                          <div className="font-bold text-xl md:text-3xl">
                            $176.16
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </div>

                  <div>
                    <button
                      className="py-3 text-center px-16 bg-primary rounded-lg "
                      onClick={() => navigate("/home/booking", { state: car })}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="modal-box max-w-[79%] h-[80%] md:block lg:block hidden">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const modal = document.getElementById(
                  "car_modal_3"
                ) as HTMLDialogElement;
                if (modal) {
                  modal.close();
                }
              }}
            >
              ✕
            </button>
            <div className="hidden md:hidden lg:flex rounded-xl bg-slate-300 overflow-hidden w-full h-full">
              <div className="flex flex-col lg:flex-row w-full items-center justify-between relative h-full">
                <div className="w-[50%] h-full bg-gradient-to-br from-primary via-accent relative">
                  <div className="w-full h-full group-hover:h-full mt-16">
                    <img
                      src={car?.image[0].url}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="bg-opacity-20 px-3 py-3 space-y-2 rounded">
                    {/* Car Details */}
                    <div className=" absolute top-2 text-[#f1f1f1]">
                      <div>
                        <div className="text-xl font-semibold capitalize">
                          {car?.name}
                        </div>
                        <div className="text-sm capitalize">
                          {car?.carBrand}
                        </div>
                      </div>

                      {/* Icons and Stats */}
                      <div className="flex flex-wrap items-center gap-3 text-white mt-5">
                        <div className="flex items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <FaUser />
                          <span className="text-xs">{car?.seats}</span>
                        </div>
                        <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <BsLuggage />
                          <span className="text-xs">{car?.seats}</span>
                        </div>
                        <div className="flex text-xs items-center space-x-2 bg-[#ff4500] px-3 py-1 rounded-full shadow-md">
                          <FaCarAlt />
                          <span className="text-xs">{car?.carType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="capitalize my-2 ">
                      minimum age of the youngest driver: 18
                    </div>
                  </div>
                </div>
                <div className="w-[60%] border-l border-black h-full gap-10 space-y-5 p-10">
                  <div>
                    <div className="my-2 capitalize font-semibold">
                      booking option
                    </div>
                    <div>
                      <div className="form-control">
                        <label className="label cursor-pointer items-center flex gap-5 border border-black rounded-tl-lg rounded-tr-lg px-5">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                            defaultChecked
                          />
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <div className="font-semibold text-lg">
                                Best price
                              </div>
                              <div className="text-sm">
                                Pay now, cancel and rebook for a fee
                              </div>
                            </div>
                            <div>included</div>
                          </div>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label cursor-pointer items-center flex gap-5 border border-black rounded-bl-lg rounded-br-lg px-5">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                            defaultChecked
                          />
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <div className="font-semibold text-lg capitalize">
                                stay flexible
                              </div>
                              <div className="text-sm max-w-[70%]">
                                Pay at pick-up, free cancellation and rebooking
                                any time before pick-up time
                              </div>
                            </div>
                            <div>included</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="my-2 font-semibold">Mileage</div>
                    <div className="flex justify-between items-center w-full border border-black p-3 rounded-lg">
                      <div>
                        <div className="font-semibold text-lg capitalize">
                          Unlimited kilometers
                        </div>
                        <div className="text-sm">
                          All kilometers are included in the price
                        </div>
                      </div>
                      <div>included</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-5">
                        <div className="text-lg font-bold">$40.29 /day</div>
                        <div className="text-sm">$344.45 total</div>
                      </div>
                      <div
                        onClick={() => {
                          const modal = document.getElementById(
                            "my_modal_3"
                          ) as HTMLDialogElement;
                          if (modal) {
                            modal.showModal();
                          }
                        }}
                        className="cursor-pointer underline"
                      >
                        Price details
                      </div>

                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-xl uppercase">
                            price details!
                          </h3>
                          <h2 className="py-4 capitalize">rental charges</h2>
                          <div className="flex items-center justify-between py-4">
                            <div>4 Rental days x $40.55</div>
                            <div>$175.16</div>
                          </div>

                          <div className="border-t border-black border-b ">
                            <h2 className="py-4 capitalize">taxes and fees</h2>
                            <div className="flex items-center justify-between py-4">
                              <div className="capitalize">
                                premium location fee
                              </div>
                              <div>$75.16</div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <div className="capitalize">
                                environmental fee
                              </div>
                              <div>$5.16</div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <div className="capitalize">
                                registration fee/ road tax
                              </div>
                              <div>$17.16</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between py-4">
                            <div className="text-bold font-2xl capitalize">
                              total(incl. tax)
                            </div>
                            <div className="font-bold text-3xl">$176.16</div>
                          </div>
                        </div>
                      </dialog>
                    </div>

                    <div>
                      <button
                        className="py-3 text-center px-16 bg-primary rounded-lg "
                        onClick={() => navigate("/home/booking", { state: car })}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div></div>
    </div>
  );
};

export default BookingForm;
