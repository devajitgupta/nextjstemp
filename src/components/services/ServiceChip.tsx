"use client";

import clsx from "clsx";
import { MinusIcon, PlusIcon } from "../icons";
import { useState } from "react";
import { motion } from "framer-motion";

type TService = {
   _id: string;
   title: string;
   para: string;
};

const ServiceChip = ({
   service,
   className,
   index,
}: {
   service: TService;
   className?: string;
   index: number;
}) => {
   const [activeIndex, setActiveIndex] = useState(null); // To track which accordion item is active

   const toggleAccordion = (index: any) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active index
   };

   return (
      <div className="flex flex-col gap-[5px]" key={index}>
         <div
            className={clsx(
               "flex justify-between px-[30px] py-[20px] bg-white rounded-[8px] shadow-sm cursor-pointer font-poppins text-[#1A1A1A] text-[16px] ",
               className
            )}
            data-aos="zoom-in"
            data-aos-once="true"
         >
            <p>{service.title}</p>
            <motion.div
               animate={{ rotate: activeIndex === index ? 180 : 0 }}
               transition={{ duration: 0.3 }}
            >
               <div onClick={() => toggleAccordion(index)}>
                  {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
               </div>
            </motion.div>
         </div>
         {activeIndex === index && (
            <motion.div
               initial="exit"
               animate="enter"
               exit="exit"
               variants={{
                  enter: {
                     y: 0,
                     opacity: 1,
                     height: "auto",
                     transition: {
                        height: {
                           type: "spring",
                           stiffness: 500,
                           damping: 30,
                           duration: 1,
                        },
                        opacity: {
                           easings: "ease",
                           duration: 1,
                        },
                     },
                  },
                  exit: {
                     y: -10,
                     opacity: 0,
                     height: 0,
                     transition: {
                        height: {
                           easings: "ease",
                           duration: 0.25,
                        },
                        opacity: {
                           easings: "ease",
                           duration: 0.3,
                        },
                     },
                  },
               }}
            >
               <div className="bg-white text-[#1A1A1A]  text-[13px] rounded-[8px] px-[30px] py-[10px] z-10">
                  <p>{service?.para}</p>
               </div>
            </motion.div>
         )}
      </div>
   );
};

export default ServiceChip;
