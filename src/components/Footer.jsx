import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-600 text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* 🏢 Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Skyline Estate</h2>
          <p className="text-sm leading-relaxed text-black/90">
            Building dreams, one property at a time.  
            Your trusted real estate partner in Hapur & Noida.
          </p>
        </div>

        {/* 📩 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-black/90">
            📧{" "}
            <a
              href="mailto:ankitchaudhary@askylineestate.in"
              className="hover:underline"
            >
              ankitchaudhary@askylineestate.in
            </a>
          </p>
          <p className="text-black/90 mt-1">
            📞{" "}
            <a href="tel:+918006575965" className="hover:underline">
              +91 80065 75965
            </a>
          </p>
        </div>

        {/* 👤 Founder Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Founder</h3>
          <p className="font-medium text-black">Ankit Choudhary</p>
          <p className="text-sm text-black/80">Founder & Managing Director</p>
        </div>
      </div>

      {/* 📄 Privacy & Terms */}
      <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm border-t border-white/20 pt-4 text-black/90">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} Skyline Estate. All Rights Reserved.
        </p>
        <div className="space-x-4">
          <a
            href="/privacy-policy"
            className="hover:underline hover:text-black"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="/terms-and-conditions"
            className="hover:underline hover:text-black"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
