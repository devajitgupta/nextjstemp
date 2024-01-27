import { TIcon } from "@/common/types/common";
import clsx from "clsx";

const SendIcon = ({ width = 20, height = 20, className }: TIcon) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="send">
            <path
               id="Vector"
               d="M18.3332 1.66675L9.1665 10.8334"
               className={clsx("stroke-white", className)}
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               id="Vector_2"
               d="M18.3332 1.66675L12.4998 18.3334L9.1665 10.8334L1.6665 7.50008L18.3332 1.66675Z"
               className={clsx("stroke-white", className)}
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
      </svg>
   );
};

export default SendIcon;
