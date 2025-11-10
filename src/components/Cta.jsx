import React, { useState, useEffect } from "react";

const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Show popup after 2 seconds when user visits
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <div id="contact" className="bg-white-600 text-black py-20 px-6 md:px-16 relative">

      {/* ✅ Popup Lead Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-96 shadow-lg relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-600 text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3 text-sky-600 text-center">
              Get a Free Property Consultation 🏡
            </h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* 🔑 Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-black rounded-lg p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-black rounded-lg p-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-black rounded-lg p-2"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're looking for..."
                className="w-full border border-black rounded-lg p-2"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
              >
                Send Inquiry 🚀
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Normal Contact Section */}
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h2 className="text-4xl font-bold mb-6 text-sky-500">Contact Us</h2>
        <p className="text-lg mb-8">
          Have questions about our properties or want to schedule a visit?
          Fill out the form below, and we’ll get back to you soon.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4 bg-sky-200 p-8 rounded-xl shadow-lg text-black"
        >
          <input
            type="hidden"
            name="access_key"
            value="YOUR_WEB3FORMS_ACCESS_KEY"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-black rounded-lg p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-black rounded-lg p-3"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-black rounded-lg p-3"
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            className="w-full border border-black rounded-lg p-3"
          ></textarea>

          <button
            type="submit"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
