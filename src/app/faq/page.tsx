import { TFaq } from "@/common/types/faqs";
import pageTitle from "@/common/utils/page-title";
import Container from "@/components/container";
import { FaqContaint, FaqLinkItem } from "@/components/faq";
import { RightArrowIconSecond } from "@/components/icons";
import PageHeading from "@/components/pageHeading";
import { Metadata } from "next";
import Link from "next/link";

const faqs: TFaq[] | [] = [
   {
      heading: "How do i request for an investigation?",
      para: "You can request an investigation by filling out our Contact form or by calling us directly at the phone. Once we receive your request, we will follow up with you to discuss your case and provide you with a quote.",
      bg: "var(--Shade-Of-White-White, #FFF)",
      boxShadow: "-7px 10px 20px 0px rgba(0, 0, 0, 0.15)",
   },

   {
      heading: "How much does an investigation cost?",
      para: "The cost of an investigation depends on the type and scope of the investigation. We offer competitive pricing and will provide you with a quote before beginning any work.      ",
      bg: "white",
      boxShadow: "none",
   },

   {
      heading: "How long does an investigation take?",
      para: "The length of an investigation depends on several factors such as the type of investigation, the complexity of the case, and the availability of information. We will provide you with an estimated timeline for your investigation once we have all the necessary information.      ",
      bg: "white",
      boxShadow: "none",
   },

   {
      heading: "What is your experience in investigations?",
      para: "Our team has years of experience in investigations and our investigators have corporate investigation experience. We have worked on a variety of cases and have the expertise to handle even the most complex investigations.      ",
      bg: "white",
      boxShadow: "none",
   },

   {
      heading: "What areas do you serve?",
      para: "We offer our services nationwide and worldwide. Our team is also available to travel internationally if necessary and have representative agents in most countries with the exception of where investigations are illegal, this includes China, Russia, Japan and North Korea.      ",
      bg: "white",
      boxShadow: "none",
   },

   {
      heading: "How can I pay for your services?",
      para: "We will provide you with payment instructions once we have agreed upon the scope and cost of your investigation. All consultations pre investigations are free and without obligation.      ",
      bg: "white",
      boxShadow: "none",
   },
];

type THelpLink = { title: string; href: string };

const links: THelpLink[] = [
   {
      title: "Our Service",
      href: "/services",
   },
   {
      title: "Blogs",
      href: "/blogs",
   },

   {
      title: "Work",
      href: "/work",
   },
   {
      title: "New Case",
      href: "/new-case",
   },
   {
      title: "Privacy Policy",
      href: "/privacy-policy",
   },
   {
      title: "Terms Of Service",
      href: "/terms-of-services",
   },
];

export const metadata: Metadata = pageTitle.faqs;

const FAQsPage = () => {
   return (
      <section>
         <PageHeading>Frequently Asked Questions</PageHeading>

         <Container
            background="bg-stone-200"
            className="w-full grid grid-cols-1 md:grid-cols-12 py-[50px]  gap-y-[40px] gap-[20px] lg:gap-[40px]"
         >
            {/* Help Links */}
            <div className="md:col-span-4 xl:px-[20px] flex justify-center h-fit">
               <div
                  className="flex px-[20px] lg:px-[40px] py-[30px] flex-col bg-white rounded-[8px] w-full"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
               >
                  <h3
                     className="text-[18px] font-bold font-poppins leading-normal  md:text-[20px]"
                     style={{ letterSpacing: "0.4px" }}
                  >
                     Help Links
                  </h3>
                  <div className="mt-[10px] w-full pl-[10px]">
                     {links.map((link, index) => (
                        <FaqLinkItem
                           link={link}
                           key={link.title}
                           dataAos="zoom-in"
                           dataAosDelay={100 * index}
                        />
                     ))}
                  </div>
               </div>
            </div>

            {/* FAQs questions */}
            <div className="flex flex-col gap-[20px] w-full  md:col-span-8">
               <FaqContaint faqs={faqs} />
            </div>
         </Container>
      </section>
   );
};

export default FAQsPage;
