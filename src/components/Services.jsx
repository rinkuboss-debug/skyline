import React from "react";
import { ServicesCardItem } from "../constant/data";

const Services = () => {
  return (
    <section id="services" className="py-[90px] md:py-[150px] bg-gray-100">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sky-600 font-medium uppercase tracking-wider">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Services We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-sm md:text-base">
            We provide top-notch real estate services designed to help you find
            your perfect property. Explore our offerings below.
          </p>
        </div>

        {/* Card Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {ServicesCardItem.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="bg-sky-100 rounded-full p-5 mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
