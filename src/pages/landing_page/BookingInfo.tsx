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
import { FaImages } from "react-icons/fa";

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
  licence: null;
  proof: null;
  resetForm: () => void;
}

const BookingInfo = () => {
  const [checked, setChecked] = useState(true);
  const [licencePreview, setLicencePreview] = useState<string | null>(null);
  const [proof, setProof] = useState<string | null>(null);
  const [guarantorId, setGuarantorId] = useState<string | null>(null);
  const validationSchema = Yup.object().shape({
    pickupdate: Yup.string().required("Pick-up date is required."),
    returnDate: Yup.string().required("Return date is required."),
    pickuptime: Yup.string().required("Pick-up time is required."),
    returntime: Yup.string().required("Return time is required."),
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    licence: Yup.mixed().required("Licence is required"),
    email: Yup.string().email("Invalid email").required("Email is required."),
    cardNumber: Yup.string().required("Card number is required."),
    cardholderName: Yup.string().required("Cardholder name is required."),
    expiryDate: Yup.string().required("Expiry date is required."),
    cvv: Yup.string().required("CVV is required."),
    proof: Yup.mixed().required("Proof of Address is required"),
    guarantorId: Yup.mixed().required("guarantor ID of Address is required"),
    guarantor_email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
    guarantor_firstname: Yup.string().required("First name is required."),
    guarantor_lastName: Yup.string().required("Last name is required."),
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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const location = useLocation();
  const carData = location.state;

  console.log(carData, "car data");

  const calculateTotal = (values: formValueProps) => {
    console.log(values, "values");
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

  const rent = async (values: any, { resetForm }: FormikHelpers<any>) => {
    if (
      new Date(`${values.returnDate}T${values.returntime}`) <=
      new Date(`${values.pickupdate}T${values.pickuptime}`)
    ) {
      alert("Return date/time must be after pick-up date/time.");
      return;
    }

    navigate("/home/booking", {
      state: {
        item: carData ? { ...carData } : null,
        values: {
          pickupdate: values.pickupdate,
          returnDate: values.returnDate,
          pickuptime: values.pickuptime,
          returntime: values.returntime,
        },
      },
    });
    resetForm();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: File | null) => void,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0] || null;
    setFieldValue(event.target.name, file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };
  return (
    <div className="my-10 px-5">
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

      <div className="flex">
        <div className="w-full md:w-[53%] lg:w-[53%]">
          <Formik
            initialValues={{
              pickupdate: "",
              returnDate: "",
              pickuptime: "",
              returntime: "",
              company: "",
              firstName: "",
              lastName: "",
              email: "",
              cardNumber: "",
              cardholderName: "",
              expiryDate: "",
              cvv: "",
              licence: null,
              proofOfAddress: null,
              proof: null,
              guarantorId: null,
              guarantor_firstName: "",
              guarantor_lastName: "",
              guarantor_email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={rent}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <>
                <div className="my-5 w-full">
                  <div className="capitalize text-xl font font-semibold py-3">
                    Rental Details
                  </div>
                  <div className="flex flex-col border rounded-lg p-5 w-full shadow-[#333333] shadow-inner form-control">
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
                  <div className="capitalize text-xl font font-semibold py-3">
                    <h2>Personal Information</h2>
                  </div>
                  <div className="flex flex-col border rounded-lg p-5 shadow-inner shadow-[#333333]">
                    <div className="space-y-5 ">
                      <InputComponent
                        label="Company(optional)"
                        placeholder=""
                        change={handleChange("company")}
                      />
                      {touched.company && errors.company && (
                        <div className="text-red-500 text-sm">
                          {String(errors.company)}
                        </div>
                      )}
                      <div className="flex items-center gap-8 flex-col md:flex-row lg:flex-row">
                        <InputComponent
                          label="First name"
                          placeholder=""
                          change={handleChange("firstName")}
                        />
                        {touched.firstName && errors.firstName && (
                          <div className="text-red-500 text-sm">
                            {String(errors.firstName)}
                          </div>
                        )}
                        <InputComponent
                          label="Last name"
                          placeholder=""
                          change={handleChange("lastName")}
                        />
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
                      <label htmlFor="">Licence: </label>
                      <div className="border relative border-dashed flex justify-center items-center h-[200px] rounded-lg overflow-hidden">
                        <input
                          type="file"
                          name="licence"
                          onChange={(e) =>
                            handleFileChange(
                              e,
                              setFieldValue,
                              setLicencePreview
                            )
                          }
                          className="hidden"
                        />
                        {licencePreview && (
                          <div className="absolute w-full h-full overflow-hidden">
                          <img src={licencePreview} alt="Licence Preview" className="w-full h-full object-cover"/>
                          </div>
                        )}
                        {touched.licence && errors.licence && (
                          <span className="error">{errors.licence}</span>
                        )}

                        <label
                          htmlFor="fileInput"
                          className="cursor-pointer z-10"
                        >
                          <FaImages size={30}/>
                        </label>
                      </div>
                      {touched.licence && errors.licence && (
                        <div className="text-red-500 text-sm">
                          {errors.licence}
                        </div>
                      )}
                      <label htmlFor="proof" className="mt-10">
                        Proof Of Address:{" "}
                      </label>
                      <div className="border relative border-dashed flex justify-center items-center h-[200px] rounded-lg overflow-hidden">
                        <input
                          type="file"
                          name="proof"
                          onChange={(e) =>
                            handleFileChange(e, setFieldValue, setProof)
                          }
                          className="hidden"
                        />
                        {proof && <div className="absolute w-full h-full overflow-hidden"><img src={proof} alt="Proof of Address" className="w-full h-auto object-cover"/></div>}
                        {touched.proof && errors.proof && (
                          <span className="text-red-500 text-sm">
                            {errors.proof}
                          </span>
                        )}

                        <label
                          htmlFor="fileInput"
                          className="cursor-pointer z-10"
                        >
                          <FaImages size={30}/>
                        </label>
                      </div>
                      {/* {touched.proof && errors.proof && (
                        <div className="text-red-500 text-sm">
                          {errors.proof}
                        </div>
                      )} */}
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
                      <div className="flex items-center gap-2 bg-info p-2 rounded-lg text-black">
                        <BsFillInfoCircleFill size={30}/>
                        <div>
                          Drivers must have held their driver's license for at
                          least 1 year(s) for this vehicle
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5 w-full">
                  <div className="capitalize text-xl font font-semibold py-3">
                    <h2>Guarantor's Information</h2>
                  </div>
                  <div className="flex flex-col border rounded-lg p-5 shadow-inner shadow-[#333333]">
                    <div className="space-y-5 ">
                      <div className="flex items-center gap-8 flex-col md:flex-row lg:flex-row">
                        <InputComponent
                          label="First name"
                          placeholder=""
                          change={handleChange("guarnantor_firstName")}
                        />
                        {touched.guarantor_firstName &&
                          errors.guarantor_firstName && (
                            <div className="text-red-500 text-sm">
                              {String(errors.guarantor_firstName)}
                            </div>
                          )}
                        <InputComponent
                          label="Last name"
                          placeholder=""
                          change={handleChange("guarantor_lastName")}
                        />
                        {touched.guarantor_lastName &&
                          errors.guarantor_lastName && (
                            <div className="text-red-500 text-sm">
                              {String(errors.guarantor_lastName)}
                            </div>
                          )}
                      </div>
                      <InputComponent
                        label="Email"
                        type="email"
                        placeholder=""
                        change={handleChange("guarantor_email")}
                      />
                      {touched.guarantor_email && errors.guarantor_email && (
                        <div className="text-red-500 text-sm">
                          {String(errors.guarantor_email)}
                        </div>
                      )}
                      <label htmlFor="guarantorId" className="mt-5">
                        Guarantor ID:{" "}
                      </label>
                      <div className="border relative border-dashed flex justify-center items-center h-[200px] rounded-lg overflow-hidden">
                        <input
                          type="file"
                          id="fileInput"
                          name="licence"
                          onChange={(e) =>
                            handleFileChange(e, setFieldValue, setGuarantorId)
                          }
                          style={{ display: "none" }} // Hide the default file input
                        />
                        {guarantorId && (
                          <div className="absolute w-full h-full overflow-hidden">
                            {/* <strong>Guarantor ID:</strong> */}
                            <img
                              src={guarantorId}
                              alt="Licence Preview"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}

                        <label
                          htmlFor="fileInput"
                          className="cursor-pointer z-10"
                        >
                          <FaImages size={30} />
                        </label>
                      </div>
                      {touched.guarantorId && errors.guarantorId && (
                        <div className="text-red-500 text-sm">
                          {errors.guarantorId}
                        </div>
                      )}
                      {/* <div className="form-control md:w-[50%] lg:w-[45%]">
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
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="my-5 w-full">
                  <div className="capitalize text-xl font font-semibold py-3">
                    <h2>Payment Information</h2>
                  </div>
                  <div className="flex flex-col border rounded-lg p-5 shadow-inner shadow-[#333333]">
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
                      <InputComponent
                        label="Cardholder name"
                        placeholder=""
                        change={handleChange("cardholderName")}
                      />
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
                        <InputComponent
                          label="cvv"
                          placeholder=""
                          change={handleChange("cvv")}
                        />
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
                    className="bg-red-600 hover:bg-[#FFC107] text-white w-[60%] py-2 rounded-lg font-semibold"
                  >
                    Book Car
                  </button>
                </div>
              </>
            )}
          </Formik>
        </div>

        <div className="hidden md:w-[45%] lg:w-[45%] bg-white p-5 rounded-lg shadow-lg right-2 h-full lg:block md:block fixed top-10 overflow-y-scroll max-h-[80vh] my-[10%] py-5">
          
          <div className="text-lg font-bold mb-3 capitalize w-full">
            {carData?.name}
          </div>
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
