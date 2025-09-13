"use client";
import NotFoundAnimation from "@/assets/error-404.json";
import Lottie from "lottie-react";

const NotFound = () => (
  <Lottie
    loop={true}
    autoPlay={true}
    className="mx-auto md:size-1/3"
    animationData={NotFoundAnimation}
  />
);

export default NotFound;
