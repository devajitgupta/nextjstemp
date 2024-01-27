"use client";
import { getAllPosts } from "@/common/apis/post.api";
import { TPostRepository } from "@/common/types/post";
import BlogCard from "@/components/blogs/blogCard";
import Link from "next/link";
import { useState } from "react";

type Props = {
   posts: TPostRepository[] | [];
   totalCount: number;
};

const BlogsPages = ({
   posts: initialPosts,
   totalCount: initialTotalCount,
}: Props) => {
   const [allPosts, setAllPosts] = useState<TPostRepository[]>(
      initialPosts || []
   );
   const [page, setPage] = useState(1);
   const pageSize = 10;

   const handlePageChange = async (pageNumber: number) => {
      setPage(pageNumber);
      await _getAllPosts(pageNumber);
   };

   const _getAllPosts = async (currentPage: number) => {
      const { posts: tempPosts } = await getAllPosts(currentPage, pageSize);

      if (tempPosts && tempPosts.length > 0) setAllPosts(tempPosts);
   };

   const indexOfLastBlog = page * pageSize;
   const indexOfFirstBlog = indexOfLastBlog - pageSize;
   const currentBlogs = allPosts.slice(indexOfFirstBlog, indexOfLastBlog);
   const totalPages = Math.ceil(initialTotalCount / pageSize);

   return (
      <div className="">
         <div className="md:px-[80px] grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] justify-between md:py-[50px] rounded-[10px]">
            {currentBlogs.map((post, index: number) => (
               <Link
                  key={post._id}
                  href={{
                     pathname: `/blogs/${post.slug.current}`,
                  }}
               >
                  <BlogCard
                     key={post._id}
                     post={post}
                     dataAos="fade-up"
                     dataAosDelay={100 * index}
                  />
               </Link>
            ))}
         </div>
         <div className="flex justify-center pb-[50px]">
            {Array.from({ length: totalPages }, (_, index) => (
               <button
                  key={index + 1}
                  className={`mx-2 w-[40px] h-[40px] ${
                     page === index + 1
                        ? "bg-teal-900 text-white"
                        : "border border-gray-300 rounded-[68px]"
                  } rounded-full focus:outline-none`}
                  onClick={() => handlePageChange(index + 1)}
               >
                  {index + 1}
               </button>
            ))}
         </div>
      </div>
   );
};

export default BlogsPages;
