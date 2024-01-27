"use client";
import clsx from "clsx";
import React, { useState } from "react";

interface IProps {
   title: string;
   isChecked: boolean;
   onChange: (checked: boolean) => void;
}

const Checkbox = ({ title,isChecked,onChange  }: IProps) => {
   const handleCheckboxChange = () => {
      onChange(!isChecked);
   };
   return (
      <div className="flex min-w-[250px] w-fit  gap-[10px]">
         {" "}
         <div className="grid ">
            <input
               type="checkbox"
               title={title}
               checked={isChecked}
               onChange={handleCheckboxChange}
               className={clsx(
                  "form-checkbox outline-none w-[20px] h-[20px] rounded-[4px] "
                  //    isChecked
                  //       ? "bg-green-900 border-green-900 bg-[url('/images/icons/ckecked.svg')] bg-center bg-no-repeat bg-auto "
                  //       : " bg-white border-gray-500 "
               )}
            />
         </div>
         <p className="text-zinc-800">{title}</p>
      </div>
   );
};

export default Checkbox;
