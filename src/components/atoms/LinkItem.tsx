"use client";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface IProps {
   href: string;
   title: string;
   dataAos?: string;
   dataAosDelay?: number;
   className?: string;
}

const LinkItem = ({
   href,
   title,
   dataAos,
   dataAosDelay,
   className,
}: IProps) => {
   const pathname = usePathname();

   return (
      <Link
         href={href}
         className={clsx(
            "text-neutral-300 hover:text-orange-500 hover:underline hover:opacity-100 greenlink ",
            {
               "text-orange-600 underline": pathname === href,
            },
            className
         )}
         data-aos={dataAos}
         data-aos-delay={dataAosDelay}
      >
         {title}
      </Link>
   );
};

export default LinkItem;
