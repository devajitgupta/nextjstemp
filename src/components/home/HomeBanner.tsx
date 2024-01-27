"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";
import {
   CircleIcon,
   RectangleIcon,
   SemiCircleIcon,
   TringleIcon,
} from "../icons";

const HomeBanner = () => {
   return (
      <div className=" py-6 md:py-[50px] lg:py-[100px] bg-white">
         <Banner />
         {/* <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay settings
            speed={1100}
         >
            <SwiperSlide>
               <SliderContent bgImage="bg-[url('/assets/images/swiper-1.png')]" />
            </SwiperSlide>
            <SwiperSlide>
               <SliderContent bgImage="bg-[url('/assets/images/swiper-2.jpg')]" />
            </SwiperSlide>
         </Swiper> */}
      </div>
   );
};

export default HomeBanner;

const SliderContent = ({ bgImage }: { bgImage?: string }) => {
   return (
      <div className={clsx(" bg-cover bg-no-repeat font-sans", bgImage)}>
         <div className="flex items-center justify-center w-full h-full flex-col min-h-[80vh] text-center text-[16px] px-[16px]">
            <span className="text-[#BEBEBE] font-sans tracking-[1.6px] uppercase">
               WELCOME TO MERLIN HUNTER & ASSOCIATES
            </span>
            <h1 className="w-full md:max-w-[750px] mt-[10px] text-[2.6rem] md:text-[3.4rem] font-bold md:leading-[76px] mb-[20px] text-white font-poppins">
               We help people find the answers they seek.
            </h1>
            <p className="text-[#F5F5F5] w-full md:max-w-[750px]">
               Our team can tailor an investigation in confidence, ethically and
               legally to help unravel your mysteries.
            </p>
            <div className="mt-[40px] flex gap-[20px]">
               <button className="py-[12px] px-[30px] text-[14px] rounded-full bg-white text-[#1A1A1A]">
                  Our Service
               </button>
               <button className="py-[12px] px-[30px] text-[14px] border border-[#316464] rounded-full text-white">
                  Contact Us
               </button>
            </div>
         </div>
      </div>
   );
};

const Banner = () => {
   return (
      <section className="min-h-[90vh] ">
         <div
            className={clsx(
               " border border-red-500 font-sans bg-white px-[100px]"
            )}
         >
            <div className="flex justify-center w-full flex-col min-h-[80vh] border border-black  text-[16px] px-[16px]">
               <span className="text-neutral-300 font-sans tracking-[1.6px] uppercase">
                  WELCOME TO MERLIN HUNTER & ASSOCIATES
               </span>
               <h1 className="w-full md:max-w-[750px] mt-[10px] text-[2.6rem] md:text-[3.4rem] font-bold md:leading-[76px] mb-[20px] text-zinc-850 font-poppins">
                  We help people find the answers they seek.
               </h1>
               <p className="text-stone-500 w-full md:max-w-[750px]">
                  Our team can tailor an investigation in confidence, ethically{" "}
                  <br /> and legally to help unravel your mysteries.
               </p>
               <div className="mt-[40px] flex gap-[20px]">
                  <button className="py-[12px] px-[30px] text-[14px] rounded-full bg-teal-950 hover:bg-white hover:text-teal-950 border hover:border-teal-950 text-white ">
                     Our Service
                  </button>
                  <button className="py-[12px] px-[30px] text-[14px] border border-teal-950 rounded-full text-teal-950 hover:text-white hover:bg-teal-950">
                     New Case
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};
