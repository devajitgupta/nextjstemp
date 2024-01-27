import { getPostBySlug } from "@/common/apis/post.api";
import { TPostRepository } from "@/common/types/post";
import pageTitle from "@/common/utils/page-title";
import { urlFor } from "@/common/utils/sanity";
import { Metadata } from "next";
import Image from "next/image";
import * as DateFns from "date-fns";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";
import PortableText from "react-portable-text";
import config from "@/common/utils/config";

export const metadata: Metadata = pageTitle.blogDetails;

async function fetchData(context: any) {
   const slug = context.params.slug;

   return slug;
}

const BlogDetails = async (context: any) => {
   const slug = await fetchData(context);

   const post: TPostRepository | null = await getPostBySlug(slug);

   if (!post)
      return (
         <div className="min-h-[50vh] flex items-center justify-center">
            <h1 className="text-3xl font-bold">
               <span className="text-orange-600">404 😑</span> Post Unavailable!
            </h1>
         </div>
      );

   return (
      <section className="py-[20px]">
         <div className="px-4 py-6 md:px[50px] lg:px-[100px] lg:py-[80px] border max-w-[1168px] m-auto">
            <p className="tex-[16px] justify-start text-stone-500">
               {DateFns.format(post.publishedAt, "dd MMM yyyy")}
            </p>
            <h3 className=" text-black justify-start font-poppins text-[35px] font-bold leading-normal">
               {post?.title}
            </h3>
            <div className="flex flex-row ">
               <div className="w-3/12 flex">
                  <div>
                     <p className="tex-[16px] justify-start text-orange-650">
                        {post.author.name}
                     </p>
                  </div>
               </div>
               <span className=" font-bold w-[3%] ">|</span>

               <div className="flex justify-between  w-9/12">
                  <div className="">
                     <p className="font-bold leading-[26px] font-openSans">
                        Stand:
                        <span className="text-stone-600 font-normal text-[16px] font-openSans leading-[26px]">
                           B2844
                        </span>
                     </p>
                  </div>

                  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[10px]">
                     <div className="flex  font-bold">
                        Share:
                        <div className="flex gap-[10px] items-center">
                           <FacebookIcon color={"black"} />
                           <InstagramIcon color={"black"} />
                           <TwitterIcon color={"black"} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="py-[20px]">
               <Image
                  src={urlFor(post?.mainImage).url()}
                  alt={post.title}
                  width={808}
                  height={505}
                  className=" w-full"
               />
            </div>
            <h3 className="py-[20px] text-zinc-950 justify-start font-poppins text-[30px] font-bold leading-normal">
               {post.title}
            </h3>
            <p className="pb-[10px]">{post.description}</p>

            {/* Main content */}
            <div className="mt-5 font-sans">
               <PortableText
                  dataset={config.dataset}
                  projectId={config.projectId}
                  content={post.body}
                  serializers={{
                     h1: (props: any) => (
                        <h1
                           className="text-3xl my-5 font-bold font-poppins"
                           {...props}
                        />
                     ),
                     h2: (props: any) => (
                        <h2
                           className="text-2xl my-5 font-semibold font-poppins"
                           {...props}
                        />
                     ),
                     h3: (props: any) => (
                        <h2
                           className="text-xl my-5 font-medium font-poppins"
                           {...props}
                        />
                     ),
                     normal: (props: any) => (
                        <p className="text-lg my-5" {...props} />
                     ),
                     ul: ({ children }: any) => (
                        <div className="px-2 border rounded-lg">
                           <ul className="list-disc text-lg px-8 py-3">
                              {children}
                           </ul>
                        </div>
                     ),
                     li: ({ children }: any) => (
                        <li className="mt-3 px-2">{children}</li>
                     ),
                     link: ({ href, children }: any) => (
                        <a
                           href={href}
                           className="text-blue-500 hover:underline"
                           target="_blank"
                        >
                           {children}
                        </a>
                     ),
                  }}
               />
            </div>
         </div>
      </section>
   );
};

export default BlogDetails;
