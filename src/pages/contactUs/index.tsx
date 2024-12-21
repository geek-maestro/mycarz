import React from "react";
import InputComponent from "../../components/InputComponent";
import Footer from "../dashboard/components/Footer";

const ContactUs = () => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-gray-50">
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 md:px-8 lg:px-16">
      <div className="mb-8">
        <img
          src="/about.jpeg"
          alt="Contact Us"
          className="w-screen h-30 object-cover mx-auto md:h-[200px]"
        />
      </div>
      <div className="w-full max-w-[100hw] bg-white shadow-md rounded-lg p-6 md:p-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-4">
          Contact Our Support Team
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <InputComponent placeholder="Full Name" />
            <InputComponent placeholder="Email" />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <InputComponent placeholder="Phone" />
            <InputComponent placeholder="Address" />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <div className="flex items-center border rounded-lg gap-2 p-2 w-full">
              <textarea
                id="message"
                aria-label="Message"
                className="flex-1 border-none outline-none bg-transparent w-full resize-none"
                placeholder="Your message..."
                onChange={handleChange}
                rows={5}
              />
            </div>
          </div>
        </div>
        <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
        {/* Call Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or call us directly at</p>
          <a
            href="tel:0538713099"
            className="text-blue-600 font-semibold hover:underline"
          >
           +1 (443) 501‑6702
          </a>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
