import { getAllPosts } from "@/common/apis/post.api";
import pageTitle from "@/common/utils/page-title";
import BlogsPages from "@/components/blogs/blogPage";
import Container from "@/components/container";
import PageHeading from "@/components/pageHeading";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.blogs;

const BlogsPage = async () => {
   const { posts, totalCount } = await getAllPosts();

   return (
      <section>
         <PageHeading>Our Blogs</PageHeading>
         <Container>
            <BlogsPages posts={posts} totalCount={totalCount} />
         </Container>
      </section>
   );
};

export default BlogsPage;
