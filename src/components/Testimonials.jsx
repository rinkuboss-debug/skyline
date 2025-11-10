import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          ease: "power3.out",
        }
      );
    });
  }, []);

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Property Investor",
      feedback:
        "Premium Real Estate helped me find the best investment plots in Golf View City. Their team is truly professional!",
    },
    {
      name: "Neha Patel",
      role: "Luxury Home Buyer",
      feedback:
        "I loved how transparent and trustworthy their process was. My dream home search ended here!",
    },
    {
      name: "Rahul Verma",
      role: "Apartment Owner",
      feedback:
        "Their support throughout the purchase process was amazing! Highly recommend them for real estate deals.",
    },
  ];

  return (
    <section className="bg-sky-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-600 mb-6">
          What Our Clients Say 💬
        </h2>
        <p className="text-sky-700 mb-12">
          Hear from the people who trusted us to find their dream properties.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-sky-600 hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4">"{item.feedback}"</p>
              <h3 className="text-sky-600 font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
