import { THelpLink } from "@/common/types/faqs";
import Link from "next/link";
import { RightArrowIconSecond } from "../icons";

type Props = {
   link: THelpLink;
   dataAos: string;
   dataAosDelay: number;
};

const FaqLinkItem = ({ link, dataAos, dataAosDelay }: Props) => {
   return (
      <Link href={link.href} data-aos={dataAos} data-aos-delay={dataAosDelay}>
         <div className="flex py-[8px] justify-between items-start w-full hover:border-b-2 hover:border-orange-600 group">
            <p className="group-hover:text-orange-600 text-[14px] font-open-sans font-normal leading-[26px] capitalize md:text-[16px]">
               {link.title}
            </p>
            <RightArrowIconSecond className="group-hover:stroke-orange-600" />
         </div>
      </Link>
   );
};

export default FaqLinkItem;
