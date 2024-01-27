"use client";

import Link from "next/link";
import BlogCard from "../../blogs/blogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { TPostRepository } from "@/common/types/post";

type Props = {
   posts: TPostRepository[] | [];
};

const FromOurBlog = ({ posts }: Props) => {
   return (
      <section className="pb-[50px] md:pb-[100px]">
         <h1
            className="text-[2rem] md:text-[2.8rem] font-bold font-roboto"
            data-aos="fade-up"
         >
            From our blog
         </h1>

         {posts.length && (
            <div className="mt-[40px] from-our-blog" data-aos="fade-up">
               <Swiper
                  modules={[Pagination, A11y, Autoplay]}
                  spaceBetween={10}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay settings
                  speed={1100}
                  breakpoints={{
                     640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                     },
                  }}
               >
                  {posts.map((post) => (
                     <SwiperSlide className="min-h-[550px]" key={post._id}>
                        <Link
                           href={`/blogs/${post.slug.current}`}
                           className="link"
                        >
                           <BlogCard post={post} />
                        </Link>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         )}
      </section>
   );
};

export default FromOurBlog;
