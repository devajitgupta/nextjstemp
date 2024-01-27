const HowWeWorkTimeline = () => {
   return (
      <div className="pb-[50px] md:pb-[100px] font-sans   ">
         <div className="mb-[30px]">
            <h1
               className="text-[2rem] font-bold md:text-[2.8rem] font-poppins"
               data-aos="fade-up"
               data-aos-duration="1000"
            >
               How We Work?
            </h1>
         </div>
         <div
            className="grid xl:grid-cols-5 py-[30px] md:py-[70px] h-[550px] md:h-[600px] lg:h-[650px]  overflow-auto scrollbar-hide"
            data-aos="fade-up"
            data-aos-duration="2000"
         >
            <div className="col-start-2 col-end-6">
               <div className="grid lg:grid-cols-8 ">
                  {/* Left Card */}
                  <div className="col-span-4 space-y-[40px] lg:space-y-[250px] me-[20px] lg:me-0 border-e-2 border-teal-950 pe-[40px] lg:pe-[50px] xl:pe-[75px]  ">
                     {/* Card-1 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto">
                        <div className=" px-[20px] py-[18px] lg:px-[25px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Initial Scope and Quote
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              We discuss your objectives and gather information
                              needed to provide you with a quote
                           </p>
                        </div>
                        <div className="absolute bottom-[35%]  right-[-60px] md:right-[-60px] lg:right-[-70px] xl:right-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">1</p>
                        </div>
                     </div>

                     {/* This card will desplay from mobile to medium screen*/}
                     {/* Card-2 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto lg:hidden">
                        <div className=" px-[20px] py-[18px] lg:px-[25px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Statement of work
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              After signing an NDA, we collect the detailed
                              target information and provide a SoW.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%]  right-[-60px] md:right-[-60px] lg:right-[-70px] xl:right-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">2</p>
                        </div>
                     </div>

                     {/* Card-3 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto ">
                        <div className=" px-[20px] py-[18px] lg:px-[25px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Investigation
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              Investigation is carried out by an agent, who’ll
                              be available to you throughout. Timeline of
                              investigation depends on the scope.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%]  right-[-60px] md:right-[-60px] lg:right-[-70px] xl:right-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">3</p>
                        </div>
                     </div>

                     {/* This card will desplay from mobile to medium screen*/}
                     {/* Card-4 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto lg:hidden">
                        <div className=" px-[20px] py-[18px] lg:px-[25px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Report Writeup
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              Your report will include case summary, executive
                              synopsis and further recommendation, if necessary.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%]  right-[-60px] md:right-[-60px] lg:right-[-70px] xl:right-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">4</p>
                        </div>
                     </div>

                     {/* Card-5 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto ">
                        <div className=" px-[20px] py-[18px] lg:px-[25px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Client Follow up
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              We'll schedule a debrief call to walk you through
                              the report and to answer any questions.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%]  right-[-60px] md:right-[-60px] lg:right-[-70px] xl:right-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">5</p>
                        </div>
                     </div>
                  </div>

                  {/* Right Card */}
                  <div className="col-span-4 md:ps-[50px] xl:ps-[75px] space-y-[70px] md:space-y-[250px] hidden lg:block md:mt-[200px]">
                     {/* This card will desplay above medium screen*/}
                     {/* Card-2 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] min-h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto ">
                        <div className=" px-[20px] py-[18px] lg:px-[33px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Statement of work
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              After signing an NDA, we collect the detailed
                              target information and provide a SoW.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%] right-[-60px] md:right-[-60px] lg:left-[-70px] xl:left-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">2</p>
                        </div>
                     </div>

                     {/* This card will desplay above medium screen*/}
                     {/* Card-4 */}
                     <div className=" relative flex bg-teal-950 rounded-[8px] h-[140px] sm:h-[120px] md:h-[130px] lg:h-auto ">
                        <div className=" px-[20px] py-[18px] lg:px-[33px] md:py-[30px] space-y-[10px] md:space-y-[15px]">
                           <h3 className="font-poppins font-bold text-white text-[20px] md:text-[25px]">
                              Report Writeup
                           </h3>
                           <p className="text-zinc-900 text-[14px]">
                              Your report will include case summary, executive
                              synopsis and further recommendation, if necessary.
                           </p>
                        </div>
                        <div className="absolute bottom-[35%] right-[-60px] md:right-[-60px] lg:left-[-70px] xl:left-[-95px]  grid place-items-center w-[40px]  h-[40px]  bg-teal-950 rounded-full ">
                           <p className="text-white text-[20px] font-bold">4</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowWeWorkTimeline;
