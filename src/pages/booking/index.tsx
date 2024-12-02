import { useState } from "react";
import InputComponent from "../../components/InputComponent";
import { Formik, FormikValues } from "formik";
import { FaCarAlt, FaFlagCheckered, FaImages, FaUser } from "react-icons/fa";
import { BsLuggage } from "react-icons/bs";
import moment from "moment";
import { useLocation } from "react-router";
import * as Yup from "yup"; // Import Yup for validation

const BookingDetails = () => {
  const location = useLocation();
  const item = location.state?.item;
  const sentData = location.state?.values;
  console.log(sentData, "values");
  const [licencePreview, setLicencePreview] = useState<string | null>(null);
  const [next, setNext] = useState("userdetails");

  const initialValues = {
    name: "",
    dob: "",
    phone: "",
    email: "",
    licence: null,
    cardholder: "",
    company: "",
    contact: "",
    card_number: "",
    expiryDate: "",
    cvv: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    licence: Yup.mixed().required("Licence is required"),
    cardholder: Yup.string().required("Cardholder name is required"),
    card_number: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    expiryDate: Yup.date().required("Expiry date is required"),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "CVV must be 3 digits")
      .required("CVV is required"),
  });

  const submit = async (values: FormikValues) => {
    console.log("Form Submitted:", values);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: File | null, shouldValidate?: boolean) => Promise<void>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setFieldValue("licence", file);
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setLicencePreview(previewUrl);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="text-2xl font-bold px-10 py-5">Booking Details</div>
      <div className="flex h-full w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            setFieldValue,
            errors,
            touched,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[90%] md:w-[90%] mx-auto p-5 space-y-5"
            >
              {/* User Details Section */}
              <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full">
                <div className="w-full md:w-[48%] lg:w-[58%] my-5">
                  {next === "userdetails" ? (
                    <div className="bg-white p-5 rounded-lg shadow-md space-y-3">
                      <h2 className="text-xl font-semibold">User Details</h2>
                      <InputComponent
                        placeholder="Enter your full name"
                        label="Full Name (Should match name on ID)"
                        change={handleChange("name")}
                        value={values?.name}
                        blur={handleBlur("name")}
                      />
                      {touched.name && errors.name && (
                        <div className="text-red-500 text-sm">
                          {errors.name}
                        </div>
                      )}
                      <InputComponent
                        placeholder="Enter your company name"
                        label="Company Name (optional)"
                        change={handleChange("company")}
                        blur={handleBlur("company")}
                        value ={values?.company}
                      />
                      {touched.company && errors.company && (
                        <div className="text-red-500 text-sm">
                          {errors.company}
                        </div>
                      )}
                      <div className="flex flex-col md:flex-row lg:flex-row justify-between space-x-3">
                        <InputComponent
                          placeholder="Date of Birth"
                          label="Date of Birth"
                          type="date"
                          change={handleChange("dob")}
                          blur={handleBlur("dob")}
                          value ={values?.dob}
                        />
                        {touched.dob && errors.dob && (
                          <div className="text-red-500 text-sm">
                            {errors.dob}
                          </div>
                        )}
                        <InputComponent
                          placeholder="Contact"
                          label="Contact"
                          change={handleChange("contact")}
                          blur={handleBlur("contact")}
                          value ={values?.contact}
                        />
                        {touched.contact && errors.contact && (
                          <div className="text-red-500 text-sm">
                            {errors.contact}
                          </div>
                        )}
                      </div>
                      <InputComponent
                        placeholder="Email"
                        label="Email"
                        type="email"
                        change={handleChange("email")}
                        blur={handleBlur("email")}
                        value={values?.email}
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      )}
                      <div className="block font-medium text-gray-700">Upload Driver's Licence</div>
                      <div className="border border-dashed flex justify-center items-center h-24 rounded-lg">
                        <input
                          type="file"
                          id="fileInput"
                          name="licence"
                          onChange={(event) =>
                            handleFileChange(event, setFieldValue as (field: string, value: File | null, shouldValidate?: boolean) => Promise<void>)
                          }
                          style={{ display: "none" }} // Hide the default file input
                        />

                        <label htmlFor="fileInput" className="cursor-pointer">
                          <FaImages />
                        </label>
                      </div>
                      {touched.licence && errors.licence && (
                        <div className="text-red-500 text-sm">
                          {errors.licence}
                        </div>
                      )}

                      <div className="flex justify-center">
                        <button
                          className="bg-red-600 text-white  w-[60%] py-3 rounded-lg font-semibold"
                          onClick={() => {
                            setNext("payment_details");
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-lg shadow-md space-y-5 my-10">
                      <h2 className="text-xl font-semibold">Payment Details</h2>
                      <InputComponent
                        placeholder="4242 4242 4242 4242"
                        label="Card Number"
                        change={handleChange("card_number")}
                        blur={handleBlur("card_number")}
                        value={values?.card_number}
                      />
                      {touched.card_number && errors.card_number && (
                        <div className="text-red-500 text-sm">
                          {errors.card_number}
                        </div>
                      )}
                      <InputComponent
                        placeholder="Cardholder Name"
                        label="Cardholder Name"
                        change={handleChange("cardholder")}
                        blur={handleBlur("cardholder")}
                        value={values?.cardholder}
                      />
                      {touched.cardholder && errors.cardholder && (
                        <div className="text-red-500 text-sm">
                          {errors.cardholder}
                        </div>
                      )}
                      <div className="flex justify-between space-x-3">
                        <InputComponent
                          placeholder="MM/YY"
                          label="Expiry Date"
                          type="date"
                          change={handleChange("expiryDate")}
                          blur={handleBlur("expiryDate")}
                          value={values?.expiryDate}
                        />
                        {touched.expiryDate && errors.expiryDate && (
                          <div className="text-red-500 text-sm">
                            {errors.expiryDate}
                          </div>
                        )}
                        <InputComponent
                          placeholder="CVV"
                          label="CVV"
                          type="text"
                          change={handleChange("cvv")}
                          blur={handleBlur("cvv")}
                          value={values?.cvv}
                        />
                        {touched.cvv && errors.cvv && (
                          <div className="text-red-500 text-sm">
                            {errors.cvv}
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center">
                        <button
                          className="bg-red-600 text-white py-3 rounded-lg font-semibold w-[60%]"
                          onClick={() => {
                            setNext("userdetails");
                          }}
                        >
                          Prev
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking Summary Section */}
                <div className="bg-gray-100 p-5 rounded-lg shadow-md space-y-3 w-full md:w-[50%] lg:w-[57%]">
                  <h2 className="text-xl font-semibold">Booking Summary</h2>

                  <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <div
                      className="rounded-lg max-w-[300px] min-w-[270px] bg-gradient-to-br from-[#EB4335] via-[#EB4335] to-[#B40711] h-[350px] p-5 flex flex-col text-white"
                      //   onClick={() => selected(item)}
                    >
                      <div className="items-center text-white flex w-full">
                        <div className="flex items-center text-white my-5 w-full justify-between">
                          <div className="flex items-center space-x-3 rounded-full bg-yellow-500 px-2 py-1">
                            <div>
                              <FaUser color="white" />
                            </div>
                            <div className="text-sm">2</div>
                          </div>
                          <div className="flex items-center space-x-3 rounded-full bg-yellow-500 px-2 py-1">
                            <div>
                              <BsLuggage color="white" />
                            </div>
                            <div className="text-sm">{item?.passengers}</div>
                          </div>
                          <div className="flex items-center space-x-3 rounded-full bg-yellow-500 px-2 py-1">
                            <div>
                              <FaCarAlt color="white" />
                            </div>
                            <div className="text-sm">{item?.gearshift}</div>
                          </div>
                        </div>
                      </div>

                      <div className="justify-center flex my-auto w-full">
                        <img
                          src={item?.image}
                          className="w-full h-[95%] object-contain"
                        />
                      </div>
                      <div>
                        <div>Unlimited km</div>
                        <div className="font-bold text-lg">
                          ${item?.price} /day
                        </div>
                      </div>
                    </div>

                    <div className="w-full overflow-scroll px-5">
                      <div className="flex items-center flex-col w-full">
                        <div>
                          <div className="text-lg font-semibold">
                            {item?.type}
                          </div>
                          <div className="text-base">{item?.description}</div>
                          <div>Num of days</div>
                        </div>
                        <div className="flex items-center space-x-5 w-full my-5">
                          <FaFlagCheckered size={30} />
                          <div>
                            <div className="text-gray-500 font-semibold text-lg capitalize">
                              pick details
                            </div>
                            <div>
                              {moment(sentData?.pickupdate).format(
                                "ddd Do MMM, yyyy"
                              )}
                            </div>
                            <div>
                              {moment(sentData?.pickuptime).format("HH:mm a")}
                            </div>
                            <div>pick up location</div>
                          </div>
                        </div>
                        <div className="border-l border-gray-400 h-20 mx-2 w-full" />
                        <div className="flex items-center space-x-5 w-full">
                          <FaFlagCheckered size={30} />
                          <div>
                            <div className="text-gray-500 font-semibold text-lg capitalize">
                              Return Data
                            </div>
                            <div>
                              {moment(sentData?.returnDate).format(
                                "ddd Do MMM, yyyy"
                              )}
                            </div>
                            <div>
                              {moment(sentData?.returntime).format("HH:mm a")}
                            </div>
                            <div>return location</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Display user inputs */}
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Name:</strong>
                    <div className="w-[65%]">{values.name || "N/A"}</div>
                  </div>
                  {/* Add other summaries here */}

                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Company:</strong>
                    <div className="w-[65%]">{values.company || "N/A"}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Date of Birth:</strong>
                    <div className="w-[65%]">
                      {values.dob
                        ? moment(values.dob).format("ddd, Do MMM, YYYY")
                        : "N/A"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Contact:</strong>
                    <div className="w-[65%]">{values.contact || "N/A"}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Email:</strong>
                    <div className="w-[65%]">{values.email || "N/A"}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Card Number:</strong>
                    <div className="w-[65%]">{values.card_number || "N/A"}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong className="w-[30%]">Cardholder Name:</strong>
                    <div className="w-[65%]">{values.cardholder || "N/A"}</div>
                  </div>
                  {licencePreview && (
                    <div className="mt-3">
                      <strong>Licence Preview:</strong>
                      <img
                        src={licencePreview}
                        alt="Licence Preview"
                        className="w-full h-auto object-contain rounded-md mt-2"
                      />
                    </div>
                  )}
                  {/* Submit Button */}
                  <div className="flex justify-center py-5">
                    <button
                      type="submit"
                      className="bg-red-600 text-white  w-[60%] py-2 rounded-lg font-semibold"
                    >
                      {isSubmitting ? "Processing..." : "Pay and Book"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingDetails;

// const calculateTotal = (values: FormikValues) => {
//   const { pickupdate, returnDate, pickuptime, returntime } = values;

//   const totalHours =
//     (new Date(returntime).getTime() - new Date(pickuptime).getTime()) /
//     (1000 * 60 * 60);
//   const totalDays =
//     (new Date(returnDate).getTime() - new Date(pickupdate).getTime()) /
//     (1000 * 60 * 60 * 24);

//   const pricePerHour = selectedCar ? selectedCar.price / 24 : 0;
//   return (totalDays * 24 + totalHours) * pricePerHour;
// };
