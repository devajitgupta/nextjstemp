interface IProps {
    width?: number;
    height?: number;
    // active?: boolean;
    // color?: string;
 }
 
 export default function PlusIcon({
    // active = false,
    width = 24,
    height = 24,
    // color,
 }: IProps) {
    // const fill = color ? color : active ? "#262626" : "#404040";
 
    return (
       <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
       >
        <path d="M11.9998 4.79999L11.9998 19.2M19.1998 12L4.7998 12" stroke="black" strokeWidth="2" strokeLinecap="round"/>
       </svg>
    );
 }
 
