"use client";

import "@/common/assets/css/carousel.min.css";
import { ReactNode, useEffect } from "react";
import { TServiceRepository } from "@/common/types/services";
import CardPanel from "./CardPanel";

type Props = {
   services: TServiceRepository[] | [];
};

const ServicesCarousel = ({ services }: Props) => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         import("materialize-css").then((M) => {
            M.AutoInit();
         });
      }
   }, []);

   return (
      <div className="relative">
         <div className="sm:-mt-[80px]">
            <div className="carousel min-h-[590px] md:min-h-[00px] -top-[130px] md:-top-[70px]">
               {services.map((item, index) => (
                  <CarouselItem key={`${index}-carousel-item`}>
                     <CardPanel item={item} />
                  </CarouselItem>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ServicesCarousel;

const CarouselItem = ({ children }: { children: ReactNode }) => {
   return (
      <div className="carousel-item cursor-pointer min-w-[300px] md:min-w-[300px] lg:min-w-[400px] xl:min-w-[600px]">
         {children}
      </div>
   );
};
