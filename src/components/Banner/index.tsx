"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const Banner = () => {
  return (
    <div className="w-full h-[288px] overflow-hidden">
      <Swiper
        navigation
        modules={[Navigation]}
        className="h-full "
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="/banner01.jpeg"
              alt="Banner 1"
              className="h-full w-full object-fill"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="/banner02.jpeg"
              alt="Banner 2"
              className="h-full w-full object-fill"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="/banner03.jpeg"
              alt="Banner 3"
              className="h-full w-full object-fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
