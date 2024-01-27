import Container from "@/components/container";
import {
   HomeBanner,
   OurServices,
   WhoWeAre,
   HowWeWorkTimeline,
   ContactUs,
   FromOurBlog,
   Sponsors,
   NewHomeBanner,
} from "@/components/home";
import { Metadata } from "next";
import pageTitle from "@/common/utils/page-title";
import { getAllPosts } from "@/common/apis/post.api";
import NewTimeLine from "@/components/home/NewTimeline";

export const metadata: Metadata = pageTitle.home;

const HomePage = async () => {
   const { posts } = await getAllPosts(1, 10);

   return (
      <div className="min-h-[90vh]  bg-[#F3F3F3]">
         {/* <HomeBanner /> */}
         <NewHomeBanner />
         <Container>
            <WhoWeAre />
            <OurServices />
            {/* <HowWeWorkTimeline /> */}
            <NewTimeLine />
         </Container>

         <div className="bg-[#F6F6F6]">
            <Container>
               <ContactUs />
               <FromOurBlog posts={posts} />
            </Container>
            <Sponsors />
         </div>
      </div>
   );
};

export default HomePage;
