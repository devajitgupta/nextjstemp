import { TAuthorRepository } from "@/common/types/author";
import { TServiceRepository } from "@/common/types/services";
import { client, urlFor } from "@/common/utils/sanity";
import { Avatar } from "@nextui-org/react";
import * as DateFns from "date-fns";

const Sample = async () => {
   const services: TServiceRepository[] | [] = await client.fetch<
      TServiceRepository[]
   >(`*[_type == "services"]`);

   const authors: TAuthorRepository[] | [] = await client.fetch<
      TAuthorRepository[]
   >(`*[_type == "authors"]`);

   // console.log("services", services);

   console.log("authors", authors[0].socialLinks);

   return (
      <div>
         {/* New Case */}
         <div></div>
         <div className="px-[100px] py-[50px]">
            <h1 className="text-2xl font-bold">Services</h1>
            <div className="p-5 mt-10 rounded-md flex flex-col gap-y-3 max-w-[500px]">
               {services.map((service) => (
                  <div
                     key={service._id}
                     className="border border-blue-200 p-4 rounded-md"
                  >
                     <div className="flex justify-between">
                        <h2 className="font-bold text-xl">{service.title}</h2>
                        <p className="text-sm">
                           {DateFns.format(service._createdAt, "MMMM dd, yyyy")}
                        </p>
                     </div>

                     <p className="text-[14px] mt-3">{service.description}</p>
                  </div>
               ))}
            </div>

            <h1 className="text-2xl font-bold">Authors</h1>
            <div className="p-5 mt-10 rounded-sm flex flex-col gap-y-3 max-w-[500px]">
               {authors.map((author: any) => (
                  <div
                     key={author._id}
                     className="border border-blue-200 p-4 rounded-md"
                  >
                     <div className="flex items-center gap-3 mb-3">
                        <Avatar
                           src={urlFor(author.image).width(50).height(50).url()}
                        />

                        <h2 className="font-bold text-xl">{author.name}</h2>
                     </div>
                     <p className="text-[14px]">{author.bio}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Sample;
