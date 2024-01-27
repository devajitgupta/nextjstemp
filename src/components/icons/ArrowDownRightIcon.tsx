import { TIcon } from "@/common/types/common";
import clsx from "clsx";

const ArrowDownRightIcon = ({
   width = 24,
   height = 24,
   color = "white",
   className,
}: TIcon) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 10 10"
         fill="none"
      >
         <path
            d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9"
            // stroke="black"
            stroke-Lnecap="round"
            strokeLinejoin="round"
            className={clsx(className)}
         />
      </svg>
   );
};

export default ArrowDownRightIcon;
