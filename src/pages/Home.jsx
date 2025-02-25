import React from "react";
import HomeImage from "../assets/store_image.jpeg";

const Home = () => {
  return (
    <div className="max-w-screen-2xl h-[70%] px-5 md:p-20  bg-blue-50 mt-20 md:mt-2 mx-auto">
      <div className=" md:flex justify-between items-center">
        <div className="w-full pt-15 order-2 md:w-1/2 md:order-1 px-5 md:pt-10">
          <h1 className="text-4xl text-blue-800 font-bold uppercase animate-bounce z-[-2]">
            Welcome to Our Store Mart
          </h1>
          <p className="mt-7 text-gray-600 md:pr-6">
          Discover the latest trends and exclusive offers at our online store. Enjoy a seamless shopping experience with fast delivery and unbeatable prices on fashion, electronics, home essentials, and more. Shop now and elevate your lifestyle!
          </p>
          <button className="mt-10 px-6 py-3 cursor-pointer border-2 border-blue-200 text-blue-800 font-bold uppercase rounded hover:border-[2px] hover:border-blue-800 hover:shadow-md hover:shadow-blue-400 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="w-full py-14 order-1 md:w-1/2 md:order-2 md:mt-0">
          <img src={HomeImage} alt="HomeImage" width={500} className="mx-auto rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
