import React, { useState } from "react";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import p from "../../assets/p.png";
import reddit from "../../assets/reddit.png";
import youtube from "../../assets/youtube.png";
import insta from "../../assets/insta.png";

import MiniNav from "./MiniNav";

const Navbar = () => {
  const miniNav = [twitter, facebook, p, reddit, youtube, insta];

  return (
    <>
      <div className="bg-smallHeader text-white py-4">
        <div className="Mycontainer flex items-center justify-between flex-wrap gap-4">
          <div className=" flex gap-6 flex-wrap ">
            <p className="text-sm font-light">Welcome to pgshop store.</p>
            <p className="text-sm  font-light">Help Center</p>
            <p className="text-sm  font-light">Order Status</p>
            <p className="text-sm  font-light">C Promo Code</p>
          </div>
          <div className="flex items-center flex-wrap	">
            <div className="flex items-center gap-3  flex-wrap">
              <p className="font-[400] text-xs text-[#FFFFFF]">Follow us:</p>
              {miniNav.map((icon, i) => {
                return (
                  <div key={i} className="">
                    <img src={icon} alt="" className="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <MiniNav />
    </>
  );
};

export default Navbar;
