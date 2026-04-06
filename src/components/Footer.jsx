import React from "react";
import WorldClock from "./WorldClock.jsx";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-black to-white pt-[3%] pb-[7%]">
      <div className="flex justify-between text-center text-white font-brunoAce xs:text-6xs sm:text-xl md:text-2xl lg:text-3xl flex-col sm:flex-row md:flex-row lg:flex-row px-[5.7%] py-[5%]">
        <p>somebody@gmail.com</p>
        <p>+123456789</p>
      </div>

    <div>
      <WorldClock />
      </div>
    </div>
  );
}

export default Footer;
