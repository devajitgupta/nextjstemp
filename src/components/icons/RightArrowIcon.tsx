import { TIcon } from "@/common/types/common";

const RightArrowIcon = ({
   width = 24,
   height = 24,
   color = "white",
}: TIcon) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 12 10"
         fill="none"
      >
         <path
            d="M6.83333 0.625L11 5M11 5L6.83333 9.375M11 5L1 5"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   );
};

export default RightArrowIcon;
