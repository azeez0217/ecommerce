import React, { useState } from "react";
import { FaChevronDown ,FaChevronUp} from "react-icons/fa6";
const Accordian = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordianToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="w-[90%] flex justify-between py-2 px-4  cursor-pointer"
        onClick={accordianToggle}
      >
       <p className="font-medium text-[18px]">{title}</p> <p className="duration-100">{isOpen ? <FaChevronDown className="w-3 h-3 mt-2"/>:<FaChevronUp className="w-3 h-3 mt-2"/>}</p>
      </button>
      <div
        className={`accordion-content px-4 bg-white transition-max-height duration-200 ease-out text-[16px] font-medium ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
