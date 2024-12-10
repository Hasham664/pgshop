import React from "react";
import Hero from "../components/Home/Hero";

import Sale from "../components/Home/Sales";
import Brands from "../components/Home/Brands";
import LatestDeals from "../components/Home/LatestDeals";
import TabsCategory from "../components/Home/TabsCategory";
import Promotional from "../components/Home/Promotional";
import TabsButtons from "../components/Home/ProducsTabs/TabsButtons";


const Home = () => {
  return (
    <div>
      <Hero />
      {/* <AboutSliders /> */}``
      <Brands />
      <div className="mt-28">
        <LatestDeals />
      </div>
      <TabsCategory />
      <Promotional />
      <div className="lg:mt-60 md:mt-60 mt-72">
        <Sale />
      </div>
      <TabsButtons/> 
    </div>
  );
};

export default Home;
