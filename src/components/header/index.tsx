import { CallIcon, LocationIcon, MailIcon } from "@/components/icons";

const Header = () => {
   return (
      <header className=" bg-stone-50 border-b hidden border-stone-300 ">
         <div className="hidden md:flex flex-col sm:flex-row md:items-end gap-[5px] justify-end px-4 md:px-[50px] lg:px-[100px] py-[12px] max-w-[1440px] mx-auto">
            <div className=" flex-col md:flex-row gap-[5px] hidden md:gap-[20px] ">
               <div className="flex gap-[5px] text-[14px]">
                  <LocationIcon /> St. Katherine’s WayInternational House
               </div>
               <div className="flex gap-[5px] text-[14px] ">
                  <MailIcon /> charles@merlinhunter.com
               </div>
            </div>
            <div className="flex gap-[5px] text-center text-[14px] stroke-[#313131]">
               <CallIcon /> +44 020 3340 6070
            </div>
         </div>
      </header>
   );
};

export default Header;

// animate__fadeInUp animate__animate
