import React, { useState } from "react";
import { IoMenu, IoCloseSharp, IoCartOutline,IoStorefront  } from "react-icons/io5";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Logo from '../assets/logo.jpg';
const Navigation = () => {
  const [show, setShow] = useState(false);

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
    <>
    <div className=" max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl shadow-lg shadow-gray-200 text-blue-950 text-[16px] top-0 bottom-0 h-20 w-full bg-white z-10 fixed">
        <div className="flex justify-between items-center h-20 px-5 md:px-15 mx-auto">
          <div className=" text-center cursor-pointer">
           <IoStorefront className="w-8 h-8 mx-auto"/>
            <span className="font-semibold text-[16px]">STORE MART</span>
          </div>
          <div className="mx-auto">
            <ul className="hidden md:flex gap-4 md:display-block">
              {navLinkList.map((navLink, i) => {
                return (
                  <Link to={navLink.link} key={navLink.id}>
                    <li className="hover:text-red-700 cursor-pointer hover:scale-105 duraion-150">
                      {navLink.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="relative">
                <span className="absolute mt-[-10px] ml-[10px] bg-green-600 text-white rounded-2xl h-5 w-5 text-[14px] text-center items-center">
                  0
                </span>
                <IoCartOutline className="w-6 h-6" />
              </div>
              <div className=" md:hidden">
                {show ? (
                  <IoCloseSharp
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <IoMenu
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {show && (
          <div className="bg-white w-[100%]">
            <ul className=" md:hidden flex flex-col fixed h-screen items-center w-full justify-center space-y-3 text-xl animate-slideInDiagonal bg-white">
              {navLinkList.map((navLink, i) => {
                return (
                  <Link to={navLink.link} key={navLink.id}>
                    <li className="hover:text-red-700 cursor-pointer text-[16px]">
                      {navLink.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default Navigation;
