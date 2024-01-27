"use client";
import Image from "next/image";
import Container from "../container";

const Sponsors = () => {
   return (
      <Container className=" border-t border-[#AEAEAE] hidden">
         <div className="py-[30px] md:py-[40px] flex flex-wrap items-center justify-around md:justify-between gap-[20px]">
            {sponsorsData.map((sponser, index) => (
               <div
                  className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  key={sponser.img}
               >
                  <Image
                     src={`/assets/images/${sponser.img}`}
                     width={sponser.width}
                     height={50}
                     alt={sponser.img}
                     data-aos="zoom-in"
                     data-aos-delay={150 * index}
                  />
               </div>
            ))}
         </div>
      </Container>
   );
};

export default Sponsors;

const sponsorsData = [
   { img: "CLBT_BIG-cdb9b8fd1.png", width: 259 },
   { img: "pipl-logo1.png", width: 100 },
   { img: "v10_logo_1200x6301.png", width: 200 },
   { img: "MF_AXIOM_Cyber_black_featured12.png", width: 259 },
   { img: "Maltego-Logo-Horizontal-Greyblue1.png", width: 200 },
];
