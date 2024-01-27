import { Bullets } from "@/components/icons";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface IProps {
   children: ReactNode;
   className?: string;
   htmlFor: string;
}

const Label = ({ children, className, htmlFor }: IProps) => {
   return (
      <div>
         <label
            htmlFor={htmlFor}
            className={clsx(
               "text-[22px] flex gap-[5px] lg:gap-[20px]",
               className
            )}
         >
            {/* <div className="pt-1">
               <Bullets />
            </div> */}
            {children}
         </label>
      </div>
   );
};

export default Label;
