"use client";
import clsx from "clsx";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
   className?: string;
   _id: number;
   title: string;
   text: string;
   isPositionLast?: boolean;
}

const TimeLineCardRight = ({
   className,
   _id,
   title,
   text,
   isPositionLast,
}: IProps) => {
   const matches = useMediaQuery("(min-width: 768px)");
   return (
      <div
         className={clsx("ps-[50px]", className)}
         data-aos="fade-up"
         data-aos-duration="300"
      >
         <div className=" relative flex h-[160px] pe-[15px] ">
            <div className=" space-y-[10px] w-full md:space-y-[15px]">
               <h3 className=" min-w-[300px]  lg:px-[25px] font-roboto  text-teal-950 font-bold text-[20px] ">
                  {title}
               </h3>
               <span className="bg-orange-600 block h-2"></span>
               <p
                  className={clsx(
                     "text-teal-950 text-[16px] font-lato lg:px-[20px]"
                  )}
               >
                  {matches ? <>{`${text.substring(0, 200)}...`}</> : text}
               </p>
            </div>
            <div
               className={clsx(
                  "absolute top-[10%] left-[-50px] border-2 border-orange-600  p-[5px]  rounded-full bg-stone-100 z-10 "
               )}
            >
               <div className="  bg-teal-950 w-[45px] h-[45px] grid place-items-center rounded-full">
                  <p className="text-white text-[24px] font-bold font-roboto ">
                     {_id}
                  </p>
               </div>
            </div>
            <span
               className={clsx(
                  "block w-[100px] md:w-[140px] lg:w-[180px] h-[2px] bg-orange-600 rotate-[-60deg]  lg:rotate-[-50deg] absolute left-[-140px]  bottom-[20%] lg:left-[-180px] z-0",
                  { "md:hidden": isPositionLast }
               )}
            ></span>
         </div>
      </div>
   );
};

export default TimeLineCardRight;
