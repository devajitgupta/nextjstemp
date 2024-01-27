import pageTitle from "@/common/utils/page-title";
import {
   CallIconNewCase,
   LocationIconNewCase,
   MailIconNewCase,
} from "@/components/icons";
import { ContactCard, NewCaseForm } from "@/components/new-case";
import { Metadata } from "next";
import Container from "@/components/container";
import PageHeading from "@/components/pageHeading";

export const metadata: Metadata = pageTitle.newCase;

const NewCasePage = async () => {
   return (
      <section>
         {/* Heading */}
         {/* <div className="bg-stone-100">
            {" "}
            <div className=" px-4 py-6 md:px-[50px] lg:px-[100px] md:py-[50px] animate__animated animate__fadeIn max-w-[1440px] mx-auto">
               <h1 className="text-teal-950 text-[36px] lg:text-[55px] font-bold animate__fadeInUp animate__animated animate__delay-500ms">
                  Hey There
               </h1>
               <p className="animate__zoomIn animate__animated animate__delay-800ms">
                  HOW CAN WE HELP YOU?
               </p>
            </div>
         </div> */}
         <PageHeading className="text-start">
            {" "}
            Hey There
            <p className="text-[14px]">¿HOW CAN WE HELP YOU?</p>
         </PageHeading>
         <div className="max-w-[1440px] mx-auto">
            <div className="px-4 py-6 md:px-[50px] lg:px-[100px] md:pt-[60px] md:pb-[80px] ">
               <p className="animate__fadeInUp animate__animated animate__delay-500ms">
                  Fill out some info and we will be in touch shortly! We can't
                  wait to hear from you!
               </p>
            </div>
         </div>

         <div className="max-w-[1440px] mx-auto">
            {/* Form */}
            <NewCaseForm />

            {/* Contact Details */}

            <div className=" px-4 md:px[50px] lg:px-[100px] my-[40px] md:my-[80px]">
               <h2
                  className="text-[32px] md:text-[46px] font-bold mb-[30px] md:mb-[60px]"
                  data-aos="fade-up"
               >
                  Contact Details
               </h2>
               <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[10px] md:gap-[20px] md:justify-between">
                  {contactDetails.map((contact: any, index) => (
                     <ContactCard
                        key={contact.title}
                        card={contact}
                        className="max-w-full"
                        dataAos="zoom-in"
                        dataAosDelay={150 * index}
                        href={contact.href}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default NewCasePage;

const contactDetails = [
   {
      icon: <LocationIconNewCase />,
      title: "Loaction",
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
