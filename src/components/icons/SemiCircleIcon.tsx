"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface IProps {
   className?: string;
   width?: string;
   height?: string;
   isPostionRight: any;
   rotate?: any;
   type?: any;
}
const SemiCircleIcon = ({
   className,
   width = "288",
   height = "212",
   isPostionRight,
   rotate,
   type,
}: IProps) => {
   const [scrollX, setScrollX] = useState<number>(0);
   const [scrollY, setScrollY] = useState<number>(0);
   const [rotation, setRotation] = useState<any>(rotate);

   const handleScroll = () => {
      setScrollX(window.scrollY);
      setScrollY(window.scrollY);
      setRotation(
         isPostionRight
            ? `rotate(${(-scrollY / window.innerWidth) * 360}deg)`
            : window.scrollY === 0
            ? `rotate(${rotate}deg)`
            : `rotate(-${(scrollY / window.innerWidth) * 360}deg)`
      );
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [rotation]);

   const translate = isPostionRight
      ? `translate(${scrollX}px, ${-scrollY}px)`
      : `translate(${-scrollX}px, ${-scrollY}px)`;

   return (
      <>
         {type ? (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width={width}
               height={height}
               viewBox="0 0 303 153"
               fill="none"
               className={clsx(
                  "absolute  transition-transform transition-rotate transform z-0",
                  className
               )}
               style={{ transform: `${translate} ${rotation}` }}
            >
               <path
                  d="M151.5 152.7C235 152.7 302.8 84.5 302.8 0.399994H0.200195C0.200195 84.5 67.9002 152.7 151.5 152.7Z"
                  fill="#62E998"
               />
            </svg>
         ) : (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="288"
               height="212"
               viewBox="0 0 288 212"
               fill="none"
               className={clsx(
                  "absolute  transition-transform transition-rotate transform z-0",
                  className
               )}
               style={{ transform: `${translate} ${rotation}` }}
            >
               <path
                  d="M89.7998 13.3C13.9998 46.8 -20.3002 135.4 13.1998 211.1L287.7 89.9C254.2 14.2 165.5 -20.2 89.7998 13.3Z"
                  fill="#62EA98"
               />
            </svg>
         )}
      </>
   );
};

export default SemiCircleIcon;
