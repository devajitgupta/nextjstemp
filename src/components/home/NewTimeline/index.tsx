import { Span } from "next/dist/trace";
import React from "react";
import TimeLineCard from "./TimeLineCard";
import { card } from "@nextui-org/react";

import TimeLineCardRight from "./TimeLineCardRight";

const NewTimeLine = () => {
   return (
      <div className=" py-12 min-h-fit md:py-[100px] space-y-[10px] md:space-y-[50px] font-lato  ">
         <div>
            <h1
               className="text-[2rem] font-bold lg:text-[2.875rem] font-roboto"
               data-aos="fade-up"
               data-aos-duration="1000"
            >
               Process
            </h1>
         </div>
         <div className="py-[30px]  grid md:grid-cols-2 md:gap-[40px] lg:gap-[80px] md:ps-[40px] lg:ps-[60px] xl:ps-[175px] scrollbar-hide">
            <div className="flex flex-col gap-[25px] md:gap-[150px]">
               {cardData.map((data) => (
                  <div className=" md:even:hidden">
                     <TimeLineCard
                        key={data._id}
                        _id={data._id}
                        title={data.title}
                        text={data.text}
                        isPositionLast={data.isPositionLast}
                     />
                  </div>
               ))}
            </div>

            <div className="hidden  md:flex flex-col gap-[150px] mt-[150px]">
               {cardData.map((data) => (
                  <div className=" md:odd:hidden">
                     <TimeLineCardRight
                        key={data._id}
                        _id={data._id}
                        title={data.title}
                        text={data.text}
                        isPositionLast={data.isPositionLast}
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default NewTimeLine;

const cardData = [
   {
      _id: 1,
      title: "Initial Scope and Quote",
      text: "When you call in for a consultation, the agent will gather information about your needs and expectations, as well as any relevant background information about the case.",
      isPositionLast: false,
   },
   {
      _id: 2,
      title: "Statement of work",
      text: "When the agent has a clear understanding of your needs, they will develop a scope of work and fee agreement. The scope of work, also known as the statement of work document will outline the specific services that the investigator will provide, as well as the estimated timeline and cost of the investigation.",
      isPositionLast: false,
   },
   {
      _id: 3,
      title: "Investigation",
      text: "Once the agreement is signed, the investigation will be carried out by an experienced agent, who’ll be available to you throughout. Timeline of investigation depends on the scope. The methods used will vary depending on the case, but may include things like surveillance, background checks, interviews, document review, digital forensics and online research. See list of investigations, we can conduct for reference",
      isPositionLast: false,
   },
   {
      _id: 4,
      title: "Report Writeup",
      text: "When the investigation is complete, the investigator will provide you with a written report of their findings. The report will include case summary, executive synopsis, and further recommendation, if necessary.",
      isPositionLast: false,
   },
   {
      _id: 5,
      title: "Follow up",
      text: "After sending the report, the agent will schedule a debrief call to walk you through the report and to answer any questions.",
      isPositionLast: false,
   },
   {
      _id: 6,
      title: "Expert Witness",
      text: "In some cases, the investigator may need to do additional work after the report is submitted and the case has concluded. This might include attending court hearings, providing testimony, or helping the client to implement the findings of the investigation.",
      isPositionLast: true,
   },
];
