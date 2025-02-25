import React, { useState } from "react";
import Accordian from "../../util/Accordian";
const SortList = () => {
  return (
    <div className="shadow-md mx-2 h-screen border-1 border-gray-200 rounded">
      <div className="mx-auto text-center mt-5 uppercase font-semibold text-[18px]">List Optimizer</div>
      <div className="border-b border-gray-300 mx-4 pb-3 mt-3">
        <Accordian title="Catagory">
            <ul>
                <li><input type="checkbox"  /> Jwelary</li>
                <li><input type="checkbox"  /> Jwelary</li>
                <li><input type="checkbox"  /> Jwelary</li>
            </ul>
        </Accordian>
      </div>
    </div>
  );
};
export default SortList;
