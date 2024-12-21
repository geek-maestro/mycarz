import React, { useEffect, useState } from "react";
import Footer from "../dashboard/components/Footer";

const About = () => {
  const slides = ["/about.jpeg", "/rent2.jpeg", "/rent.jpeg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Carousel Section */}
      <div className="relative w-full h-[40vh] md:h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
          >
            ❮
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
          >
            ❯
          </button>
        </div>
        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 lg:px-24 py-10 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold underline mb-4">Welcome to MyCarzRentalUsa</h2>
            <p className="text-lg leading-relaxed">
              At MyCarzRentalUsa, we are dedicated to making car rentals simple, affordable, and
              stress-free. Since our founding in [Year], we’ve helped thousands of travelers and
              locals hit the road with confidence and convenience. Whether you’re planning a weekend
              getaway or need a vehicle for business, we’ve got you covered.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/rent.jpeg"
              alt="rent"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mt-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="/about.jpeg"
              alt="About Our Fleet"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-semibold underline mb-4">Our Fleet</h2>
            <p className="text-lg leading-relaxed">
              We offer a diverse selection of vehicles to meet every need:
              <ul className="list-disc ml-5 mt-2">
                <li>Economy Cars: Perfect for budget-conscious travelers.</li>
                <li>SUVs: Ideal for family trips or group adventures.</li>
                <li>Luxury Cars: Experience premium comfort and style.</li>
              </ul>
              Each vehicle is meticulously maintained and regularly serviced to ensure your safety
              and satisfaction.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mt-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold underline mb-4">Why Choose Us?</h2>
            <p className="text-lg leading-relaxed">
              <ul className="list-disc ml-5 mt-2">
                <li>Wide Selection of Vehicles: From compact cars to luxury sedans.</li>
                <li>Competitive Pricing: Transparent rates with no hidden fees.</li>
                <li>
                  Exceptional Customer Support: Our friendly team is available 24/7 to assist you.
                </li>
              </ul>
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/rent2.jpeg"
              alt="Why Choose Us?"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row gap-10 items-center mt-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="/rent.jpeg"
              alt="Our Commitment to Safety"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-semibold underline mb-4">Our Commitment to Safety</h2>
            <p className="text-lg leading-relaxed">
              Your safety is our top priority. Every vehicle undergoes thorough cleaning and
              sanitization before and after each rental. We also conduct regular maintenance checks
              to keep our fleet road-ready.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
