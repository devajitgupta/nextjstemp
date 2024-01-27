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

const CircleIcon = ({
   className,
   width = "158",
   height = "159",
   isPostionRight,
   rotate,
}: IProps) => {
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
         width={width}
         height={height}
         viewBox="0 0 158 159"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={clsx(
            "transition-transform transition-rotate greenlink transform z-0",
            className
         )}
         style={{ transform: `${translate} ${rotation}` }}
      >
         <g id="Group">
            <path
               id="Vector"
               d="M79.2001 158.2C122.61 158.2 157.8 122.786 157.8 79.1C157.8 35.4143 122.61 0 79.2001 0C35.7906 0 0.600098 35.4143 0.600098 79.1C0.600098 122.786 35.7906 158.2 79.2001 158.2Z"
               fill="#4AA7DB"
            />
            <path
               id="Vector_2"
               d="M79.2001 158.2C122.61 158.2 157.8 122.786 157.8 79.1C157.8 35.4143 122.61 0 79.2001 0C35.7906 0 0.600098 35.4143 0.600098 79.1C0.600098 122.786 35.7906 158.2 79.2001 158.2Z"
               fill="#FF6633"
            />
         </g>
      </svg>
   );
};

export default CircleIcon;
