"use client";
import clsx from "clsx";
import React, { ReactNode, useEffect, useState } from "react";

interface IProps {
   className?: string;
   isPostionRight: any;
   rotate?: any;
   children: ReactNode;
   delay?: number;
}
const BannerAnimation = ({
   className,
   isPostionRight,
   rotate,
   children,
   delay,
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
   //    useEffect(() => {
   //       window.addEventListener("scroll", handleScroll);
   //       return () => {
   //          window.removeEventListener("scroll", handleScroll);
   //       };
   //    }, [rotation]);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         window.addEventListener("scroll", handleScroll);
      }, delay);

      return () => {
         window.removeEventListener("scroll", handleScroll);
         clearTimeout(timeoutId);
      };
   }, [rotation, delay]);

   const translate = isPostionRight
      ? `translate(${scrollX}px, ${-scrollY}px)`
      : `translate(${-scrollX}px, ${-scrollY}px)`;
   return (
      <div
         className={clsx(
            "bg-transparent min-w-[100px] border-2 border-black transition-transform transition-rotate transform z-0",
            className
         )}
         style={{ transform: `${translate} ${rotation}` }}
      >
         {children}
      </div>
   );
};

export default BannerAnimation;
