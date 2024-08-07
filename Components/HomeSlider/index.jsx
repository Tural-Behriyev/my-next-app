"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper";
import Link from "next/link";
import { sliderData } from "./sliderData";
import Navbar from "@/components/Navbar";
import styles from "./style.module.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([EffectFade, Pagination]);

const HomeSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setCurrentSlide(activeIndex);
    setSwiperRef(swiper);
  };

  const goToSlide = (index) => {
    if (swiperRef) {
      swiperRef.slideToLoop(index);
    }
  };

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar onMenuToggle={handleMenuToggle} />
      </div>
      <div className="text-center">
        <div className={styles.paginationContainer}>
          <div className={`flex mt-2 space-x-4 text-xl justify-center ${isMenuOpen ? "hidden" : ""}`}>
            {sliderData.map((_, id) => (
              <button
                key={id}
                onClick={() => goToSlide(id)}
                className={`mx-2 ${
                  id === currentSlide
                    ? "text-black font-bold text-2xl"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {id + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Swiper
        effect="fade"
        pagination={{ clickable: true }}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className="swiper-wrapper"
        loop={true}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="page-intro__slide bg-gradient-to-r from-gray-100 to-gray-200 bg-cover bg-center h-96 md:h-[50vh] lg:h-[75vh] xl:h-screen"
              style={{ backgroundImage: `url(${slide.backgroundImage.src})` }}
            >
              <div className="container h-full flex pt-20 md:pt-40 ps-10">
                <div className="page-intro__slide__content">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-medium">{slide.title}</h2>
                  <div className={styles.textBtn}>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium pb-3 md:pb-5">{slide.subtitle}</h4>
                    <p className="text-xs md:text-sm pb-3 md:pb-5">{slide.desc}</p>
                    {slide.button && (
                      <Link href="#">
                        <button className="bg-cyan-600 px-4 py-2 md:px-7 md:py-3 rounded-3xl text-white">
                          {slide.button}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;