"use client";
import { useState } from "react";
import {
   Navbar,
   NavbarBrand,
   NavbarMenuToggle,
   NavbarMenuItem,
   NavbarMenu,
   NavbarContent,
   Link,
} from "@nextui-org/react";
import {
   CallIconNewCase,
   LocationIconNewCase,
   Logo,
   MailIconNewCase,
} from "../icons";
import { TNavlink } from "@/common/types/common";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MobileContactCard from "../new-case/ContactCard/MobileContectCard";

type Props = {
   navlinks: TNavlink[] | [];
};
export default function Mobile({ navlinks }: Props) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const pathname = usePathname();

   return (
      <Navbar
         isBordered
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
         className="md:hidden fixed h-[90px]"
      >
         <NavbarContent className="md:hidden" justify="start">
            <NavbarBrand>
               <Logo />
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="md:hidden" justify="end">
            <NavbarMenuToggle
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
         </NavbarContent>

         {/* Mobile */}
         <NavbarMenu className="mt-[25px] pt-[20px]">
            {navlinks.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`} className="py-[4px]">
                  <Link
                     className={clsx("w-full text-[20px] text-teal-950", {
                        "text-orange-650 underline": item.href === pathname,
                     })}
                     href={item.href}
                  >
                     {item.title}
                  </Link>
               </NavbarMenuItem>
            ))}
            <div className="grid mt-[10px] gap-[10px]">
               {contactDetails.map((contact: any, index) => (
                  <MobileContactCard
                     key={contact.title}
                     card={contact}
                     href={contact.href}
                     className="max-w-full"
                     dataAos="zoom-in"
                     dataAosDelay={150 * index}
                  />
               ))}
            </div>
         </NavbarMenu>
      </Navbar>
   );
}

const contactDetails = [
   {
      icon: <LocationIconNewCase />,
      title: "Location",
      textOne: " St. Katherine’s Way ",
      textTwo: "International House, LDN E1W 1YL",
      href: "https://www.google.com/maps/place/St+Katharine's+Way,+London,+UK/@51.5064904,-0.0729412,19z/data=!3m1!4b1!4m10!1m2!2m1!1sSt.+Katherine's+Way+International+House,+LDN+EIW+1+YL!3m6!1s0x487603483289ff35:0x6bdada3fe3f5b8ed!8m2!3d51.5064904!4d-0.0717235!15sCjlTdC4gS2F0aGFyaW5lJ3MgV2F5IEludGVybmF0aW9uYWwgSG91c2UsIExPTkRPTiBWSUVXIDEgWUySAQVyb3V0ZeABAA!16s%2Fg%2F1tdwddn_?entry=ttu",
   },
   {
      icon: <MailIconNewCase />,
      title: "E-mail Address",
      textOne: " charles@merlinhunter.com",
      href: "mailto:charles@merlinhunter.com",
   },
   {
      icon: <CallIconNewCase />,
      title: "Phone Number",
      textOne: "+44 020 3340 6070",
      href: "tel:+44 020 3340 6070",
   },
];
