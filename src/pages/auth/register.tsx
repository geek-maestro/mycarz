// import { useNavigate } from "react-router";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
    // const navigate  = useNavigate()
    // const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault(); // Prevent default form submission
    //   navigate("/home"); // Navigate to the intended route
    // };
  return (
    // <div className="min-h-screen bg-[url(/bg.jpeg)] w-screen h-full bg-cover overflow-hidden border-2 border-[#FFFFFF] rounded-[30px] flex flex-col justify-center items-center">
    //     <Navbar />
    //   <div className="max-w-[95%] bg-white shadow-lg rounded-lg p-6 min-w-[80%] w-[80%] mb-10">
    //     <h1 className="text-2xl font-bold text-center text-[#DF0609] mb-4">
    //       Register
    //     </h1>
    //     <form className="">
    //       <InputComponent
    //         label="Full Name"
    //         placeholder="Enter your name"
    //       />
    //       <InputComponent
    //         label="Date Of Birth"
    //         placeholder="Enter your date of birth"
    //         type="date"
    //       />
    //       <InputComponent
    //         label="Address"
    //         placeholder="Enter your address"
    //       />
    //       <InputComponent
    //         label="Phone Number"
    //         placeholder="Enter your phone number"
    //       />
    //       <InputComponent
    //         label="Email Address"
    //         placeholder="Enter your email"
    //         type="email"
    //       />
    //       <InputComponent
    //         label="Password"
    //         placeholder="Enter your password"
    //         type="password"
    //       />
    //       <InputComponent
    //         label="Confirm Password"
    //         placeholder="Confirm your password"
    //         type="password"
    //       />
    //       <div className="flex justify-center">
    //         <button
    //           type="submit"
    //           onClick={handleRegister}
    //           className="w-full max-w-xs py-2 bg-[#DF0609] text-white rounded-lg hover:bg-red-700 transition duration-300"
    //         >
    //           Register
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div>
      <SignUp />
    </div>
  );
};

export default Register;
