"use client";
import CountUp from "react-countup";

const Stats = () => {
   return (
      <div className="bg-orange-600 pt-[15px] pb-[35px] ">
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-[20px]">
            <div className="    w-full px-[15px] md:px-[45px]">
               <p className="text-[62px] text-white font-bold font-roboto text-center leading-0 tracking-tight ">
                  <CountUp
                     duration={2.5}
                     end={100}
                     useEasing={false}
                     enableScrollSpy={true}
                     scrollSpyOnce={false}
                  />
                  <span
                     className="text-[42px]"
                     data-aos="zoom-in"
                     data-aos-delay="2700"
                  >
                     %
                  </span>
               </p>
               <p className="text-white font-lato text-md font-medium text-center leading-5 ">
                  Success rate in hidden asset investigations finding new
                  evidence for fair settlement.
               </p>
            </div>
            <div className="    w-full px-[15px] md:px-[45px]">
               <p className="text-[62px] text-white font-bold font-roboto text-center leading-0 tracking-tight ">
                  <CountUp
                     duration={4}
                     useEasing={false}
                     end={149}
                     enableScrollSpy={true}
                     scrollSpyOnce={false}
                  />
               </p>
               <p className="text-white font-lato text-md font-medium text-center leading-5 ">
                  Missing people cases solved.
               </p>
            </div>
            <div className="    w-full px-[15px] md:px-[45px]">
               <p className="text-[62px] text-white font-bold font-roboto text-center leading-0 tracking-tight ">
                  <CountUp
                     duration={2.5}
                     end={100}
                     useEasing={false}
                     enableScrollSpy={true}
                     scrollSpyOnce={false}
                  />
                  <span
                     className="text-[42px]"
                     data-aos="zoom-in"
                     data-aos-delay="2700"
                  >
                     +
                  </span>
               </p>
               <p className="text-white text-md font-medium font-lato text-center leading-5 ">
                  Civil litigation and arbitration investigations completed
                  across the UK, US, Kenya and Eastern Europe.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Stats;
