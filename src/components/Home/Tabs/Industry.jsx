import React from "react";
import collection1 from "../../../assets/collection1.png";
import collection2 from "../../../assets/collection2.png";
import collection3 from "../../../assets/collection3.png";
import collection4 from "../../../assets/collection4.png";

const Industry = ({ activeTab }) => {
  const tabData = [
    {
      pic: collection1,
      description: "Holiday Gift Guide2",
    },
    {
      pic: collection2,
      description: "Alpha Pens2",
    },
    {
      pic: collection3,
      description: "Full Color2",
    },
    {
      pic: collection4,
      description: "Design Wrap2",
    },
  ];
  return (
    <div className="">
      {activeTab === "industry" && (
        <div className="flex items-center mt-10 lg:flex-nowrap md:flex-wrap flex-wrap lg:justify-between md:justify-around justify-center text-center gap-6 ">
          {tabData.map((item, ind) => {
            return (
              <div key={ind} className="bg-white p-5">
                <img src={item.pic} alt="" />
                <p className="text-brand pt-3 text-lg font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Industry;
