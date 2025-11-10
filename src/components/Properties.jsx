import React, { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { cardItems } from "../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
  const swiperRef = useRef(null);

  return (
    <section id="properties" className="section pb-[90px] md:pb-[150px] bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title wrapper */}
        <div className="lg:flex lg:justify-between lg:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 capitalize">
              Popular Properties
            </h2>
            <p className="max-w-[500px] mt-4 text-gray-600">
              Explore our most popular properties — modern design, luxurious
              amenities, and prime locations for your dream lifestyle.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-5 mt-6 lg:mt-0">
            <button className="bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-sky-700 transition-all active:scale-95 prev-btn">
              <RiArrowLeftSLine size={22} />
            </button>
            <button className="bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-sky-700 transition-all active:scale-95 next-btn">
              <RiArrowRightSLine size={22} />
            </button>
          </div>
        </div>

        {/* Swiper Wrapper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          {cardItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                {/* Card Image */}
                <div className="relative h-[250px]">
                  <img
                    src={item.imgURL}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Price Tag */}
                  <span className="absolute top-4 left-4 bg-sky-600 text-white text-sm px-3 py-1 rounded-md">
                    {item.price}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <a
                    href="#"
                    className="block text-xl font-semibold text-gray-800 hover:text-sky-600 transition"
                  >
                    {item.name}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">{item.location}</p>

                  <div className="flex justify-between text-gray-500 mt-4 text-sm border-t pt-3">
                    <p>🛏 {item.bed}</p>
                    <p>🛁 {item.bath}</p>
                    <p>📏 {item.area}</p>
                  </div>

                  {/* View Details Button */}
                  <button className="mt-5 w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition-all active:scale-95">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Properties;
