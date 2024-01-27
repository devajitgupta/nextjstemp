"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
interface IProps {
   className?: string;
   width?: string;
   height?: string;
   isPostionRight: any;
   rotate?: any;
}
const TringleIcon = ({ className, isPostionRight, rotate }: IProps) => {
   const [scrollX, setScrollX] = useState<number>(0);
   const [scrollY, setScrollY] = useState<number>(0);
   const [rotation, setRotation] = useState<any>(rotate);

   const handleScroll = () => {
      setScrollX(window.scrollY);
      setScrollY(window.scrollY);
      setRotation(
         isPostionRight
            ? window.scrollY === 0
               ? `rotate(${rotate}deg)`
               : `rotate(${(scrollY / window.innerWidth) * 360}deg)`
            : `rotate(${(-scrollY / window.innerWidth) * 360}deg)`
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
      <svg
         width="224"
         height="194"
         viewBox="0 0 224 194"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={clsx(
            "transition-transform transition-rotate transform orangelink z-0",
            className
         )}
         style={{ transform: `${translate} ${rotation}` }}
      >
         <path
            id="Vector"
            d="M111.6 0.799988L223.2 194H0L111.6 0.799988Z"
            fill="#0C6C6C"
         />
      </svg>
   );
};

export default TringleIcon;
