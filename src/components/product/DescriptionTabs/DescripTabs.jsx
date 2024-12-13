import React, { useState } from "react";

import AboutDescrip from "./AboutDescrip";
import Specification from "./Specification";
import Shipping from "./Shipping";
import Download from "./Download";

const DescripTabs = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div>
      <div className="">
        <div className=" Mycontainer pb-16 flex flex-wrap gap-6 items-center justify-between ">
          <div className="    flex gap-4 flex-wrap  ">
            <button
              type="button"
              className={` uppercase  focus:outline-none text-sm font-semibold ${
                activeTab === "About"
                  ? " text-smallHeader border-b-2 border-smallHeader "
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("About")}
            >
              About
            </button>
            <button
              type="button"
              className={`  uppercase focus:outline-none text-sm font-semibold ${
                activeTab === "Specification"
                  ? " text-smallHeader border-b-2 border-smallHeader"
                  : " text-tabsColor "
              }`}
              onClick={() => setActiveTab("Specification")}
            >
              Specification
            </button>
            <button
              type="button"
              className={` uppercase  focus:outline-none text-sm font-semibold ${
                activeTab === "Shipping & Delivery"
                  ? " text-smallHeader border-b-2 border-smallHeader"
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("Shipping & Delivery")}
            >
              Shipping & Delivery
            </button>
            <button
              type="button"
              className={` uppercase  focus:outline-none text-sm font-semibold ${
                activeTab === "Download"
                  ? " text-smallHeader border-b-2 border-smallHeader"
                  : "text-tabsColor"
              }`}
              onClick={() => setActiveTab("Download")}
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <div>
        <AboutDescrip activeTab={activeTab} />
        <Shipping activeTab={activeTab} />
        <Download activeTab={activeTab} />
        <Specification activeTab={activeTab} />
      </div>
    </div>
  );
};

export default DescripTabs;
