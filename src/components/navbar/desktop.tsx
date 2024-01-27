"use client";
import { CallIcon, Logo } from "../icons";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import { TNavlink } from "@/common/types/common";
import Link from "next/link";

const Desktop = ({ navlinks }: { navlinks: TNavlink[] }) => {
   const pathname = usePathname();

   return (
      <nav className="border-neutral-300 fixed w-full z-20 bg-white ">
         <div className="hidden md:flex justify-between  items-center px-4 py-[20px] md:px-[50px] lg:px-[100px] font-lato drop-shadow-sm sticky max-w-[1440px] mx-auto ">
            <Link href="/">
               <Logo />
            </Link>
            <div className="md:block hidden ">
               <ul className="flex gap-[30px] text-[16px]  text-stone-700  w-full">
                  {navlinks.map((navlink) => (
                     <NavItem
                        navlink={navlink}
                        key={navlink.href}
                        active={navlink.href === pathname}
                     />
                  ))}
               </ul>
            </div>

            <div className="lg:block hidden ">
               <Link
                  href="tel:+44 020 3340 6070"
                  className="border border-orange-600 hover:bg-orange-600 rounded-full px-[20px] text-orange-600 hover:text-white py-[8px] flex items-center justify-center gap-[5px] cursor-[url(/assets/images/greenCircle.svg),_pointer] orangelink stroke-orange-600 hover:stroke-white"
               >
                  <CallIcon /> Call Now
               </Link>
               {/* <button className="border border-orange-650 text-orange-650 text-[14px] rounded-full px-[30px] py-[12px]">
               Partnership
            </button> */}
            </div>

            {/* <div onClick={handleMenuIcon} className="lg:hidden">
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
         </div> */}
         </div>
      </nav>
   );
};

export default Desktop;
