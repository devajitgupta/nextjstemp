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

const RectangleIcon = ({
   className,
   width = "326",
   height = "92",
   isPostionRight,
   rotate,
}: IProps) => {
   const [scrollX, setScrollX] = useState<number>(0);
   const [scrollY, setScrollY] = useState<number>(0);
   const [rotation, setRotation] = useState<any>(rotate);

   const handleScroll = () => {
      setScrollX(window.scrollY);
      setScrollY(window.scrollY);

      const newRotation = isPostionRight
         ? window.scrollY === 0
            ? `rotate(${rotate}deg)`
            : `rotate(${(scrollY / window.innerWidth) * 360}deg)`
         : `rotate(${(-scrollY / window.innerWidth) * 360}deg)`;

      requestAnimationFrame(() => {
         setRotation(newRotation);
      });
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
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 326 92"
         fill="none"
         className={clsx(className)}
         style={{ transform: `${translate} ${rotation}` }}
      >
         <path
            d="M325.8 0.899994H0.799805V91.7H325.8V0.899994Z"
            fill="#003333"
         />
      </svg>
   );
};

export default RectangleIcon;
