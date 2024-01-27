import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
   return (
      <section className="pb-[50px] md:pb-[100px]">
         <div
            className="grid  lg:grid-cols-3 gap-[20px] bg-[#FAFAFA] rounded-[10px] border border-[#D8D8D8] py-[40px] md:py-[80px] px-[30px] md:px-[60px] "
            data-aos="fade-down"
            data-aos-duration="1000"
         >
            <div className="flex flex-col gap-[20px]">
               <span
                  className="text-[16px] uppercase text-[#595959]"
                  data-aos="fade-right"
                  data-aos-duration="1000"
               >
                  Contact Us
               </span>
               <h1
                  className=" text-[2rem] md:text-[2.8rem] font-bold"
                  data-aos="fade-right"
                  data-aos-duration="1000"
               >
                  New Case
               </h1>
            </div>

            <div
               className="lg:col-start-2 lg:ps-[100px] lg:col-end-4"
               data-aos="fade-left"
               data-aos-duration="2000"
            >
               <ContactUsForm />
            </div>
         </div>
      </section>
   );
};

export default ContactUs;
