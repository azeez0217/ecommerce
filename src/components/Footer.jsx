import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare,FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  const navLinkList = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact Us",
      link: "/contact",
    },
    {
      id: 4,
      name: "Products",
      link: "/products",
    },
  ];
  return (
    <div className="max-w-screen-2xl bg-gray-200 h-auto mx-auto shadow-md border-t-1 border-gray-200">
      <div className="flex flex-col px-4 md:px-20 py-7 md:flex-row md:justify-between  ">
        <div className="mt-4 md:mt-0 border-b-2 pb-5 border-blue-800 md:border-0 md:text-left">
          <h6 className="text-[20px] font-semibold md:text-center">
            Quick Links
          </h6>
          <ul className="mt-4 text-gray-700 md:flex md:gap-4 mx-auto">
            {navLinkList.map((navLink, i) => {
              return (
                <Link to={navLink.link} key={navLink.id} className="">
                  <li className="hover:text-red-700 cursor-pointer">
                    {navLink.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="mt-4 md:mt-0 border-b-2 pb-5 border-blue-800 md:border-0 md:mx-auto md:text-center">
          <h6 className="text-[20px] font-semibold">Contact Information</h6>
          <p className="mt-3 md:mt-0">
            Design & Developed by{" "}
            <span className="text-blue-950 font-semibold text-[16px]">
              @shaik Azeez
            </span>
          </p>
          <div className="md:flex md:justify-between md:gap-6">
            <p className="mt-2 md:mt-0">
              Email:
              <span className="text-[14px] text-blue-900">
               &nbsp; skazeez0217@gmail.com
              </span>
            </p>
            <p className="mt-2 md:mt-0">
              Phone:
              <span className="text-[14px] text-blue-900">&nbsp;
                 8247017662</span>
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:mx-auto">
          <h6 className="text-[20px] font-semibold md:text-center">
            Follow Us
          </h6>
          <ul className="flex gap-4 mt-3">
            <li>
              <a href="https://facebook.com"><FaFacebookSquare className="w-6 h-6 text-blue-800"/></a>
            </li>
            <li>
              <a href="https://twitter.com"><FaYoutube className="w-6 h-6 text-blue-800"/></a>
            </li>
            <li>
              <a href="https://instagram.com"><FaTelegramPlane className="w-6 h-6 text-blue-800"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
