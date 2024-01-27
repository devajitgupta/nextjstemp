import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
   navlink: {
      href: string;
      className: string;
      title: string;
      icon?: ReactNode;
   };
   active: boolean;
};

const NavItem = ({
   navlink: { href, className, title, icon },
   active,
}: Props) => {
   return (
      <li>
         <Link
            href={href}
            className={clsx(
               "hover:text-orange-650 hover:border-b-orange-650 hover:border-b-2 greenlink",
               className,
               {
                  "text-orange-650": active,
               }
            )}
         >
            {title} {icon && icon}
         </Link>
      </li>
   );
};

export default NavItem;
