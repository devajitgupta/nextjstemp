"use client";
import MinusIcon from "@/components/icons/Minus";
import PlusIcon from "@/components/icons/Plus";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TFaq } from "@/common/types/faqs";
import { truncateSync } from "fs";

type Props = {
   faqs: TFaq[] | [];
};
const FaqContaint = ({ faqs }: Props) => {
   const [activeIndex, setActiveIndex] = useState(null); // To track which accordion item is active

   const toggleAccordion = (index: any) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active index
   };

   return (
      <Fragment>
         {faqs.map((content, index) => (
            <div
               key={content.heading}
               className="py-[20px] px-[30px] self-stretch gap-[20px] flex flex-col"
               style={{
                  background: content.bg,
                  boxShadow: content.boxShadow,
               }}
               data-aos="fade-left"
               data-aos-delay={100 * index}
            >
               <Accordion
                  motionProps={{
                     variants: {
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
                     },
                  }}
               >
                  <AccordionItem
                     key={index}
                     aria-label={"Accordion"}
                     title={content.heading}
                     indicator={({ isOpen }) => (
                        <motion.div
                           animate={{ rotate: isOpen ? 270 : 0 }}
                           transition={{ duration: 0.3 }}
                        >
                           {isOpen ? <MinusIcon /> : <PlusIcon />}
                        </motion.div>
                     )}
                  >
                     <div className="w-fit md:pe-[100px]">
                        <p className="text-[10px] leading-normal font-normal font-open-sans  md:text-[16px]">
                           {content.para}
                        </p>
                     </div>
                  </AccordionItem>
               </Accordion>
            </div>
         ))}
      </Fragment>
   );
};

export default FaqContaint;
