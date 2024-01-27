"use client";
import React, { useState } from "react";
import { ContactCard, Label } from "..";
import {
   CallIconNewCase,
   LocationIconNewCase,
   MailIconNewCase,
} from "@/components/icons";
import InvestigationChip from "../InvestigationChip";
import axios from "axios";
const NewCaseForm = () => {
   const [loading, setLoading] = useState(false);
   const [submitSuccess, setSubmitSuccess] = useState(false);

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      investigationType: [] as string[], // Explicitly define as string array
      date: "",
      budget: "",
      message: "",
   });

   const handleClick = (title: string) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         investigationType: [...prevFormData.investigationType, title],
      }));
   };
   const resetForm = () => {
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         investigationType: [],
         date: "",
         budget: "",
         message: "",
      });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
         setLoading(true);

         const response = await axios.post("/api/new-case", formData);
         setSubmitSuccess(true);
         resetForm();
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className="animate__fadeInUp animate__animated animate__delay-500ms">
         {/* form */}
         <form
            className=" px-4 py-6 md:px-[50px] lg:px-[100px]  flex flex-col gap-[30px] md:gap-[80px]"
            onSubmit={handleSubmit}
         >
            <div className="flex flex-col gap-[30px] md:gap-[80px]">
               {/* Persnol Details */}
               <div className="flex flex-col lg:flex-row gap-[20px] justify-between ">
                  <Label htmlFor="personalDetails" className="pt-[20px]">
                     {" "}
                     Personal Details
                  </Label>
                  <div className="w-full ps-[30px] lg:w-7/12">
                     <div className="flex flex-col gap-[10px]">
                        <input
                           type="text"
                           id="firstName"
                           placeholder="First Name"
                           className="border-b placeholder:text-black outline-none border-neutral-500 text-[32px] md:text-[46px]"
                           required
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 firstName: e.target.value,
                              })
                           }
                        />
                        <input
                           type="text"
                           id="lastName"
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 lastName: e.target.value,
                              })
                           }
                           placeholder="Last Name"
                           className="border-b placeholder:text-black outline-none border-neutral-500 text-[32px] md:text-[46px]"
                           required
                        />
                        <input
                           type="email"
                           id="email"
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 email: e.target.value,
                              })
                           }
                           placeholder="E-Mail"
                           className="border-b placeholder:text-black outline-none border-neutral-500 text-[32px] md:text-[46px]"
                           required
                        />
                        <input
                           type="tel"
                           id="phone"
                           value={formData.phone}
                           onChange={(e) =>
                              setFormData({
                                 ...formData,
                                 phone: e.target.value,
                              })
                           }
                           placeholder="Phone"
                           className="border-b placeholder:text-black outline-none border-neutral-500 text-[32px] md:text-[46px]"
                           required
                        />
                     </div>
                  </div>
               </div>

               {/* Investigation Details */}
               <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
                  <Label htmlFor="investigationDetails">
                     Which Type of Investigation <br />
                     Are you interested in?
                  </Label>

                  <div className="flex flex-wrap ps-[30px] w-full lg:w-7/12  gap-[10px] md:gap-[30px]">
                     {investigationOption.map((option: any, index: number) => (
                        <InvestigationChip
                           key={index}
                           title={option}
                           onClick={handleClick}
                        />
                     ))}
                  </div>
               </div>

               {/* Date */}
               <div className="flex flex-col md:flex-row gap-[20px] justify-between">
                  <Label htmlFor="date">Preferred Date</Label>
                  <div className="w-full ps-[30px] md:w-7/12">
                     <div className="border w-fit px-[20px] py-[5px] rounded-[8px] border-stone-300">
                        <input
                           id="date"
                           type="date"
                           onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                           }
                           className=" placeholder:text-black outline-none border-neutral-500 text-[20px] md:text-[25px]"
                        />
                     </div>
                  </div>
               </div>
               {/* Budget */}
               <div className="flex flex-col md:flex-row gap-[20px] justify-between">
                  <Label htmlFor="budget"> Your Budget</Label>
                  <div className="w-full ps-[30px] md:w-7/12">
                     <input
                        type="text"
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                           setFormData({ ...formData, budget: e.target.value })
                        }
                        placeholder="Your Budget"
                        className="border-b w-full placeholder:text-black outline-none border-neutral-500 text-[32px] md:text-[46px]"
                     />
                  </div>
               </div>
               {/* message */}
               <div className="flex flex-col md:flex-row gap-[20px] justify-between">
                  <Label htmlFor="query"> Enter Your Querry</Label>
                  <div className="w-full ps-[30px] md:w-7/12">
                     <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                           setFormData({ ...formData, message: e.target.value })
                        }
                        cols={50}
                        rows={1}
                        placeholder="Message"
                        className="border-b  resize-none outline-none w-full placeholder:text-black border-neutral-500 text-[32px] md:text-[46px]"
                     ></textarea>
                  </div>
               </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[10px] justify-center items-center md:justify-end md:ps-[50px]">
               <div className="lg:w-7/12">
                  <button
                     type="submit"
                     className="border text-white px-[25px] md:px-[40px] py-[15px] md:py-[20px] rounded-full bg-teal-950"
                  >
                     {loading ? "Submitting..." : "Submit Your Message"}
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default NewCaseForm;
const investigationOption = [
   "Missing Persons",
   "Fraud",
   "Unknown Death",
   "Hacking",
   "Harassment",
   "Romance Scam",
];
