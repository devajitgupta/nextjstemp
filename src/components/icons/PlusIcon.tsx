import { TIcon } from "@/common/types/common";

const PlusIcon = ({ width = 24, height = 24, color = "white" }: TIcon) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
      >
         <path
            d="M11.9998 4.79999L11.9998 19.2M19.1998 12L4.7998 12"
            stroke="#FF6633"
            stroke-width="2"
            stroke-linecap="round"
         />
      </svg>
   );
};

export default PlusIcon;
