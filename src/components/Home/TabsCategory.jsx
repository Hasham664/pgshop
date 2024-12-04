import React, { useState } from 'react'
import Collection from './Tabs/collection';
import Industry from './Tabs/Industry';
import Deals from './Tabs/Deals';
import Recipients from './Tabs/Recipients';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Promotional from './Promotional';

const TabsCategory = () => {
    const [activeTab, setActiveTab] = useState("collections");
    return (
      <div>
        <div className="bg-bgColor">
          <div className=" Mycontainer pb-16">
            <h1 className="text-5xl text-smallHeader font-bold text-center pt-28">
              Shop by category
            </h1>
            <div className="  mt-20  justify-between flex gap-6 flex-wrap border-b-4 border-borderb  ">
              <button
                type="button"
                className={` py-4 px-4   focus:outline-none text-xl font-normal ${
                  activeTab === "collections"
                    ? "border-b-4 border-smallHeader"
                    : "text-brand"
                }`}
                onClick={() => setActiveTab("collections")}
              >
                Collections
              </button>
              <button
                type="button"
                className={` py-4 px-4  focus:outline-none text-xl font-normal ${
                  activeTab === "industry"
                    ? "border-b-4 border-smallHeader"
                    : "text-brand"
                }`}
                onClick={() => setActiveTab("industry")}
              >
                Industry
              </button>
              <button
                type="button"
                className={` py-4 px-4  focus:outline-none text-xl font-normal ${
                  activeTab === "deals"
                    ? "border-b-4 border-smallHeader"
                    : "text-brand"
                }`}
                onClick={() => setActiveTab("deals")}
              >
                Deals
              </button>
              <button
                type="button"
                className={` py-4 px-4  focus:outline-none text-xl font-normal ${
                  activeTab === "recipients"
                    ? "border-b-4 border-smallHeader"
                    : "text-brand"
                }`}
                onClick={() => setActiveTab("recipients")}
              >
                Recipients
              </button>
            </div>
            <div>
              <Collection activeTab={activeTab} />
              <Industry activeTab={activeTab} />
              <Deals activeTab={activeTab} />
              <Recipients activeTab={activeTab} />
            </div>

            <Link
              to={"/category"}
              className="flex items-center rounded text-base font-bold gap-2 justify-center mt-10 bg-smallHeader text-white w-[200px] m-auto h-[56px]  "
            >
              <button className="uppercase">view morw</button>
              <IoIosArrowRoundForward className="text-3xl font-bold" />
            </Link>
          </div>
        </div>
          <Promotional />
      </div>
    );
}

export default TabsCategory