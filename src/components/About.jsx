import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-[90px] md:py-[150px] bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div
          className="w-full h-[350px] md:h-[500px] bg-gray-200 rounded-2xl shadow-md flex items-center justify-center overflow-hidden"
          data-aos="fade-right"
        >
          <p className="text-gray-500 italic text-lg">
            (Add your about image here)
          </p>
        </div>

        {/* Content Section */}
        <div data-aos="fade-left">
          <p className="text-sky-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-gray-800 leading-tight">
            Building Dreams, Delivering Trust – Your Real Estate Partner for
            Life
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Welcome to <strong>Skyline Real Estate</strong> we believe that
            finding your dream home should be an experience filled with trust,
            comfort, and confidence. Founded and led by <span className="text-shadow-black font-bold">Mr. Ankit Choudhary</span>,
            Skyline has grown into a symbol of excellence in the real estate
            world — known for transparency, quality, and long-lasting
            relationships with clients. Under Ankit’s leadership, our team works
            with one mission — to turn your property dreams into reality.
            Whether it’s luxurious homes, premium plots, or eco-friendly
            projects, we ensure every property reflects elegance, security, and
            smart investment value. With years of experience and hundreds of
            happy clients, Skyline continues to redefine what “premium living”
            truly means — combining modern architecture, sustainable spaces, and
            a promise of trust that stands tall like our name.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4 text-base md:text-lg">
            Whether you're a first-time buyer, investor, or looking for luxury
            living, we’ve got the right property for you. From eco-friendly
            apartments and premium villas to farmhouses and investment plots, we
            ensure every square foot you own is backed by legal clarity,
            comfort, and long-term value.
          </p>

          {/* Why We Are Best */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Why We’re the Best?
            </h3>
            <ul className="grid gap-6 sm:grid-cols-2">
              <li
                className="p-5 bg-white shadow rounded-xl hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
              >
                <h4 className="font-semibold text-lg text-sky-700 mb-2">
                  🏆 Trusted by Hundreds
                </h4>
                <p className="text-gray-600 text-sm">
                  Our clients trust us because we prioritize honesty, clarity,
                  and a commitment to long-term satisfaction.
                </p>
              </li>
              <li
                className="p-5 bg-white shadow rounded-xl hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h4 className="font-semibold text-lg text-sky-700 mb-2">
                  🏗️ Quality Construction
                </h4>
                <p className="text-gray-600 text-sm">
                  Every property undergoes strict quality checks to ensure
                  structural strength, safety, and durability.
                </p>
              </li>
              <li
                className="p-5 bg-white shadow rounded-xl hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h4 className="font-semibold text-lg text-sky-700 mb-2">
                  💼 Expert Guidance
                </h4>
                <p className="text-gray-600 text-sm">
                  Our real estate professionals guide you through every step —
                  from paperwork to possession.
                </p>
              </li>
              <li
                className="p-5 bg-white shadow rounded-xl hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <h4 className="font-semibold text-lg text-sky-700 mb-2">
                  🌱 Eco-Friendly Approach
                </h4>
                <p className="text-gray-600 text-sm">
                  We promote sustainable living through green spaces, energy
                  efficiency, and responsible construction.
                </p>
              </li>
            </ul>
          </div>

          {/* Counters Section */}
          <div
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
            data-aos="fade-up"
          >
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-4xl font-bold text-sky-700 mb-1 counter">
                10+
              </h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-4xl font-bold text-sky-700 mb-1 counter">
                500+
              </h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-4xl font-bold text-sky-700 mb-1 counter">
                800+
              </h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-4xl font-bold text-sky-700 mb-1 counter">
                1000+
              </h3>
              <p className="text-gray-600 font-medium">Properties Sold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Long SEO Content (hidden under read more for UX) */}
      <div
        className="container mx-auto px-5 mt-16 text-gray-700 leading-relaxed text-base md:text-lg"
        data-aos="fade-up"
      >
        <span>
          Welcome to <strong>Skyline Real Estate</strong> — where innovation
          meets trust. We are a modern real estate company dedicated to helping
          individuals, families, and investors find their perfect property,
          whether it's a luxurious villa, an eco-friendly apartment, or a
          spacious farmland property. Our vision is not just to sell homes, but
          to create lasting relationships built on honesty, reliability, and
          excellence.
        </span>
        <br />
        <br />
        <span>
          At Skyline Real Estate, we understand that buying a property is one of
          the biggest financial decisions in life. That’s why our experienced
          team focuses on transparency, guidance, and personalized service. From
          the first consultation to the final paperwork, we ensure every step of
          your journey is smooth and secure. Our goal is to make real estate
          accessible, simplified, and enjoyable — no matter who you are or where
          you’re from.
        </span>
        <br />
        <br />
        <span>
          Over the years, our company has established itself as one of the most
          trusted names in the property market. We operate with a simple
          philosophy:
          <em>
            {" "}
            "Your home should reflect your dreams, not your limitations."
          </em>
          Whether you’re a first-time buyer searching for the perfect starter
          home or an investor looking for profitable real estate opportunities,
          our experts will guide you with market insights, legal assistance, and
          financing options to match your goals.
        </span>
        <br />
        <br />
        <span>
          Our properties are located in some of the most desirable areas —
          combining comfort, convenience, and community. From modern urban
          apartments surrounded by amenities to peaceful countryside plots with
          lush greenery, we bring you the best of both worlds. Every property we
          deal in is carefully verified for legal clarity, construction quality,
          and long-term value. Because for us, every square foot we sell is a
          promise of safety, growth, and satisfaction.
        </span>
        <br />
        <br />
        <span>
          We are also pioneers in adopting sustainable and eco-friendly real
          estate practices. Our developments often include energy-efficient
          designs, rainwater harvesting systems, and ample green spaces. We
          believe that modern living should not come at the cost of the
          environment. Hence, our motto —{" "}
          <strong>"Luxury with Responsibility."</strong>
        </span>
        <br />
        <br />
        <span>
          Our dedicated customer support team is always available to answer
          questions, assist with documentation, and help you find a property
          that fits your budget and lifestyle. From virtual property tours to
          on-site visits, our process is seamless, transparent, and focused on
          your satisfaction.
        </span>
        <br />
        <br />
        <span>
          Beyond selling properties, Skyline Real Estate is about creating
          communities. We envision neighborhoods where people live with pride,
          children play safely, and families thrive together. Every project we
          undertake is built with precision, attention to detail, and a touch of
          emotion — because we understand that a home is not just a structure,
          it’s a story waiting to be written.
        </span>
        <br />
        <br />
        <span>
          With years of experience, a team of passionate professionals, and a
          strong network of builders, architects, and legal experts, Skyline
          Real Estate continues to set benchmarks in the industry. Our
          reputation is built on word-of-mouth recommendations and the smiles of
          satisfied clients who found their dream properties through us.
        </span>
        <br />
        <br />
        <span>
          We invite you to explore our world of real estate possibilities — from
          luxurious villas and apartments to profitable investment plots and
          farmlands. Let us guide you toward a better tomorrow. Because with
          Skyline Real Estate, you’re not just buying property — you’re
          investing in a future of comfort, peace, and prosperity.
        </span>
        <br />
        <br />
        <span>
          <strong>Our Mission:</strong> To simplify property buying and selling
          by combining technology, transparency, and trust — making the process
          smarter, faster, and stress-free for every client.
        </span>
        <br />
        <br />
        <span>
          <strong>Our Vision:</strong> To redefine real estate through
          integrity, innovation, and community building. We dream of a world
          where every person owns not just a house, but a home filled with
          memories and meaning.
        </span>
        <br />
        <br />
        <span>
          Join hands with Skyline Real Estate today — and let’s turn your dreams
          into addresses.
        </span>
        <p>
          At Skyline Real Estate, our mission goes beyond selling homes. We
          focus on empowering people to make confident property decisions. Our
          services include personalized consultation, legal support, and
          post-sale assistance. With each project, we bring innovation,
          commitment, and a promise of satisfaction. Our aim is to redefine
          urban living by blending technology with tradition and creating
          communities that inspire.
        </p>
        <p className="mt-5">
          Our team of experts brings together architects, designers, and legal
          professionals who work hand-in-hand to deliver the best. We take pride
          in being the real estate company people recommend to their friends and
          family. Every smile we earn adds strength to our foundation — built on
          integrity, quality, and trust.
        </p>
      </div>
    </section>
  );
};

export default About;
