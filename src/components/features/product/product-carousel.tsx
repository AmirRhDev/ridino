"use client";

import Image from "next/image";

import car from "../../../../public/car1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductCarousel() {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={10}
        slidesPerView={1}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <SwiperSlide key={1}>
          <Image
            alt="slide1"
            className="w-full h-full object-cover"
            src={car}
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Image
            alt="slide1"
            className="w-full h-full object-cover"
            src={car}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
