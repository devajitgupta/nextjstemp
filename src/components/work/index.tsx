"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import MinusIcon from "@/components/icons/Minus";
import PlusIcon from "@/components/icons/Plus";
import "./style.css";
import Image from "next/image";
import clsx from "clsx";

const data = [
   {
      heading: "Initial Scope and Quote",
      para: "When you call in for a consultation, the agent will gather information about your needs and  expectations, as well as any relevant background information about the case.",
      // icon: "/assets/images/icons/FrameOne.svg",
      icon: "1",
      bgcolor: "bg-orange-650",
      borderColor: "border border-orange-650",
   },

   {
      heading: "Statement of Work",
      para: "When the agent has a clear understanding of your needs, they will develop a scope of work and  fee agreement. The scope of work, also known as the statement of work document, will outline the specific services that the investigator will provide, as well as the estimated timeline and cost of the investigation.",
      icon: "2",
      // icon: "/assets/images/icons/FrameTwo.svg",
      bgcolor: "bg-gray-100",
      borderColor: "border border-stone-50",
   },

   {
      heading: "Investigation",
      para: "Once the agreement is signed, the investigation will be carried out by an experienced agent, who’ll be available to you throughout. Timeline of investigation depends on the scope. The methods used will vary depending on the case, but may include things like surveillance,  background checks, interviews, document review, digital forensics and online research. See list of investigations, we can conduct for reference.",
      icon: "3",
      // icon: "/assets/images/icons/Frame3.svg",
      bgcolor: "bg-gray-100",
      borderColor: "border border-stone-50",
   },

   {
      heading: "Report Write-up",
      para: "When the investigation is complete, the investigator will provide you with a written report of their findings. The report will include case summary, executive synopsis and further recommendation, if necessary.",
      icon: "4",
      // icon: "/assets/images/icons/FrameFour.svg",
      bgcolor: "bg-gray-100",
      borderColor: "border border-stone-50",
   },

   {
      heading: "Follow Up",
      para: "After sending the report, the agent will schedule a debrief call to walk you through the report and to answer any questions.",
      // icon: "/assets/images/icons/FrameFive.svg",
      icon: "5",
      bgcolor: "bg-gray-100",
      borderColor: "border border-stone-50",
   },
   {
      heading: "Expert Witness",
      para: "In some cases, the investigator may need to do additional work after the report is submitted and the case has concluded. This might include attending court hearings, providing testimony, or helping the client to implement the findings of the investigation.",
      // icon: "/assets/images/icons/FrameFive.svg",
      icon: "6",
      bgcolor: "bg-gray-100",
      borderColor: "border border-stone-50",
   },
];

const Work = () => {
   return (
      <div className="w-full pt-[72px] pb-[80px] bg-stone-200   ">
         <div className="justify-center flex flex-col items-center px-4  md:px-[50px] lg:px-[100px] ">
            <div className=" w-full max-w-[945px] ">
               <div className="max-w-[945px] w-full space-y-20   ">
                  {data.map((content, index) => (
                     <div key={index}>
                        {/* <div
                           className={clsx(
                              " relative z-10 rounded-[61px] inline-flex items-start gap-[10px] left-[10px] md:left-[15px] text-[52px] md:text-[72px] font-roboto font-bold text-orange-600 "
                              // content.bgcolor
                              // content.borderColor
                           )}
                           data-aos="fade-right"
                           data-aos-delay={75 * index}
                        >
                           <Image
                              src={content.icon}
                              alt=""
                              width={30}
                              height={30}
                           />
                           {content.icon}
                        </div> */}
                        <div
                           className="bg-white border-r-3 border-orange-600 w-full max-w-[945px] relative  justify-between items-center rounded-s-[8px] "
                           data-aos="fade-left"
                           data-aos-delay={75 * index}
                        >
                           <span className=" absolute top-[-75px] text-center ps-[15px] text-[100px]  text-orange-600 font-bold md:text-[100px]">
                              {content.icon}
                           </span>
                           <Accordion
                              selectionMode="multiple"
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
                              defaultExpandedKeys={["1"]}
                           >
                              <AccordionItem
                                 key="1"
                                 aria-label={"Accordion"}
                                 title={
                                    <h3
                                       className="font-roboto font-bold text-teal-950 text-[18px] md:text-[20px] leading-normal w-full  md:ps-[25px] flex pe-[10px] items-end justify-end"
                                       style={{ letterSpacing: "0.4px" }}
                                    >
                                       <span
                                          className="border-b-4 pb-1 border-orange-600"
                                          data-aos="fade-left"
                                          data-aos-delay={150 * index}
                                       >
                                          {content.heading}
                                       </span>
                                    </h3>
                                 }
                                 hideIndicator={true}
                                 // indicator={({ isOpen }) => (
                                 //    <motion.div
                                 //       animate={{ rotate: isOpen ? 270 : 0 }}
                                 //       transition={{ duration: 0.3 }}
                                 //    >
                                 //       {isOpen ? <MinusIcon /> : <PlusIcon />}
                                 //    </motion.div>
                                 // )}
                                 className=" ps-[40px] md:px-[30px]  "
                              >
                                 <div className=" justify-between flex items-center pe-[10px] md:ps-[40px] pt-[5px] md:pt-[20px] pb-[36px] ">
                                    <p className="text-[16px] leading-normal font-sans">
                                       {content.para}
                                    </p>
                                 </div>
                              </AccordionItem>
                           </Accordion>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Work;
