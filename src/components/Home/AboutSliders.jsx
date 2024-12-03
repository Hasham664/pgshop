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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

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
        <div className="absolute  -left-6 top-1/2 transform -translate-y-1/2 z-10">
          <button className="custom-prev bg-smallHeader text-white p-2 rounded-full">
            <IoArrowBackOutline size={24} />
          </button>
        </div>
        <div className="absolute  -right-6 top-1/2 transform -translate-y-1/2 z-10">
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
                spaceBetween: 15, // Space between slides
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 15, // Space between slides
              },
              580: {
                slidesPerView: 3,
                spaceBetween: 10, // Space between slides
              },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 10 },
            }}
          >
            {slide.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="bg-line px-4 w-fit	m-auto py-4 text-center border rounded-md">
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
      </>
    );
};

export default AboutSliders;
