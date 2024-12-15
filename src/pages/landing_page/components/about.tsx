const About = () => {
  return (
    <div className="px-10 space-y-10">
      <div className="text-lg font-semibold">About us</div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl text-secondary-content">Who We Are</h2>
            <div className="text-justify text-lg" data-aos ="fade-left" data-aos-duration ="1000">
              Welcome to MyCarzRentalUsa, where mobility meets innovation. We’re
              more than just a car rental service—we’re your partner in
              seamless, stress-free travel. Whether you're commuting to work,
              heading out for an adventure, or driving to grow your business, we
              offer reliable vehicles tailored to your unique needs.
            </div>
            <h2 className="text-2xl mt-20">Our Mission</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
            <div className="text-lg text-justify">
              Our mission is simple: to make transportation accessible,
              convenient, and rewarding for everyone. From eliminating credit
              checks to offering cash-back rewards, we believe in making car
              rentals a hassle-free and cost-effective experience.
            </div>
          </div>
          <div className=" aspect-square"  data-aos ="fade-right" data-aos-duration ="1000">
            <img src="/about1.jpeg" alt="" />
          </div>
          {/* </div> */}
        </div>

        {/* <div>
          <div className=" aspect-square">
            <img src="/about1.jpeg" alt="" />
          </div>
        </div> */}
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="hidden md:block lg:block aspect-square">
            <img src="/about1.jpeg" alt="" />
          </div>
          <div>
            <h2 className="text-2xl">Why Choose Us</h2>
            <div className="text-lg text-justify" data-aos ="fade-right" data-aos-duration ="1000">
              At MyCarzRentalUsa, we redefine traditional car rentals with:
              Affordable Solutions: Start your journey with a minimal deposit of
              just $99. Flexible Options: Hourly, daily, or monthly plans to fit
              every lifestyle. Exclusive Rewards: Earn cash back, referral
              bonuses, and even shares as a loyal member. We combine
              cutting-edge technology, sustainability, and customer-first
              policies to bring you a car rental service that adapts to modern
              demands.
            </div>
            <h2 className="text-2xl mt-20">Our Commitment to You</h2>
            <div className="text-lg text-justify">
              We are dedicated to ensuring your experience is smooth, safe, and
              satisfying. From a diverse fleet of vehicles to round-the-clock
              roadside assistance, we go the extra mile so you can drive yours.
              Start driving with confidence today and experience the difference
              that sets us apart.
            </div>
          </div>
        </div>
        <div>
          <div className="md:hidden aspect-square"  data-aos ="fade-left" data-aos-duration ="1000">
            <img src="/about1.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
