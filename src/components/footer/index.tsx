import { Checkbox } from "@nextui-org/react";
import Image from "next/image";
import {
   FacebookIcon,
   InstagramIcon,
   SendIcon,
   TwitterIcon,
   YoutubeIcon,
} from "../icons";
import LinkItem from "../atoms/LinkItem";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className=" object-cover bg-no-repeat bg-cover bg-[url('/assets/images/footer-bg.png')]">
         <div className="px-4 py-6 md:px-[50px] lg:px-[100px] md:pt-[40px] pb-[18px] flex flex-col gap-[30px] md:gap-[70px] max-w-[1440px] mx-auto">
            {/* Footer Cantent */}
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-white gap-[20px]">
               {/* Logo col-1 */}
               <div className="col-start-1 col-end-3 flex flex-col gap-[20px] md:gap-[40px] ">
                  <Link href="/" className="greenlink">
                     <Image
                        src={"/assets/images/brand_Logo.svg"}
                        width={172}
                        height={140}
                        alt="Logo"
                        className="w-[75px] md:w-[172px] "
                        data-aos="fade-right"
                        data-aos-once="true"
                     />
                  </Link>
                  <div
                     className="text-[14px] leading-[21px] grid gap-[20px]  text-neutral-300"
                     data-aos="fade-right"
                  >
                     <div className="space-y-[10px] ">
                        <p className="leading-[21px] ">
                           St. Katherine’s Way <br /> International House, LDN
                           E1W 1YL
                        </p>
                        <p>charles@merlinhunter.com</p>
                        <p>+44 020 3340 6070</p>
                     </div>
                     <div className="space-y-[10px]">
                        <p>
                           <span className="font-semibold text-white">
                              {" "}
                              Company Number:{" "}
                           </span>
                           15128247
                        </p>
                        <p>
                           <span className="font-semibold text-white">
                              {" "}
                              ICO Registration Number:{" "}
                           </span>
                           ZB594863 
                        </p>
                     </div>
                  </div>
               </div>

               {/* Quick Links col-2 */}
               <div className="flex flex-col items-start pt-[40px] gap-[15px] md:gap-[30px] ">
                  <h3
                     className="text-[20px] md:text-[25px] font-roboto font-bold"
                     data-aos="zoom-in"
                     data-aos-once="true"
                  >
                     Quick Links
                  </h3>
                  <div className="flex flex-col gap-[10px] md:gap-[20px]">
                     {links.quickLinks.map((link, index) => (
                        <LinkItem
                           key={link.title}
                           href={link.href}
                           title={link.title}
                           dataAos="zoom-in"
                           dataAosDelay={100 * index}
                           className="underline-offset-[3px]"
                        />
                     ))}
                  </div>
               </div>

               {/*Policies col-3 */}
               <div className="flex flex-col items-start gap-[15px] md:gap-[30px] pt-[40px]">
                  <h3
                     className="text-[20px] md:text-[25px] font-roboto font-bold"
                     data-aos="zoom-in"
                     data-aos-once="true"
                  >
                     Policies
                  </h3>
                  <div className="flex flex-col  gap-[10px] md:gap-[20px]">
                     {links.policies.map((link, index) => (
                        <LinkItem
                           key={link.title}
                           href={link.href}
                           title={link.title}
                           dataAos="zoom-in"
                           dataAosDelay={100 * index}
                           className="underline-offset-[3px]"
                        />
                     ))}
                  </div>
               </div>

               {/* Subscribe col-4 */}
               <div className=" col-start-1 col-end-3 md:col-start-1 md:col-end-5 lg:col-start-5 lg:col-end-7  flex flex-col gap-[30px] pt-[40px]">
                  <h3
                     className="text-[20px] md:text-[25px] font-roboto font-bold"
                     data-aos="fade-left"
                     data-aos-once="true"
                  >
                     Subscribe to our Newsletter
                  </h3>
                  <div
                     className="flex flex-col gap-[15px] md:gap-[30px]"
                     data-aos="fade-left"
                  >
                     <div className="flex flex-col justify-start gap-[20px]">
                        <input
                           type="email"
                           placeholder="Enter Your Email"
                           className="bg-transparent outline-none pt-[10px] pb-[12px] px-[10px] border-b border-teal-700 placeholder:text-teal-600 "
                        />

                        <div>
                           <button className="border border-teal-700 hover:text-teal-700 hover:bg-white px-[30px] py-[12px] flex items-center gap-[20px] rounded-full group transition-all duration-300 ease-in-out  greenlink">
                              Subscribe Now
                              <SendIcon className="group-hover:stroke-teal-700" />
                           </button>
                        </div>
                     </div>
                     <div className="px-[10px] text-[14px] flex items-center gap-[10px] ">
                        <Checkbox />
                        <label htmlFor="privacy">
                           I agree to the{" "}
                           <span className="underline">Privacy Policy</span>.
                        </label>
                     </div>
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[15px]">
               <div
                  className=" text-[14px] text-center text-neutral-300"
                  data-aos="fade-right"
               >
                  Copyright © Merlin, Hunter & Associates 2024. | All rights
                  reserved. | Website developed by
                  <Link
                     target="blank"
                     href="https://bytescrum.com"
                     className="greenlink hover:underline underline-offset-[5px] text-orange-600 font-roboto"
                  >
                     {" "}
                     ByteScrum Team
                  </Link>
               </div>
               <div className="flex gap-[15px]">
                  {socialLinks.map((social, index) => (
                     <Link href={social.href} key={social.href}>
                        <div
                           className="border w-[28px] h-[28px] rounded-full grid place-items-center"
                           data-aos="fade-left"
                           data-aos-delay={100 * index}
                        >
                           {social.icon}
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

const links = {
   quickLinks: [
      {
         title: "Home",
         href: "/",
      },
      {
         title: "Partnership ",
         href: "#",
      },
      {
         title: "Blogs",
         href: "/blogs",
      },
      {
         title: "Our Service",
         href: "/services",
      },
      {
         title: "Work",
         href: "/work",
      },
      {
         title: "New Case",
         href: "/new-case",
      },
   ],
   policies: [
      {
         title: "FAQs",
         href: "/faq",
      },
      {
         title: "Privacy Policy",
         href: "/privacy-policy",
      },
      {
         title: "Terms Of Service",
         href: "/terms-of-services",
      },
   ],
};

const socialLinks = [
   { href: "http://facebook.com", icon: <FacebookIcon /> },
   { href: "http://instagram.com", icon: <InstagramIcon /> },
   { href: "http://twitter.com", icon: <TwitterIcon /> },
   { href: "http://youtube.com", icon: <YoutubeIcon /> },
];
