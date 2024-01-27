"use client";
import { TPostRepository } from "@/common/types/post";
import Image from "next/image";
import * as DateFns from "date-fns";
import { urlFor } from "@/common/utils/sanity";

export interface IProps {
   post: TPostRepository;
   dataAos?: string;
   dataAosDelay?: number;
}

export const BlogCard = ({ post, dataAos, dataAosDelay }: IProps) => {
   return (
      <div
         data-aos={dataAos}
         data-aos-delay={dataAosDelay}
         className="h-full pb-[50px]  p-1  overflow-hidden rounded-[4px] flex flex-1 flex-col justify-between  transform transition duration-500 hover:scale-105"
      >
         <Image
            src={urlFor(post?.mainImage).url() || "/assets/images/divorce.png"}
            alt={post.title}
            width={453}
            height={296}
            className="w-full opacity-100 transition duration-300 ease-in-out hover:opacity-80"
         />
         <h3 className=" text-zinc-850 text-wrap justify-start  font-roboto text-[30px] font-bold leading-normal">
            {post.title}
         </h3>
         <p className="py-[10px] text-[14px] text-pretty  justify-start not-italic font-lato leading-normal text-stone-700">
            {post.description}
         </p>

         <div className="flex">
            <p className="text-[14px] justify-start text-gray-400 font-lato ">
               {DateFns.format(post.publishedAt, "dd MMM yyyy")}
            </p>
         </div>
      </div>
   );
};
export default BlogCard;
