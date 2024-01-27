import { TIcon } from "@/common/types/common";
import clsx from "clsx";

const RightArrowIconSecond = ({
   width = 24,
   height = 24,
   color = "black",
   className,
}: TIcon) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
      >
         <path
            d="M13.1667 6L19 12M19 12L13.1667 18M19 12L5 12"
            className={clsx("stroke-black", className)}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default RightArrowIconSecond;
