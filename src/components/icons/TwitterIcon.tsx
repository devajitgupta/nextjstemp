import React from "react";
interface Props{
   color?:string;
}
const twitter = ({color='white'}) => {
   return (
      <svg
         width="14"
         height="14"
         viewBox="0 0 14 14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="twitter" clipPath="url(#clip0_1_1288)">
            <path
               id="Vector"
               d="M13.0391 2.05948C12.5134 2.43033 11.9313 2.71397 11.3152 2.89948C10.9846 2.51929 10.5451 2.24982 10.0563 2.12751C9.56753 2.00521 9.05297 2.03598 8.58223 2.21565C8.11149 2.39532 7.70729 2.71523 7.42429 3.1321C7.1413 3.54898 6.99316 4.04272 6.99991 4.54653V5.09555C6.03508 5.12057 5.07904 4.90659 4.21693 4.47266C3.35483 4.03874 2.61342 3.39833 2.05873 2.6085C2.05873 2.6085 -0.137346 7.54967 4.80383 9.74575C3.67314 10.5133 2.32619 10.8981 0.960693 10.8438C5.90187 13.5889 11.9411 10.8438 11.9411 4.53006C11.9406 4.37714 11.9259 4.22459 11.8972 4.07438C12.4575 3.52179 12.8529 2.8241 13.0391 2.05948V2.05948Z"
               stroke={color}
               strokeWidth="0.878049"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_1_1288">
               <rect
                  width="13.1765"
                  height="13.1765"
                  fill={color}
                  transform="translate(0.411621 0.411621)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export default twitter;
