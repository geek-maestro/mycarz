import Footer from "../../dashboard/components/Footer";

const About = () => {
  return (
    <>
      <div className="px-10 space-y-20 py-10">
        <div className="text-3xl font-semibold text-center text-primary">About Us</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-secondary font-bold">Who We Are</h2>
              <p className="text-lg text-justify" data-aos="fade-left" data-aos-duration="1000">
                Welcome to MyCarzRentalUSA, where mobility meets innovation. We’re more than just a car rental service—we’re your partner in seamless, stress-free travel. Whether you're commuting to work, heading out for an adventure, or driving to grow your business, we offer reliable vehicles tailored to your unique needs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-secondary font-bold mt-10">Our Mission</h2>
              <p className="text-lg text-justify">
                Our mission is simple: to make transportation accessible, convenient, and rewarding for everyone. From eliminating credit checks to offering cash-back rewards, we believe in making car rentals a hassle-free and cost-effective experience.
              </p>
            </div>
          </div>
          <div className="aspect-square" data-aos="fade-right" data-aos-duration="1000">
            <img src="/about1.jpeg" alt="About Us Image" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div className="hidden md:block lg:block aspect-square">
            <img src="/about1.jpeg" alt="About Us Image" className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-secondary font-bold">Why Choose Us</h2>
              <p className="text-lg text-justify" data-aos="fade-right" data-aos-duration="1000">
                At MyCarzRentalUSA, we redefine traditional car rentals with:
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Affordable Solutions:</strong> Start your journey with a minimal deposit of just $99.</li>
                  <li><strong>Flexible Options:</strong> Hourly, daily, or monthly plans to fit every lifestyle.</li>
                  <li><strong>Exclusive Rewards:</strong> Earn cash back, referral bonuses, and even shares as a loyal member.</li>
                </ul>
                We combine cutting-edge technology, sustainability, and customer-first policies to bring you a car rental service that adapts to modern demands.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-secondary font-bold mt-10">Our Commitment to You</h2>
              <p className="text-lg text-justify">
                We are dedicated to ensuring your experience is smooth, safe, and satisfying. From a diverse fleet of vehicles to round-the-clock roadside assistance, we go the extra mile so you can drive with confidence. Start driving today and experience the difference that sets us apart.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-10" data-aos="fade-left" data-aos-duration="1000">
          <img src="/about1.jpeg" alt="About Us Image" className="object-cover w-full h-full rounded-lg shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default About;
