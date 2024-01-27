"use client";
import clsx from "clsx";
import {
   CircleIcon,
   RectangleIcon,
   SemiCircleIcon,
   TringleIcon,
} from "../icons";
import "./style.css";
import Container from "@/components/container";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/common/assets/frame-3.json";
import { useRef } from "react";

const NewHomeBanner = () => {
   const frameRef = useRef<LottieRefCurrentProps>(null);
   let test = "Sucessfull";
   console.log(test);

   return (
      <div className="bg-white">
         <Container background=" bg-white relative py-6  ">
            <div
               className={clsx(
                  "flex flex-col gap-[150px] font-sans py-8 md:pt-[72px] md:pb-[80px]  mt-[72px]   "
               )}
            >
               <div className="flex justify-center w-full flex-col text-[16px] px-[16px] z-10">
                  <span className="text-neutral-300 font-sans tracking-[1.6px] uppercase animate__animated  animate__bounceInRight animate__fast">
                     WELCOME TO MERLIN HUNTER & ASSOCIATES
                  </span>
                  <h1 className="w-full md:max-w-[750px] mt-[10px] text-[2.4rem] md:text-[3.4rem] font-bold md:leading-[76px] mb-[20px] text-zinc-850 font-roboto animate__animated animate__bounceInLeft md:animate__bounce animate__animated ">
                     We help people find the answers they seek.
                  </h1>
                  <p className="text-stone-500 w-full md:max-w-[750px] font-lato animate__animated  animate__bounceInRight animate__fast ">
                     Our team can tailor an investigation in confidence,
                     ethically <br /> and legally to help unravel your
                     mysteries.
                  </p>
                  <div className="mt-[40px] flex gap-[20px]">
                     <button className="py-[12px] px-[30px] text-[14px] rounded-full bg-teal-950 hover:bg-white hover:text-teal-950 border border-teal-950 hover:border-teal-950 text-white font-lato orangelink animate__animated animate__backInLeft">
                        Our Service
                     </button>
                     <button className="py-[12px] px-[30px] text-[14px] border bg-white border-orange-600 rounded-full text-orange-600 hover:text-white hover:bg-orange-600 font-lato greenlink animate__animated animate__backInRight">
                        New Case
                     </button>
                  </div>
               </div>
            </div>
            {/* Desktop */}
            <div className="relative hidden md:block mt-[50px] z-0">
               {/* Tringle-1 */}
               <TringleIcon
                  className=" bottom-0 reflectionTringle transition-transform transition-rotate  rotate-0 transform"
                  isPostionRight={false}
               />

               {/* Circle-1 */}
               <CircleIcon
                  className=" greenlink transition-transform transition-rotate transform absolute left-[280px] bottom-[91px] z-0"
                  width="111"
                  height="111"
                  isPostionRight={false}
               />

               {/* Rectangle-1 */}
               <RectangleIcon
                  className=" absolute left-[265px] bottom-0 rectangleReflection "
                  isPostionRight={false}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" absolute left-[450px] rotate-[0deg] bottom-[46%]"
                  width="287"
                  height="210"
                  isPostionRight={false}
                  rotate={0}
                  type={false}
               />

               {/* Tringle-2 */}
               <TringleIcon
                  className=" absolute left-[590px] bottom-0  rotate-0 z-10 reflectionTringle"
                  isPostionRight={false}
                  rotate={"0"}
               />

               {/* Tringle-3 */}
               <TringleIcon
                  className=" absolute left-[690px] bottom-[203px] rotate-[45deg]"
                  isPostionRight={true}
                  rotate={"45"}
               />

               {/* Rectangle-2 */}
               <RectangleIcon
                  className=" left-[712px] absolute rotate-[-80deg] bottom-[124px]  transition-transform transition-rotate transform z-0"
                  isPostionRight={true}
                  rotate={-80}
               />

               {/* Circle-2 */}
               <CircleIcon
                  className=" cursor-[url(/assets/images/greenCircle.svg),_pointer absolute left-[925px] bottom-[300px]"
                  width="157"
                  height="158"
                  isPostionRight={true}
               />

               {/* Tringle-4 */}
               <TringleIcon
                  className=" absolute left-[960px] rotate-[0deg] bottom-[146px]"
                  isPostionRight={true}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" absolute left-[1020px] bottom-[-32px] reflectionSemiCircle "
                  isPostionRight={true}
                  type={true}
               />
            </div>

            {/* Mobile */}
            <div className="relative hidden bg-white z-0">
               {/* Tringle-1 */}
               <TringleIcon
                  className=" w-[65px] reflectionTringle transition-transform transition-rotate  rotate-0 transform"
                  isPostionRight={false}
               />

               {/* Circle-1 */}
               <CircleIcon
                  className=" w-[30px] transition-transform transition-rotate transform absolute left-[80px] bottom-[95px] z-0"
                  width="35"
                  height="35"
                  isPostionRight={false}
               />

               {/* Rectangle-1 */}
               <RectangleIcon
                  className=" w-[100px] absolute left-[75px] bottom-[38px] rectangleReflection "
                  isPostionRight={false}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" w-[75px] absolute left-[128px] rotate-[-5deg] bottom-[22px]"
                  width="87"
                  height="10"
                  isPostionRight={false}
                  rotate={0}
                  type={false}
               />

               {/* Tringle-2 */}
               <TringleIcon
                  className=" absolute w-[65px] bottom-0 left-[50%] rotate-0 z-10 reflectionTringle"
                  isPostionRight={false}
                  rotate={"0"}
               />

               {/* Tringle-3 */}
               <TringleIcon
                  className=" w-[65px] absolute left-[185px] bottom-[68px] rotate-[45deg]"
                  isPostionRight={true}
                  rotate={"45"}
               />

               {/* Rectangle-2 */}
               <RectangleIcon
                  className="w-[100px] right-[72px] absolute rotate-[-80deg] bottom-[75px]  transition-transform transition-rotate transform z-0"
                  isPostionRight={true}
                  rotate={-80}
               />

               {/* Circle-2 */}
               <CircleIcon
                  className=" w-[50px] absolute right-[55px] top-[-40px]"
                  width="100"
                  height="100"
                  isPostionRight={true}
               />

               {/* Tringle-4 */}
               <TringleIcon
                  className=" w-[65px] absolute right-[30px] rotate-[0deg] bottom-[40px]"
                  isPostionRight={true}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" w-[75px] absolute right-0 bottom-[-18px] reflectionSemiCircle "
                  isPostionRight={true}
                  type={true}
               />
            </div>

            {/* xs */}
            <div className="relative hidden bg-white z-0">
               {/* Tringle-1 */}
               <TringleIcon
                  className=" max-w-[65px] reflectionTringle transition-transform transition-rotate  rotate-0 transform"
                  isPostionRight={false}
               />

               {/* Circle-1 */}
               <CircleIcon
                  className=" max-w-[60px] transition-transform transition-rotate transform absolute left-[80px] bottom-[95px] z-0"
                  width="111"
                  height="111"
                  isPostionRight={false}
               />

               {/* Rectangle-1 */}
               <RectangleIcon
                  className=" w-[100px] absolute left-[75px] bottom-[38px] rectangleReflection "
                  isPostionRight={false}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" w-[75px] absolute left-[128px] rotate-[-5deg] bottom-[22px]"
                  width="87"
                  height="10"
                  isPostionRight={false}
                  rotate={0}
                  type={false}
               />

               {/* Tringle-2 */}
               <TringleIcon
                  className=" absolute w-[65px] bottom-0 left-[50%] rotate-0 z-10 reflectionTringle"
                  isPostionRight={false}
                  rotate={"0"}
               />

               {/* Tringle-3 */}
               <TringleIcon
                  className=" w-[65px] absolute left-[185px] bottom-[68px] rotate-[45deg]"
                  isPostionRight={true}
                  rotate={"45"}
               />

               {/* Rectangle-2 */}
               <RectangleIcon
                  className="w-[100px] right-[72px] absolute rotate-[-80deg] bottom-[75px]  transition-transform transition-rotate transform z-0"
                  isPostionRight={true}
                  rotate={-80}
               />

               {/* Circle-2 */}
               <CircleIcon
                  className=" w-[50px] absolute right-[55px] top-[-40px]"
                  width="100"
                  height="100"
                  isPostionRight={true}
               />

               {/* Tringle-4 */}
               <TringleIcon
                  className=" w-[65px] absolute right-[30px] rotate-[0deg] bottom-[40px]"
                  isPostionRight={true}
               />

               {/* SemiCircle-2 */}
               <SemiCircleIcon
                  className=" w-[75px] absolute right-0 bottom-[-18px] reflectionSemiCircle "
                  isPostionRight={true}
                  type={true}
               />
            </div>
         </Container>
         <div className="md:hidden mt-[-55px]">
            <Lottie
               onComplete={() => {
                  frameRef.current?.goToAndPlay(5, true);
               }}
               animationData={animationData}
               lottieRef={frameRef}
               loop={false}
               className="animate__animated animate__bounceInDown "
            />
         </div>
      </div>
   );
};

export default NewHomeBanner;
