"use client";
import { TServiceRepository } from "@/common/types/services";
import ServicesCarousel from "./ServicesCarousel";
import SwiperCarousel from "./SwiperCarousel";
import { useState, useEffect, Fragment } from "react";
import { useMediaQuery } from "usehooks-ts";

const services: TServiceRepository[] = [
   {
      _id: "Address trace",
      title: "Address trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Revenge Porn Investigation",
      title: "Revenge Porn Investigation",
      description:
         "Revenge porn is the act of sharing explicit images or videos of someone without their consent, often with the intent to humiliate or embarrass them. It is a serious crime that can have a devastating impact on the victim.",
      icon: "10",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "11",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Social Media Investigation",
      title: "Social Media Investigation",
      description:
         "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
      icon: "12",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Infidelity Investigations",
      title: "Infidelity Investigations",
      description:
         "Infidelity investigation is the process of gathering evidence to prove that a person is cheating on their partner. It can be conducted by a private investigator, or by the person themselves if they have the time and resources",
      icon: "7",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Cyberstalking Investigation",
      title: "Cyberstalking Investigation",
      description:
         "Cyber stalking can have a devastating impact on victims, causing them emotional distress, fear, and anxiety. It can also damage their reputation and make it difficult for them to live their lives normally.",
      icon: "8",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Catfish Investigation",
      title: "Catfish Investigation",
      description:
         "A catfish investigation is a type of investigation that aims to identify and expose individuals who are using the internet to create fake online personas.",
      icon: "9",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Child Custody Investigation",
      title: "Child Custody Investigation",
      description:
         "A child custody investigation is a type of investigation that aims to gather information about the ability of a parent or other adult to provide a child with safe, adequate, and appropriate care.",
      icon: "4",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Financial Investigation",
      title: "Financial Investigation",
      description:
         "An embezzlement investigation is the process of gathering evidence to determine whether an individual has embezzled funds or assets from an organisation. Embezzlement is a type of white-collar crime that involves the fraudulent misappropriation of property or entrusted funds.",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Stolen Vehicle Investigations",
      title: "Stolen Vehicle Investigations",
      description:
         "The goal in a stolen vehicle investigation is to locate and recover the vehicle and identify and apprehend the perpetrators. To do this, you should follow these steps:",
      icon: "6",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
];

const servicesTablet: TServiceRepository[] = [
   {
      _id: "Stolen Vehicle Investigations",
      title: "Stolen Vehicle Investigations",
      description:
         "The goal in a stolen vehicle investigation is to locate and recover the vehicle and identify and apprehend the perpetrators. To do this, you should follow these steps:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Address trace",
      title: "Address trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "11",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "12",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Revenge Porn Investigation",
      title: "Revenge Porn Investigation",
      description:
         "Revenge porn is the act of sharing explicit images or videos of someone without their consent, often with the intent to humiliate or embarrass them. It is a serious crime that can have a devastating impact on the victim.",
      icon: "9",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "10",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Social Media Investigation",
      title: "Social Media Investigation",
      description:
         "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
      icon: "7",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Infidelity Investigations",
      title: "Infidelity Investigations",
      description:
         "Infidelity investigation is the process of gathering evidence to prove that a person is cheating on their partner. It can be conducted by a private investigator, or by the person themselves if they have the time and resources",
      icon: "8",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Cyberstalking Investigation",
      title: "Cyberstalking Investigation",
      description:
         "Cyber stalking can have a devastating impact on victims, causing them emotional distress, fear, and anxiety. It can also damage their reputation and make it difficult for them to live their lives normally.",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Catfish Investigation",
      title: "Catfish Investigation",
      description:
         "A catfish investigation is a type of investigation that aims to identify and expose individuals who are using the internet to create fake online personas.",
      icon: "6",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Child Custody Investigation",
      title: "Child Custody Investigation",
      description:
         "A child custody investigation is a type of investigation that aims to gather information about the ability of a parent or other adult to provide a child with safe, adequate, and appropriate care.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Financial Investigation",
      title: "Financial Investigation",
      description:
         "An embezzlement investigation is the process of gathering evidence to determine whether an individual has embezzled funds or assets from an organisation. Embezzlement is a type of white-collar crime that involves the fraudulent misappropriation of property or entrusted funds.",
      icon: "4",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
];

const servicesMobile: TServiceRepository[] = [
   {
      _id: "Stolen Vehicle Investigations",
      title: "Stolen Vehicle Investigations",
      description:
         "The goal in a stolen vehicle investigation is to locate and recover the vehicle and identify and apprehend the perpetrators. To do this, you should follow these steps:",
      icon: "1",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Address trace",
      title: "Address trace",
      description:
         "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation. Some common methods include:",
      icon: "12",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Hidden Asset ",
      title: "Hidden Asset Searches",
      description:
         "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
      icon: "11",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Fact Finding Investigation",
      title: "Fact Finding Investigation",
      description:
         "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
      icon: "10",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Revenge Porn Investigation",
      title: "Revenge Porn Investigation",
      description:
         "Revenge porn is the act of sharing explicit images or videos of someone without their consent, often with the intent to humiliate or embarrass them. It is a serious crime that can have a devastating impact on the victim.",
      icon: "9",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Background Checks",
      title: "Background Checks",
      description:
         "A background check is a process that verifies an individual's personal and professional information. ",
      icon: "8",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Social Media Investigation",
      title: "Social Media Investigation",
      description:
         "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
      icon: "7",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Infidelity Investigations",
      title: "Infidelity Investigations",
      description:
         "Infidelity investigation is the process of gathering evidence to prove that a person is cheating on their partner. It can be conducted by a private investigator, or by the person themselves if they have the time and resources",
      icon: "6",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Cyberstalking Investigation",
      title: "Cyberstalking Investigation",
      description:
         "Cyber stalking can have a devastating impact on victims, causing them emotional distress, fear, and anxiety. It can also damage their reputation and make it difficult for them to live their lives normally.",
      icon: "5",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Catfish Investigation",
      title: "Catfish Investigation",
      description:
         "A catfish investigation is a type of investigation that aims to identify and expose individuals who are using the internet to create fake online personas.",
      icon: "4",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Child Custody Investigation",
      title: "Child Custody Investigation",
      description:
         "A child custody investigation is a type of investigation that aims to gather information about the ability of a parent or other adult to provide a child with safe, adequate, and appropriate care.",
      icon: "3",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
   {
      _id: "Financial Investigation",
      title: "Financial Investigation",
      description:
         "An embezzlement investigation is the process of gathering evidence to determine whether an individual has embezzled funds or assets from an organisation. Embezzlement is a type of white-collar crime that involves the fraudulent misappropriation of property or entrusted funds.",
      icon: "2",
      url: {
         link: "/new-case",
         title: "New Case",
      },
      _createdAt: new Date(),
      _updatedAt: new Date(),
   },
];

const OurServices = () => {
   const [isLoading, setIsLoading] = useState(true);
   // const matches = useMediaQuery("(min-width: 768px)");

   const matches = true;

   useEffect(() => {
      console.log("window", window);
      if (typeof window !== "undefined") {
         setIsLoading(false);
      }
   }, []);

   return (
      <section className="overflow-hidden pb-[50px] md:pb-[100px]">
         <h1
            className="text-[2rem] md:text-[2.8rem] font-bold font-roboto"
            data-aos="fade-up"
            data-aos-duration="1000"
         >
            Services
         </h1>

         <div className="p-0 md:px-[30px] hidden xl:block m-auto pt-[60px]  ">
            <SwiperCarousel services={services} />
         </div>
         <div className="p-0 lg:px-[15px] xl:px-[30px] hidden md:block xl:hidden m-auto pt-[60px] ">
            <SwiperCarousel services={servicesTablet} />
         </div>
         <div className="p-0 md:px-[30px] md:hidden  m-auto pt-[60px] ">
            <SwiperCarousel services={servicesMobile} />
         </div>
      </section>
   );
};

export default OurServices;

// {matches ? (
//    <div className="p-0 md:px-[30px] m-auto">
//       <SwiperCarousel services={services} />
//    </div>
// ) : (
//    <Fragment>
//       {!isLoading && <ServicesCarousel services={services} />}
//    </Fragment>
// )}
