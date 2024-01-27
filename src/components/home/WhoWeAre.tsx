import { RightArrowIcon } from "../icons";

const WhoWeAre = () => {
   return (
      <div className="py-[50px] md:py-[100px] font-sans">
         <div className="grid lg:grid-cols-2 gap-[20px]">
            <div data-aos="fade-right">
               <span className="text-[14px] text-[#595959] uppercase tracking-widest">
                  Who We Are
               </span>
               <h1 className="text-[2rem] md:text-[2.8rem] font-bold max-w-[550px] leading-[46px] tracking-wide mb-[40px] font-roboto">
                  Uncovering the truth hidden beneath the surface.
               </h1>
               <button className="py-[12px] px-[30px] text-white bg-orange-600 rounded-full flex items-center gap-[10px]">
                  Learn More <RightArrowIcon width={16} height={16} />
               </button>
            </div>

            {/* Left section */}
            <div
               className="flex flex-col text-[16px] gap-[30px] text-[#404040] font-lato pt-[50px] md:p-0"
               data-aos="fade-left"
            >
               <p>
                  Merlin, Hunter & Associates is a private non-governmental
                  intelligence agency located in the heart of London’s financial
                  district
               </p>
               <p>
                  We house a small team of ethical and professional
                  investigators, journalist and intelligence analyst that have
                  comprehensive experience in dealing with complex civil and
                  arbitrary cases.
               </p>
               <p>
                  We provide confidential intelligence gathering and
                  investigative services to high net worth individuals,
                  businesses and law firms worldwide.
               </p>
            </div>
         </div>
      </div>
   );
};

export default WhoWeAre;
