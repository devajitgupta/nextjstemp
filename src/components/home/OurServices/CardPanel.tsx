import { TServiceRepository } from "@/common/types/services";
import { ArrowDownRightIcon, CallIcon } from "@/components/icons";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";

type Props = {
   item: TServiceRepository;
   className?: string;
   type?: string;
};

const CardPanel = ({ item, className, type }: Props) => {
   const matches = useMediaQuery("(min-width: 768px)");

   return (
      <div
         className={clsx(
            "card-panel rounded-md shadow-md py-[20px] px-[12px] md:py-[40px] md:px-[30px] lg:px-[10px] xl:px-[30px]  text-center flex flex-col border border-[#D1D1D1] min-w-[250px] md:full font-sans  min-h-[400px] md:min-h-[550px] items-center justify-center",
            className
         )}
      >
         <div className="grid place-items-center gap-4 ">
            <div
               className={clsx(
                  "rounded-full w-[60px] h-[60px] m-auto mb-[20px] text-[2.5rem] md:text-[3.5rem] font-bold grid place-items-center font font-roboto text-teal-950  ",
                  {
                     "md:text-white":
                        type === "primaryCard" || type === "secondoryCard",
                  }
               )}
            >
               {item.icon}
            </div>
            <h1 className="text-[1.3rem] font-bold font-roboto">
               {item.title}
            </h1>
            <p className="text-[14px] mt-[10px] mb-[20px] font-lato">
               {matches
                  ? `${item.description.substring(0, 100)}...`
                  : `${item.description.substring(0, 70)}...`}
            </p>
            <div className="grid grid-cols-2   gap-[15px] md:gap-[5px] justify-between  w-full ">
               <Link
                  href="/new-case"
                  className={twMerge(
                     clsx(
                        "text-[16px] font-lato greenlink border px-[5px] py-[6px] rounded-full  min-w-fit",
                        {
                           "border-teal-600  bg-teal-600 md:bg-transparent md:hover:bg-white md:border-white md:hover:border-teal-600 text-white":
                              type === "primaryCard" ||
                              type === "secondoryCard",
                           "border-teal-600 bg-teal-600 hover:bg-white text-white hover:text-teal-600":
                              type === "realCard",
                           "text-white hover:text-teal-600":
                              type === "primaryCard",
                           "text-white hover:text-orange-600":
                              type === "secondoryCard",
                        }
                     )
                  )}
               >
                  <div className="flex items-center justify-center">
                     <span>New Case</span>
                     <span className="mt-[3px]">
                        {/* <ArrowDownRightIcon
                           height={10}
                           width={10}
                           className={clsx("stroke-teal-950", {
                              "stroke-white":
                                 type === "primaryCard" ||
                                 type === "secondoryCard",
                           })}
                        /> */}
                        <Icon
                           icon="basil:arrow-down-outline"
                           className="rotate-[-135deg] text-[24px]"
                        />
                     </span>
                  </div>
               </Link>
               <Link
                  href="tel:+44 020 3340 6070"
                  className={clsx(
                     "border  rounded-full px-[5px] py-[6px] flex items-center justify-center gap-[5px] cursor-[url(/assets/images/greenCircle.svg),_pointer] min-w-fit ",
                     {
                        " bg-white hover:bg-transparent md:border-white hover:text-white hover:stroke-white greenlink":
                           type === "primaryCard" || type === "secondoryCard",
                        "hover:bg-teal-600 border-teal-600 hover:border-white text-teal-950 hover:text-white  stroke-teal-600 hover:stroke-white":
                           type === "realCard",
                        "text-teal-600 stroke-teal-600 border-teal-600":
                           type === "primaryCard",
                        "text-orange-600 stroke-orange-600":
                           type === "secondoryCard",
                     }
                  )}
               >
                  <CallIcon /> Call Now
               </Link>
            </div>
         </div>

         <p className=" hidden  text-teal-950">Hello</p>
      </div>
   );
};

export default CardPanel;
