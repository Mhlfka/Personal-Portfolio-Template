import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import React from "react";

function Dropdown({ expDropDown }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white p-4 flex flex-col">
      <div className="flex justify-between border-b border-white ">
        <h2 className="text-white xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-brunoAce">
          {expDropDown.companyName}
        </h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaChevronUp className="text-5xl" />
          ) : (
            <FaChevronDown className="text-5xl" />
          )}
        </button>
      </div>

      <div className="flex py-[20px]">
        <div className="w-[55%] px-[50px] ">
          {isOpen && <img src={expDropDown.image} alt="test" />}
        </div>
        <div className="flex flex-col gap-5">
          <div>
            {isOpen && (
              <p className="text-4xl font-brunoAce">{expDropDown.role}</p>
            )}
          </div>
          <div>
            {isOpen && (
              <p className="text-4xl font-brunoAce w-[780px]">
                {expDropDown.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
