import React from "react";
interface Props{
   color?:string;
}
const instagram = ({color="white"}:Props) => {
   return (
      <svg
         width="14"
         height="14"
         viewBox="0 0 14 14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="instagram">
            <path
               id="Vector"
               d="M9.7453 1.51001H4.25511C2.73903 1.51001 1.51001 2.73903 1.51001 4.25511V9.7453C1.51001 11.2614 2.73903 12.4904 4.25511 12.4904H9.7453C11.2614 12.4904 12.4904 11.2614 12.4904 9.7453V4.25511C12.4904 2.73903 11.2614 1.51001 9.7453 1.51001Z"
               stroke={color}
               strokeWidth="0.878049"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               id="Vector_2"
               d="M9.19641 6.65447C9.26416 7.11139 9.18612 7.57804 8.97337 7.98805C8.76063 8.39805 8.42402 8.73054 8.01142 8.93821C7.59882 9.14589 7.13124 9.21817 6.67519 9.14479C6.21914 9.0714 5.79785 8.85608 5.47122 8.52946C5.1446 8.20284 4.92928 7.78154 4.8559 7.32549C4.78251 6.86944 4.8548 6.40186 5.06247 5.98926C5.27014 5.57666 5.60263 5.24005 6.01264 5.02731C6.42264 4.81456 6.88929 4.73652 7.34621 4.80427C7.81229 4.87339 8.24378 5.09057 8.57695 5.42374C8.91011 5.7569 9.1273 6.18839 9.19641 6.65447Z"
               stroke={color}
               strokeWidth="0.878049"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               id="Vector_3"
               d="M10.0195 3.98096H10.027"
               stroke={color}
               strokeWidth="0.878049"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
      </svg>
   );
};

export default instagram;
