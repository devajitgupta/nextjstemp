import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface Iprops {
   card: {
      icon: ReactNode;
      title: string;
      textOne: string;
      textTwo?: string;
   };
   className?: string;
   dataAos: string;
   dataAosDelay: number;
   href: string;
}

const MobileContactCard = ({
   card: { icon, title, textOne, textTwo },
   className,
   dataAos,
   dataAosDelay,
   href,
}: Iprops) => {
   return (
      <Link
         target="blank"
         href={href}
         className={clsx(
            "flex items-center md:justify-center border border-neutral-250 p-[10px] rounded-[8px] w-full text-lato",
            className
         )}
         data-aos={dataAos}
         data-aos-delay={dataAosDelay}
      >
         <div className="flex gap-[20px] items-center">
            <div className="bg-neutral-200 rounded-full flex items-center justify-center w-[45px] h-[45px]">
               {icon}
            </div>

            <div>
               <h3 className="text-[16px] font-roboto font-bold">{title}</h3>
               <p className="text-stone-700 font-lato text-[14px]">
                  {textOne} <br /> {textTwo}
               </p>
            </div>
         </div>
      </Link>
   );
};

export default MobileContactCard;
