"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
   className?: string;
   _id: number;
   title: string;
   text: string;
   isPositionLast?: boolean;
}

const TimeLineCard = ({
   className,
   _id,
   title,
   text,
   isPositionLast,
}: IProps) => {
   const [isRead, setIsRead] = useState(false);
   const matches = useMediaQuery("(min-width: 768px)");
   const hundelReadMode = () => {
      return isRead ? setIsRead(false) : setIsRead(true);
   };

   return (
      <div
         className={clsx("pe-[50px] ", className)}
         data-aos="fade-up"
         data-aos-duration="300"
      >
         <div className=" relative flex h-fit md:h-[160px] ps-[15px]   ">
            <div className=" space-y-[10px] w-full md:space-y-[15px]">
               <h3 className=" min-w-[300px]  lg:px-[25px] font-roboto  text-teal-950 font-bold text-[20px] ">
                  {title}
               </h3>
               <span className="bg-orange-600 block h-2"></span>
               <p className="text-teal-950 text-[16px] font-lato lg:ps-[20px] lg:pe-[30px]  md:border-none  border-e-3 border-orange-600 relative ms-[-20px] pe-[15px] left-[20px]">
                  {matches ? <>{`${text.substring(0, 200)}...`}</> : text}

                  {/* {text} */}
               </p>
            </div>
            <div className="absolute top-[15px] md:top-[10%] right-[-50px] border-2  border-orange-600  p-[5px]  rounded-full bg-stone-100 z-10 ">
               <div className="  bg-teal-950 w-[45px] h-[45px] grid place-items-center rounded-full">
                  <p className="text-white text-[24px] font-bold font-roboto">
                     {_id}
                  </p>
               </div>
            </div>
            <span
               className={clsx(
                  "md:block hidden w-[200px] md:w-[140px] lg:w-[160px] h-[2px]  bg-orange-600 rotate-[90deg] md:rotate-[60deg] lg:rotate-[50deg]  absolute right-[-120px] md:right-[-140px]  lg:right-[-170px]   bottom-[30%] md:bottom-[25%] z-0",
                  { "md:hidden": isPositionLast }
               )}
            ></span>
         </div>
      </div>
   );
};

export default TimeLineCard;
