import React from "react";

interface IProps {
   title: string;
   onClick?: (title: string) => void;

}

const InvestigationChip = ({ title, onClick, }: IProps) => {
   const handleClick = () => {
      if (onClick) {
        onClick(title); // Pass the title to the onClick handler
      }
    };
   return (
      <p
         className="border border-teal-950 text-teal-950 hover:text-white hover:bg-teal-950 px-[20px] py-[10px] md:px-[40px] md:py-[20px] rounded-full"
         onClick={handleClick}
         id={title}
      >
         {title}
      </p>
   );
};

export default InvestigationChip;
