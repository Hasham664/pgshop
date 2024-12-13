import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";
import Clothing from "./Clothing";
import Headwear from "./Headwear";
import Bags from "./Bags";
import Stationery from "./Stationery";
// import Promotional from './Promotional';

const TabsBtns = () => {
  const [activeTab, setActiveTab] = useState("All Product");
  return (
    <div>
      <div className="">
        <div className=" Mycontainer pb-16 flex flex-wrap gap-6 items-center justify-between ">
          <div>
            <h1 className="text-brand text-2xl font-semibold">
              Trending product
            </h1>
          </div>
          <div className="   justify-between flex gap-4 flex-wrap  ">
            <button
              type="button"
              className={` py-1    focus:outline-none text-sm font-semibold ${
                activeTab === "All Product"
                  ? " text-brand border-b-2 border-smallHeader "
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("All Product")}
            >
              All Product
            </button>
            <button
              type="button"
              className={` py-1  focus:outline-none text-sm font-semibold ${
                activeTab === "Clothing"
                  ? " text-brand border-b-2 border-smallHeader"
                  : " text-tabsColor "
              }`}
              onClick={() => setActiveTab("Clothing")}
            >
              Clothing
            </button>
            <button
              type="button"
              className={` py-1  focus:outline-none text-sm font-semibold ${
                activeTab === "Headwear"
                  ? " text-brand border-b-2 border-smallHeader"
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("Headwear")}
            >
              Headwear
            </button>
            <button
              type="button"
              className={` py-1  focus:outline-none text-sm font-semibold ${
                activeTab === "Bags"
                  ? " text-brand border-b-2 border-smallHeader"
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("Bags")}
            >
              Bags
            </button>
            <button
              type="button"
              className={` py-1  focus:outline-none text-sm font-semibold ${
                activeTab === "Stationery"
                  ? " text-brand border-b-2 border-smallHeader"
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("Stationery")}
            >
              Stationery & Office
            </button>
            <Link className="flex items-center gap-2">
              <button className="text-sm font-semibold text-smallHeader">
                Browse All Product
              </button>
              <FaArrowRight className="text-lg  font-semibold text-smallHeader" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <AllProducts activeTab={activeTab} />
        <Clothing activeTab={activeTab} />
        <Headwear activeTab={activeTab} />
        <Bags activeTab={activeTab} />
        <Stationery activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabsBtns;
