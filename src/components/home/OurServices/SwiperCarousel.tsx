"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { TServiceRepository } from "@/common/types/services";
import { Pagination, Autoplay, EffectCoverflow, A11y } from "swiper/modules";
import "./swiper.css";
import CardPanel from "./CardPanel";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
   services: TServiceRepository[] | [];
};

// const getCardPanelColor = (
//    index: number,
//    activeIndex: number,
//    realIndex?: number
// ) => {
//    if (index === realIndex) {
//       return "bg-white transition-transform transition-bg transform";
//    } else if (
//       index !== realIndex ||
//       index === realIndex + 1 ||
//       index === realIndex - 1
//    ) {
//       return "text-white bg-gradient-to-r from-teal-600 from-[50%] to-orange-600 to-[50%] transition-transform transition-bg transform";
//    } else {
//       return "text-white bg-gradient-to-r from-teal-600 from-[50%] to-orange-600 to-[50%] transition-transform transition-bg transform";
//    }
// };
// const getCardPanelColor = (
//    index: number,
//    activeIndex: number,
//    realIndex: number
// ) => {
//    if (index === realIndex + 1) {
//       return "bg-white transition-transform transition-bg transform";
//       // } else if (index < activeIndex) {
//       //    return "text-white bg-orange-600 transition-transform transition-bg transform";
//    }
//    // } else if (index > activeIndex) {
//    //    return "text-white last:bg-teal-600 first:bg-orange-600 transition-transform transition-bg transform";
//    // }
//    return "text-white bg-teal-600 transition-transform transition-bg transform";
// };

const SwiperCarousel = ({ services }: Props) => {
   const matches = useMediaQuery("(min-width: 768px)");
   const [activeIndex, setActiveIndex] = useState(0);
   const [realIndex, setRealIndex] = useState(0);

   return (
      // <Swiper
      //    dir="ltr"
      //    effect="coverflow"
      //    grabCursor={true}
      //    modules={[Pagination, EffectCoverflow, Autoplay]}
      //    centeredSlides={true}
      //    slidesPerView={3}
      //    coverflowEffect={{
      //       rotate: 0,
      //       stretch: matches ? 300 : 0,
      //       depth: 10,
      //       modifier: 3,
      //       slideShadows: true,
      //    }}
      //    pagination={{ clickable: true }}
      //   c // Add autoplay settings
      //    speed={1500}
      //    loop={true}
      //    className="our-service-carousel min-h-[450px] md:min-h-[600px]"
      //
      // >
      //    {services.reverse().map((service, index) => (
      //       <SwiperSlide key={service._id}>
      //          <CardPanel
      //             item={service}
      //             className={getCardPanelColor(index, activeIndex, realIndex)}
      //          />
      //       </SwiperSlide>
      //    ))}
      // </Swiper>
      <Swiper
         modules={[Pagination, A11y, Autoplay]}
         spaceBetween={10}
         slidesPerView={3}
         slidesPerGroup={1}
         loop={true}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         className="min-h-[450px]  md:min-h-[600px]"
         onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setRealIndex(swiper.realIndex);
            // console.log("log: sw", swiper.activeIndex);
            console.log("log: autoplay", swiper.autoplay);
         }}
         autoplay={{
            delay: 3000,
            reverseDirection: true,
            disableOnInteraction: false,
         }}
         speed={1100}
         breakpoints={{
            250: {
               slidesPerView: 1,
               spaceBetween: 20,
               slidesPerGroup: 1,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 30,
               slidesPerGroup: 2,
            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 40,
               slidesPerGroup: 3,
            },
         }}
      >
         {services.map((service, index) => (
            <SwiperSlide key={service._id}>
               <CardPanel
                  item={service}
                  className={twMerge(
                     clsx("bg-orange-600  md:text-white text-teal-950 ", {
                        "bg-white text-white md:text-teal-950":
                           index === realIndex + 1,
                        " bg-white text-teal-950 md:text-white md:bg-teal-600 ":
                           index === realIndex,
                     })
                  )}
                  type={
                     index === realIndex
                        ? "primaryCard"
                        : index === realIndex + 1
                        ? "realCard"
                        : "secondoryCard"
                  }
               />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default SwiperCarousel;
