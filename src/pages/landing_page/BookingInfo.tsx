import { Formik, FormikHelpers } from "formik";
import { useState } from "react";
import InputComponent from "../../components/InputComponent";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router";
import { BsFillInfoCircleFill } from "react-icons/bs";
import "pure-react-carousel/dist/react-carousel.es.css";
// import { formValueProps } from "../../types/listings";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface formValueProps {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
  pickupdate: Date;
  returnDate: Date;
  pickuptime: Date;
  returntime: Date;
  resetForm: () => void;
}

const BookingInfo = () => {
  const [checked, setChecked] = useState(true);
  const validationSchema = Yup.object().shape({
    pickupdate: Yup.string().required("Pick-up date is required."),
    returnDate: Yup.string().required("Return date is required."),
    pickuptime: Yup.string().required("Pick-up time is required."),
    returntime: Yup.string().required("Return time is required."),
    company: Yup.string().required("Company name is required."),
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    cardNumber: Yup.string().required("Card number is required."),
    cardholderName: Yup.string().required("Cardholder name is required."),
    expiryDate: Yup.string().required("Expiry date is required."),
    cvv: Yup.string().required("CVV is required."),
  });

  const navigate = useNavigate();
  const carDetails = {
    pickupdate: new Date(),
    returnDate: new Date(),
    pickuptime: new Date(),
    returntime: new Date(),
    resetForm: () => {},
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const location = useLocation();
  const carData = location.state

  console.log(carData, "car data")

  const calculateTotal = (values: formValueProps) => {
    console.log(values, "values")
    const { pickupdate, returnDate, pickuptime, returntime } = values;

    if (!pickupdate || !returnDate || !pickuptime || !returntime) {
      return "Please complete all fields.";
    }

    const totalHours =
      (new Date(`${returnDate}T${returntime}`).getTime() -
        new Date(`${pickupdate}T${pickuptime}`).getTime()) /
      (1000 * 60 * 60);

    const pricePerHour = carData?.price ? carData.price / 168 : 0;
    if (totalHours < 0) {
      return "Invalid time range.";
    }

    return `$${(totalHours * pricePerHour).toFixed(2)}`;
  };

//   useEffect(() => {}, [])

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

    // Ensure all personal and payment information is validated
    if (
      !values.company ||
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.cardNumber ||
      !values.cardholderName ||
      !values.expiryDate ||
      !values.cvv
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    navigate("/home/booking", {
      state: {
        item: carData ? { ...carData } : null, // Ensure serializability
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
    <div className="my-10 container mx-auto">
      <div className="collapse bg-base-200 md:hidden lg:hidden bg-gradient-to-br from-primary via-accent">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex justify-between">
            <img
              src={carData?.image[0]?.url}
              alt="camry"
              className="w-[50%] h-12 object-cover mb-4"
            />
            <div className="text-lg font-bold mb-3 w-[40%] capitalize">
              {carData?.carType}
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <p>
            <div className="my-5">
              <div className="capitalize text-xl font font-semibold py-3">
                Car details
              </div>
              <div className="flex flex-col border rounded-lg p-5">
                <div>
                  <div>Car Brand</div>
                  <div>{carData?.carBrand}</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Year</div>
                  <div>2020</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Type</div>
                  <div>{carData?.carType}</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Color</div>
                  <div>Red</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Rental Type</div>
                  <div>Per Week</div>
                </div>
                <div className="flex justify-between items-center border-b py-1">
                  <div>Car Insurance</div>
                  <div>2020</div>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full md:w-[60%] lg:w-full">
          <Formik
            initialValues={{
              ...carDetails,
              company: '',
              firstName: '',
              lastName: '',
              email: '',
              cardNumber: '',
              cardholderName: '',
              expiryDate: '',
              cvv: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: formValueProps, formikHelpers: FormikHelpers<formValueProps>) => {
              return rent(values, formikHelpers);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <div className="my-5 w-full">
                  <div className="capitalize text-xl font font-semibold py-3">
                    Rental Details
                  </div>
                  <div className="flex flex-col border rounded-lg p-5 w-full">
                    Date Inputs
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center border-b py-1">
                      <div className="w-full md:w-[48%] lg:w-[48%]">
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
                      <div className="w-full md:w-[48%] lg:w-[48%]">
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
                    Time Inputs
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center border-b py-1">
                      <div className="w-full md:w-[48%] lg:w-[48%]">
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
                      <div className="w-full md:w-[48%] lg:w-[48%]">
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
                    Total Time
                    <div className="flex justify-between items-center border-b py-1">
                      <div className="capitalize">Total Price</div>
                      <div className="font-semibold text-lg">
                        {calculateTotal(values)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5 w-full">
                  <div className="flex flex-col border rounded-lg p-5">
                    <h2>Personal Information</h2>
                    <div className="space-y-5">
                      <InputComponent label="Company" placeholder="" change={handleChange("company")} />
                      {touched.company && errors.company && (
                        <div className="text-red-500 text-sm">
                          {String(errors.company)}
                        </div>
                      )}
                      <div className="flex items-center gap-8 flex-col md:flex-row lg:flex-row">
                        <InputComponent label="First name" placeholder="" change={handleChange("firstName")} />
                        {touched.firstName && errors.firstName && (
                          <div className="text-red-500 text-sm">
                            {String(errors.firstName)}
                          </div>
                        )}
                        <InputComponent label="Last name" placeholder="" change={handleChange("lastName")} />
                        {touched.lastName && errors.lastName && (
                          <div className="text-red-500 text-sm">
                            {String(errors.lastName)}
                          </div>
                        )}
                      </div>
                      <InputComponent
                        label="Email"
                        type="email"
                        placeholder=""
                        change={handleChange("email")}
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-sm">
                          {String(errors.email)}
                        </div>
                      )}
                      <div className="form-control md:w-[50%] lg:w-[45%]">
                        <label className="label cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox"
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="label-text">
                            I am 25 years or older
                          </span>
                        </label>
                      </div>
                      <div>
                        {!checked && (
                          <div>
                            <InputComponent
                              label="What's your birthday?"
                              placeholder=""
                              type="date"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 bg-info p-2 rounded-lg text-black">
                        <BsFillInfoCircleFill />
                        <div>
                          Drivers must have held their driver's license for at
                          least 1 year(s) for this vehicle
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5 w-full">
                  <div className="flex flex-col border rounded-lg p-5">
                    <h2>Payment Information</h2>
                    <div className="space-y-5">
                      <InputComponent
                        label="Card number"
                        placeholder="1234 1234 1234 1234"
                        change={handleChange("cardNumber")}
                      />
                      {touched.cardNumber && errors.cardNumber && (
                        <div className="text-red-500 text-sm">
                          {String(errors.cardNumber)}
                        </div>
                      )}
                      <InputComponent label="Cardholder name" placeholder="" change={handleChange("cardholderName")} />
                      {touched.cardholderName && errors.cardholderName && (
                        <div className="text-red-500 text-sm">
                          {String(errors.cardholderName)}
                        </div>
                      )}
                      <div className="flex items-center gap-8 flex-col md:flex-row lg:flex-row">
                        <InputComponent
                          label="Expiry date"
                          type="date"
                          placeholder=""
                          change={handleChange("expiryDate")}
                        />
                        {touched.expiryDate && errors.expiryDate && (
                          <div className="text-red-500 text-sm">
                            {String(errors.expiryDate)}
                          </div>
                        )}
                        <InputComponent label="cvv" placeholder="" change={handleChange("cvv")} />
                        {touched.cvv && errors.cvv && (
                          <div className="text-red-500 text-sm">
                            {String(errors.cvv)}
                          </div>
                        )}
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

        <div className="hidden md:w-[30%] lg:w-[40%] bg-white p-5 rounded-lg shadow-lg right-2 h-full lg:block fixed top-20 overflow-y-scroll max-h-[66vh] my-[10%]">
          <div
            //   onClick={() => setSelectedCar(null)}
            className="cursor-pointer text-gray-500 font-semibold "
          >
            Close
          </div>
          <div className="text-lg font-bold mb-3 capitalize w-full">{carData?.name}</div>
          <img
            src={carData?.image[0]?.url}
            alt="camry"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="w-full">
          <Carousel responsive={responsive}>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <div className="flex justify-center items-center">
                    <img
                      src={`/car${index + 1}.png`} // Ensure this path is correct
                      alt={`Car Image ${index + 1}`}
                      className="w-[100px] h-[80px] object-contain border rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
            </div>

          <p className="text-gray-600">the best car</p>

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
                <div className="capitalize">{carData?.carType}</div>
              </div>
              <div className="flex justify-between items-center border-b py-1">
                <div>Color</div>
                <div>{carData?.color}</div>
              </div>
              <div className="flex justify-between items-center border-b py-1">
                <div>Rental Type</div>
                <div>Per Week</div>
              </div>
              <div className="flex justify-between items-center border-b py-1">
                <div>Car Insurance</div>
                <div>2020</div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
    // </div>
  );
};

export default BookingInfo;
