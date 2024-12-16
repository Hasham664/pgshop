import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import deal1 from "../../assets/shirt2.png";
import deal2 from "../../assets/cap2.png";
import deal3 from "../../assets/deal1.png";
import deal4 from "../../assets/deal2.png";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    img: deal1,
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
  },
  {
    id: 2,
    img: deal2,
    name: "Custom Caps",
    code: "Code: CB010",
    price: "From $2.00 to $6.00",
  },
  {
    id: 3,
    img: deal3,
    name: "Custom Mugs",
    code: "Code: CB011",
    price: "From $3.00 to $7.00",
  },
  {
    id: 4,
    img: deal4,
    name: "Custom Bags",
    code: "Code: CB012",
    price: "From $4.00 to $8.00",
  },
  {
    id: 5,
    img: deal1,
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
  },
  {
    id: 6,
    img: deal2,
    name: "Custom Caps",
    code: "Code: CB010",
    price: "From $2.00 to $6.00",
  },
  {
    id: 7,
    img: deal3,
    name: "Custom Mugs",
    code: "Code: CB011",
    price: "From $3.00 to $7.00",
  },
  {
    id: 8,
    img: deal4,
    name: "Custom Bags",
    code: "Code: CB012",
    price: "From $4.00 to $8.00",
  },
];
const slide = [deal4, deal4, deal4, deal4, deal4, deal4, deal4];
const quantity = [
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
  {
    sell: "50+",
    price: "$9.20 each",
    img: <FaCheck />,
  },
 
  {
    sell: "Larger Order?",
    price: "Contact us now",
  },
];
const checks = [
  {
    icon: <FaCheck />,
    desc: "Colour:White",
  },
  {
    icon: <FaCheck />,
    desc: "Print Method:Screen Print -Top - 200mm x 200mm | Bottom - 350mm x 350mm.",
  },
  {
    icon: <FaCheck />,
    desc: "Logo Colour:1 Colour Print",
  },
  {
    icon: <FaCheck />,
    desc: "Quantity:50",
  },
  {
    icon: <FaCheck />,
    desc: "Setup Charge: FREE",
  },
  {
    icon: <FaCheck />,
    desc: "Freight Charge: FREE",
  },
];
const ProductDetails = () => {
 
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <p className="text-center text-5xl text-red-600 pt-8">
        Product not found!
      </p>
    );
  }
  return (
    <div className="Mycontainer ">
     

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[28%_45%_24%] gap-6 mt-20">
        {/* 1st culmn  */}
        <div>
          <div className="border mb-4 border-border2 ">
            <img
              src={product.img}
              alt={product.name}
              className="p-6 rounded-md w-full"
            />
          </div>

          <Swiper
            navigation={{
              prevEl: ".custom-prev2",
              nextEl: ".custom-next2",
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              580: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: { slidesPerView: 4, spaceBetween: 0 },
            }}
          >
            <div className="absolute   left-0   top-[47%] transform -translate-y-1/2 z-10">
              <button className="custom-prev2 bg-smallHeader text-white lg:p-2 md:p-2 p-1 rounded-full">
                <IoArrowBackOutline className="lg:text-xl md:text-2xl text-lg" />
              </button>
            </div>
            <div className="absolute  right-0  top-[47%]  transform -translate-y-1/2 z-10">
              <button className="custom-next2 bg-smallHeader text-white lg:p-2 md:p-2 p-1 rounded-full">
                <IoMdArrowForward className="lg:text-xl md:text-2xl text-lg" />
              </button>
            </div>
            {slide.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="bg-line px-3 py-3 flex justify-center text-center ">
                  <img src={item} alt={item} className="w-full " />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 2nd column  */}
        <div>
          <div className="flex items-center mb-1">
            <span className="text-smallHeader text-2xl">★★★★★</span>
            <p className="ml-2 text-gray-600">
              4.7 Star Rating (1767 User Feedback)
            </p>
          </div>
          <h2 className="text-xl font-normal">{product.name}</h2>
          <div className="flex items-center justify-between border-b-2 mt-3 pb-4">
            <p className="text-border mt-2">{product.code}</p>
            <p className=" text-smallHeader font-bold">
              <span className="text-stock font-normal"> Availability:</span> In
              Stock
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <p className="font-medium mt-6">Color:</p>
            <div className="flex gap-2 mt-2">
              {[
                "#000000",
                "#FF0000",
                "#00FF00",
                "#0000FF",
                "#FFFF00",
                "#FF00FF",
                "#00FFFF",
              ].map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full border cursor-pointer"
                ></div>
              ))}
            </div>
          </div>

          {/* Dropdowns */}
          <div className="mb-4">
            <label htmlFor="print-method" className="block font-medium mb-2">
              Print Method:
            </label>
            <select
              id="print-method"
              className="w-full px-2 py-4 outline-none border  rounded-md"
            >
              <option>
                Screen Print - Top - 200mm x 200mm | Bottom - 350mm x 350mm.
              </option>
              <option>
                Heat Transfer - Top: 150mm x 150mm | Bottom: 300mm x 300mm
              </option>
            </select>
          </div>

          <div className="mb-4 ">
            <label htmlFor="logo-color" className="block font-medium pt-3 mb-2">
              Logo Colour:
            </label>
            <select
              id="logo-color"
              className="w-full px-2 py-4 outline-none border   rounded-md"
            >
              <option>1 Colour Print</option>
              <option>2 Colour Print</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div>
            <p className="font-medium mb-2 mt-8 text-sm  ">Quantity (50):</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {quantity.map((item, i) => {
                const isLastIndex = i === quantity.length - 1;
                return (
                  <div
                    className={`flex ${
                      isLastIndex
                        ? "w-[49%] text-center flex justify-center px-4 py-4"
                        : "items-end gap-2 px-3 py-3"
                    } border border-smallHeader`}
                    key={i}
                  >
                    {!isLastIndex && (
                      <div className="bg-smallHeader p-1 rounded-[50%]">
                        <p className="text-white text-sm font-bold">
                          {item.img}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-center">{item.sell}</p>
                      <p className="text-sm">{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-6 mt-6">
            <div className="border border-smallHeader py-3 rounded-md">
              <div className="flex items-center justify-between px-6 gap-2">
                <button className="text-2xl">-</button>
                <p>01</p>
                <button className="text-2xl">+</button>
              </div>
            </div>
          </div>

          {/* Drag and Drop */}
          <div className="mb-6 border-2 bg-dots border-dashed border-smallHeader p-6 text-center">
            <img src="/drag.png" alt="" className="flex m-auto " />
            <p className="font-medium text-lg text-smallHeader mt-4 mb-2">
              Drag & drop files or Browse
            </p>
            <p className="text-smallHeader max-w-[385px] m-auto text-sm">
              Supported formats: AI, EPS, SVG, PDF, JPG, JPEG, PNG. Max file
              size: 16 MB
            </p>
          </div>

          <div className="flex items-center rounded-sm gap-3 px-2 py-3 bg-smallHeader text-white w-full justify-center cursor-pointer">
            <button className="uppercase text-sm">Add to cart</button>
            <IoCartOutline className="text-xl" />
          </div>
        </div>

        {/* 3rd column  */}
        <div className="">
          <div className="bg-perUnit border border-border px-6 py-5">
            <p className="  text-xl text-smallHeader font-bold mb-4">
              {product.price}
            </p>

            <div className="bg-smallHeader text-white  py-2 gap-2 flex items-center justify-center">
              <GiMoneyStack className="text-xl" />
              <button className="text-sm">Get Express Quote</button>
            </div>
            <div className="bg-buy text-white py-2 gap-2 mt-2 flex items-center justify-center">
              <FaRegMoneyBillAlt className="text-xl" />
              <button className="text-sm">BUY 1 SAMPLE</button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-black">
                Est Delivery Date:Thu, 12 Dec
              </p>
              <p className=" pt-2 text-xs text-black">
                $6.34 (Non-Branded sample) + $10.00 delivery
              </p>
            </div>
            <div className="mt-2 mb-4 pb-4 border-b">
              {checks.map((icon, i) => {
                return (
                  <div key={i} className="flex items-start gap-2 pt-3 ">
                    <p className="text-white bg-gren p-1 rounded-[50%] text-xs ">
                      {icon.icon}
                    </p>
                    <p className="text-sm text-border">{icon.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs">See our 87 reviews on</p>
              <img src="/star.png" alt="" />
            </div>
          </div>

          <div className="bg-perUnit border border-border py-5 mt-0.5">
            <button className="bg-smallHeader py-3 text-white w-full text-sm">
              We'll Email You A Quote
            </button>
            <div className="px-6 mt-7">
              <input
                type="text"
                placeholder="your name"
                className="w-full p-3  rounded shadow shadow-shadow bg-line outline-none "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3  rounded shadow shadow-shadow mt-2 outline-none"
              />
              <input
                type="email"
                placeholder="ph#"
                className="w-full p-3  rounded shadow shadow-shadow mt-2 outline-none"
              />
              <input
                type="text"
                placeholder="Delivery state"
                className="w-full p-3  rounded shadow shadow-shadow mt-2 outline-none"
              />

              <div>
                <p className="pt-6 text-xs">Logo Artworks</p>
                <div className="text-center mt-4 shadow shadow-shadow bg-line py-7 px-5 border border-smallHeader">
                  <img
                    src="/drag.png"
                    alt=""
                    className="flex  m-auto text-smallHeader"
                  />
                  <p className="pt-4 text-xs">Drop files here or</p>
                  <button className="bg-smallHeader py-3 w-full text-white uppercase mt-4 rounded text-sm font-bold">
                    select file
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs pt-3">
                  Accepted file types: ai, eps, svg, pdf, jpg, jpeg, png, Max.
                  file size: 16 MB.
                </p>
                <textarea
                  name=""
                  placeholder="comment"
                  id=""
                 
                  className=" mt-4 w-full outline-none h-36 px-4 py-3 shadow shadow-shadow bg-line border border-smallHeader"
                ></textarea>
              </div>

              <div className="flex items-center py-4 px-3 mt-3 mb-5 border border-border gap-2">
                <input type="checkbox" id="not-robot" className="w-4 h-4" />
                <label htmlFor="not-robot" className="text-sm">
                  I'm not a robot
                </label>
              </div>

              <button className="w-full py-3 bg-smallHeader text-white rounded-md font-medium">
                GET YOUR QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
