import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "./FeatureCard";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "@mui/material";

const Features = () => {
  const smallMQuery = useMediaQuery("(max-width: 767px)");

  return (
    <div className="py-5 border-b-[1px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={smallMQuery ? 1 : 3}
        autoplay
        loop
        className="mySwiper"
      >
        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

        <SwiperSlide>
          <FeatureCard />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Features;
