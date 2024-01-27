import React from "react";

const TermServicesData = [
   {
      heading: "Introduction",
      para: "15/01/2024",
      paraOne:
         "Our aim is to keep this Agreement as readable as possible, but in some cases for legal reasons, some of the language is required 'legalese'.",
   },
   {
      heading: "Your Acceptance of this Agreement",
      para: "These terms of service are entered into by and between You and Merlin Hunter, Inc. ('Company,' 'we,' 'our,' or 'us'). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively 'Terms of Service'), govern your access to and use of https://merlinhunter.vercel.app/, including any content, functionality, and services offered on or through https://merlinhunter.vercel.app/",
      paraone:
         "Please read the Terms of Service carefully before you start to use the Website.",
      paraSecond:
         "Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      paraThree: "BY ACCESSING AND USING THIS WEBSITE, YOU:",
      paraFour:
         "ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS OF SERVICE;",
      paraFive:
         "YOU REPRESENT AND WARRANT THAT YOU ARE THE LEGAL AGE OF MAJORITY UNDER APPLICABLE LAW TO FORM A BINDING CONTRACT WITH US; AND,",
      paraSix:
         "YOU AGREE IF YOU ACCESS THE WEBSITE FROM A JURISDICTION WHERE IT IS NOT PERMITTED, YOU DO SO AT YOUR OWN RISK.",
   },
];

const TermOfServices = () => {
   return (
      <div className="w-full flex flex-col justify-center items-start my-[100px] gap-[100px]">
         <div className="w-full">
            <div className="flex items-start flex-col gap-[15px]">
               <h3 className="font-roboto text-[#1A1A1A] text-[16px] font-bold">
                  1. {TermServicesData[0].heading}
               </h3>
               <p className="text-[14px] font-lato ">
                  Last updated {TermServicesData[0].para}
               </p>
               <p className="text-[14px] font-lato">
                  {TermServicesData[0].paraOne}
               </p>
            </div>
            <div className="flex items-start flex-col gap-[15px] py-[30px]">
               {/* <div className="my-[5px]"> */}
               <h3 className="font-roboto text-[#1A1A1A] text-[16px] font-bold">
                  2. {TermServicesData[1].heading}
               </h3>
               <p className="text-[14px] font-lato">
                  {TermServicesData[1].para}
               </p>

               <p className="text-[14px] font-lato">
                  {TermServicesData[1].paraone}
               </p>

               <p className="text-[14px] font-lato">
                  {TermServicesData[1].paraSecond}
               </p>

               <h3 className="font-roboto text-[#1A1A1A] text-[14px] font-bold">
                  {TermServicesData[1].paraThree}
               </h3>
               <div>
                  <h3 className="font-roboto text-[#1A1A1A] text-[14px] font-bold">
                     {TermServicesData[1].paraFour}
                  </h3>

                  <h3 className="font-roboto text-[#1A1A1A] text-[14px] font-bold">
                     {TermServicesData[1].paraFive}
                  </h3>

                  <h3 className="font-roboto text-[#1A1A1A] text-[14px] font-bold">
                     {TermServicesData[1].paraSix}
                  </h3>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TermOfServices;
