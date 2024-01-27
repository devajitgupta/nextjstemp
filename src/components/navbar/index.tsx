"use client";
import { DownArrowIcon } from "../icons";
import { Fragment } from "react";
import Mobile from "./mobile";
import { TNavlink } from "@/common/types/common";
import Desktop from "./desktop";

const Navbar = () => {
   return (
      <Fragment>
         <Desktop navlinks={navlinks} />
         <Mobile navlinks={navlinks} />
      </Fragment>
   );
};

export default Navbar;

const navlinks: TNavlink[] = [
   {
      title: "Home",
      href: "/",
      className: "",
      icon: null,
   },
   {
      title: "Services",
      href: "/services",
      className: "flex items-center gap-[5px]",
      // icon: <DownArrowIcon />,
      icon: null,
   },
   {
      title: "Process",
      href: "/work",
      className: "",
      icon: null,
   },
   {
      title: "FAQs",
      href: "/faq",
      className: "",
      icon: null,
   },
   {
      title: "Blogs",
      href: "/blogs",
      className: "",
      icon: null,
   },
   {
      title: "New Case",
      href: "/new-case",
      className: "",
      icon: null,
   },
];
