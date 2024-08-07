"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import SignysFriendsSliderData from "./SignysFriendsSliderData";
import Image from "next/image";
import styles from "./style.module.css";

SwiperCore.use([Pagination]);

const SignysFriendsSlider = () => {
  return (
    <Swiper spaceBetween={30} slidesPerView={4} loop={true} pagination={{ clickable: true, dynamicBullets: true }} className="mySwiper">
      {SignysFriendsSliderData.map((logo) => (
        <SwiperSlide key={logo.id}>
          <Image className="mx-auto" src={logo.src} alt={logo.alt} width={150} height={150} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SignysFriendsSlider;