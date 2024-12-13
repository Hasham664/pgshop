import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import p from "../../assets/p.png";
import reddit from "../../assets/reddit.png";
import youtube from "../../assets/youtube.png";
import insta from "../../assets/insta.png";
import visa from '../../assets/visa.png'
import paypal from "../../assets/paypal.png";
import amex from "../../assets/amex.png";
import gpay from "../../assets/gpay.png";
import discover from "../../assets/discover.png";
import colors from "../../assets/colors.png";
import apple from "../../assets/apple.png";
import pay from "../../assets/pay.png";

const Footer = () => {
  const miniNav = [twitter, facebook, p, reddit, youtube, insta];

  const foter = [
    {
      tag: "Game",
    },
    {
      tag: "iPhone",
    },
    {
      tag: "TV",
    },

    {
      tag: "Asus Laptops",
    },
    {
      tag: "Macbook",
    },
    {
      tag: "SSD",
    },
    {
      tag: "Graphics Card",
    },
    {
      tag: "Power Bank",
    },
    {
      tag: "Smart TV",
    },
    {
      tag: "Speaker",
    },
    {
      tag: "Tablet",
    },
    {
      tag: "Microwave",
    },
    {
      tag: "Samsung",
    },
  ];
  const qucik = [
    {
      name: "promotion",
    },
    {
      name: "clothing",
    },
    {
      name: "headwear",
    },
    {
      name: "Return Gifts",
    },
    {
      name: "24 hour production",
    },
    {
      name: "Sale",
    },
    {
      name: "About Us",
    },
    ];
    const paymethod = [
        visa,
        paypal,
        amex,
        gpay,
        discover,
        colors,
        apple,
        pay
    ]
  return (
    <div className="bg-smallHeader mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 Mycontainer pt-12 lg:space-x-10 md:space-x-0 gap-y-8">
        <div className="w-fit">
          <h1 className="text-white uppercase text-3xl font-bold ">pgshop</h1>
          <p className="text-footer pt-4 text-sm max-w-[300px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </p>
          <p className="text-footer mt-6 text-sm hover:text-white ">
            Customer Supports:
          </p>
          <h3 className="text-lg text-white font-medium underline mt-1">
            +61 466 468 528
          </h3>
        </div>
        <div className="w-fit">
          <h1 className="text-white uppercase text-base font-medium">
            Top Category
          </h1>
          <p className="text-footer pt-4 text-sm font-medium max-w-36 hover:text-white ">
            Shirts & Tops Sweaters & Hoodies
          </p>
          <div className="flex items-center gap-2 text-white mt-3">
            <p>Browse All Product</p>
            <IoMdArrowDropright className="text-2xl" />
          </div>
        </div>
        <div className="w-fit">
          <h1 className="text-white uppercase text-base font-medium">
            Quick links
          </h1>
          <div className="mt-1">
            {qucik.map((link, ind) => {
              return (
                <div key={ind}>
                  <p className="pt-3 text-footer text-sm font-medium">
                    {link.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-fit">
          <h1 className="text-white uppercase text-base font-medium ">
            Popular Tag
          </h1>
          <div className="flex gap-3 mt-5 flex-wrap">
            {foter.map((item, ind) => {
              return (
                <div key={ind} className=" text-line">
                  <p className="border border-footer px-2 py-1 text-sm font-medium">
                    {item.tag}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
      {/* SIGNUP  */}
      <div className="Mycontainer pb-12 md:pt-8 lg:pt-0 pt-8">
        <h1 className="text-xl text-white">
          Sign Up for 15% Off Your First Order
        </h1>
        <div className="lg:flex md:flex block items-center text-white gap-6 mt-6">
          <div className=" lg:w-[40%] py-2 lg:px-4 md::px-4 sm:px-4 px-2 bg-white flex items-center ">
            <input
              type="text"
              placeholder="Email address"
              className="bg-transparent outline-none w-full text-black"
            />
            <div className="flex items-center lg:px-6 md:px-6 px-3 py-3 justify-center gap-2 bg-smallHeader text-white">
              <button className="uppercase text-sm ">Subscribe</button>
              <FaArrowRight />
            </div>
          </div>
          <div className="">
            <p className="font-[400] text-xs text-[#FFFFFF] lg:pt-0 md:pt-0 pt-8">
              Follow us:
            </p>
            <div className="flex gap-5">
              {miniNav.map((icon, i) => {
                return (
                  <div key={i} className="mt-3">
                    <img src={icon} alt="" className="w-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* POLICY  */}
      <div className="Mycontainer text-footer flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between gap-6 ">
        <div>
          <p className="underline text-sm font-normal ">Privacy Policy</p>
          <p className="pt-2 text-sm font-normal">
            ©2024 National Pen Company. All rights reserved. Pens.com and its
            logo are trademarks of the National Pen Company.{" "}
          </p>
          <p className="pt-1 text-sm font-normal">
            © Copyright 2024 Premium Goods . All rights reserved | Developed
            By DEVSRANK
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {paymethod.map((pay, ind) => {
            return (
              <div key={ind}>
                <img src={pay} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
