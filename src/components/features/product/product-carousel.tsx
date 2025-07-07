"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductCarousel({ items }: { items: string[] }) {
  return (
    //TODO: add full screen mode and change some styles
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
        {items?.map((url) => (
          <SwiperSlide key={url}>
            <Image
              alt="Car Image"
              className="w-full h-full object-cover"
              src={url}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
