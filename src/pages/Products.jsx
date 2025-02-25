import React from "react";
import SortList from "../components/products/SortList";
import ProductData from "../components/products/ProductData";
const Products = () => {
  return (
    <div className="mt-22 max-w-screen-2xl h-auto mb-4">
      <div className="flex mt-32">
        <div className=" hidden md:block md:w-1/4 ">
          <SortList/>
        </div>
        <div className="md:w-3/4 ">
        <ProductData/>
        </div>
      </div>
    </div>
  );
};
export default Products;
