import React from "react";

const PolicyData=[
  {
    policyDate:"15th Jan 2024",
    policyContant:"This Privacy Policy describes how Merlin Hunter collects, uses and discloses information and what choices you have with respect to the information.",
    policyContant1:"When we refer to 'Merlin Hunter', we mean the Merlin Hunter entity that acts as the controller or processor of your information, as explained in more detail in the 'Identifying the Data Controller and Processor' section below.",
    policyList: [
      {
        heading:"Information we collect and its use",
        para:"Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      },
      {
        heading:"Information we collect and its use",
        para:"Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      },
      {
        heading:"Information we collect and its use",
        para:"Lorem ipsum dolor sit amet. Vel perspiciatis ipsa vel ratione repellat ut voluptatibus harum vel dolores porro et quia dolor et doloremque distinctio. Est doloremque optio et doloribus galisum eum quidem nihil aut corrupti accusamus et laborum architecto.",
      }
    ]
}
]

const PrivacyPolicys = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start my-[100px] gap-[100px]">
      <div className= "w-full">
        <div className="flex items-start flex-col gap-[15px]">
          <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-bold">
            Effective date:{PolicyData[0].policyDate}
          </h3>
          <p className="text-[14px] font-sans ">
          {PolicyData[0].policyContant}
          </p>
          <p className="text-[14px] font-sans">
          {PolicyData[0].policyContant1}
          </p>
        </div>
        <div className="flex items-start flex-col gap-[15px] py-[30px]">
        {PolicyData[0].policyList.map((item, index) => (
          <div className="my-[5px]" key={index}>
            <div className=" flex flex-row">
         <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium pr-[5px]">{index+1}.</h3>
         <h3 className="font-poppins text-[#1A1A1A] text-[16px] font-medium">{item.heading}</h3>
         </div>
         <p className="text-[14px] font-sans px-[18px]">
         {item.para}
         </p>
         </div>
        ))}
     
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicys;
