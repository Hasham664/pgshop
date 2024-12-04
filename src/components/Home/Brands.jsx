import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import slide1 from "../../assets/slide-1.png";
import slide2 from "../../assets/slide-2.png";
import slide3 from "../../assets/slide-3.png";
import slide4 from "../../assets/slide-4.png";
import slide5 from "../../assets/slide-5.png";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import LatestDeals from "./LatestDeals";

const Brands = () => {
  const slide = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide3,
    slide1,
    slide2,
    slide3,
    slide4,
    slide1,
  ];

  return (
    <>
      <div className="Mycontainer relative ">
        <div>
          <h1 className="text-brand text-center text-3xl pb-10 font-bold">
            Our Trusted Brands
          </h1>
        </div>
        <div className="absolute  lg:-left-6 md:-left-6 -left-4 top-[72%] transform -translate-y-1/2 z-10">
          <button className="custom-prev2 bg-smallHeader text-white p-2 rounded-full">
            <IoArrowBackOutline size={24} />
          </button>
        </div>
        <div className="absolute  lg:-right-6 md:-right-6 -right-4 top-[72%] transform -translate-y-1/2 z-10">
          <button className="custom-next2 bg-smallHeader text-white p-2 rounded-full">
            <IoMdArrowForward size={24} />
          </button>
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
            1024: { slidesPerView: 5, spaceBetween: 10 },
          }}
        >
          {slide.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className="bg-line    px-3   py-3 text-center border rounded-sm shadow-md">
                <img
                  src={item}
                  alt={item}
                  className=" 	lg:h-[90px] md:h-[90px] w-full m-auto items-center    flex justify-center "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-20">
        <LatestDeals />
      </div>
    </>
  );
};

export default Brands;
