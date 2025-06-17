"use client";

import { Button } from "@/components/shadcnUi/button";

import Image from "next/image";
import car from "../../../../public/car1.jpg";

import { Copy, Heart, MapPin, Phone } from "lucide-react";
import TomanIcon from "@/components/icons/tomanIcon";
import CarKilometerIcon from "@/components/icons/carKilometerIcon";
import GasIcon from "@/components/icons/gasIcon";
import GearBoxIcon from "@/components/icons/gearBoxIcon";
import CarBodyIcon from "@/components/icons/carBodyIcon";
import ColorBrushIcon from "@/components/icons/colorBrushIcon";
import CarChairIcon from "@/components/icons/carChairIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CarDetails() {
  return (
    <div className="grid grid-cols-11 gap-4">
      <div className="col-span-7 flex flex-col gap-1">
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

        <div className="flex flex-col mt-2 pb-3 border-b border-foreground/10">
          <h3 className="font-semibold text-foreground text-lg">توضیحات</h3>
          <p className="text-foreground/80">
            فروش فوری زیر قیمت بازار خشک مدارک آماده انتقال سند آزاد گارانتی
            فعال تحویل فوری لطفا فقط تماس بگیرید عرشیا نادری
          </p>
        </div>

        <div className="flex flex-col pt-3 gap-3">
          <h3 className="font-semibold text-foreground text-lg">مشخصات فنی</h3>

          <div className="grid grid-cols-4 gap-y-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground/80 text-sm">
                حجم موتور
              </p>
              <span className="font-semibold text-foreground text-xl">
                1.6 لیتر
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground/80 text-sm">
                حجم موتور
              </p>
              <span className="font-semibold text-foreground text-xl">
                7.5 لیتر در صد کیلومتر
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*fix sticky later*/}
      <div className="col-span-4 flex flex-col gap-1 p-1 h-min sticky top-[80px]">
        <div className="flex justify-between items-center gap-3">
          <h1 className="font-semibold text-foreground text-xl">پژو، پارس</h1>

          <div className="flex items-center gap-3.5">
            <button className="cursor-pointer group">
              <Copy
                size={25}
                className="text-foreground/60 group-hover:text-foreground/80 duration-75"
              />
            </button>
            <button className="cursor-pointer group">
              <Heart
                size={25}
                className="text-foreground/60 group-hover:text-foreground/80 duration-75"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center text-foreground/90 gap-1 mt-2.5">
          <p>1404</p>
          <span>-</span>
          <p>صفر کیلومتر</p>
          <span>-</span>
          <p>اتومات</p>
        </div>
        <span className="text-foreground/80 text-sm mt-3">لحظاتی پیش</span>
        <div className="flex items-center justify-between gap-1 text-lg border-b border-foreground/10 pb-3">
          <div className="flex items-center gap-0.5">
            <MapPin size={18} strokeWidth="1.5" />
            <span className="text-foreground/90 font-light">تهران</span>
          </div>

          <p className="flex gap-1 font-semibold text-foreground">
            <span>980,000,000</span>
            <TomanIcon />
          </p>
        </div>
        <Button className="flex items-center gap-2 mt-3">
          <Phone />
          <span>تماس با فروشنده</span>
        </Button>
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <CarKilometerIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>

          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <GasIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>

          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <GearBoxIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>

          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <CarBodyIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>

          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <ColorBrushIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>

          <div className="flex flex-col gap-1 items-center p-2">
            <div className="border-2 border-primary/60 rounded-full">
              <CarChairIcon className="size-7 m-1.5" />
            </div>
            <span className="text-sm text-foreground/60">کارکرد</span>
            <p className="font-semibold text-foreground">صفر کیلومتر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
