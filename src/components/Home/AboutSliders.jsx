import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import cap from "../../assets/cap.png";
import mug from "../../assets/mug.png";
import bag from "../../assets/bag.png";
import trouser from "../../assets/trouser.png";
import shirt from "../../assets/shirt.png";
import apparel from "../../assets/apparel.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Brands from "./Brands";

const AboutSliders = () => {
  const slide = [
    { pic: cap, name: "cap" },
    { pic: mug, name: "Travel mug" },
    { pic: bag, name: "bag" },
    { pic: trouser, name: "trousers" },
    { pic: shirt, name: "t shirts" },
    { pic: apparel, name: "apparel" },
    { pic: apparel, name: "apparel" },
    { pic: shirt, name: "t shirts" },
    { pic: trouser, name: "trousers" },
  ];

    return (
      <>
        <div className="Mycontainer relative">
          <div className="absolute  lg:-left-6 md:-left-6 -left-3 top-1/2 transform -translate-y-1/2 z-10">
            <button className="custom-prev bg-smallHeader text-white p-2 rounded-full">
              <IoArrowBackOutline size={24} />
            </button>
          </div>
          <div className="absolute  lg:-right-6 md:-right-6 -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <button className="custom-next bg-smallHeader text-white p-2 rounded-full">
              <IoMdArrowForward size={24} />
            </button>
          </div>

          <Swiper
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              580: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 10 },
            }}
          >
            {slide.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="bg-line px-4 w-fit	m-auto py-4 text-center border rounded-sm">
                  <img
                    src={item.pic}
                    alt={item.name}
                    className="lg:w-full md:w-full"
                  />
                  <p className="pt-3">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute right-[0%] left-[0%] mt-16 ">
          <Brands />
        </div>
      </>
    );
};

export default AboutSliders;
