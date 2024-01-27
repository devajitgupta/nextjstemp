import pageTitle from "@/common/utils/page-title";
import PageHeading from "@/components/pageHeading";
import Work from "@/components/work";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.work;

const WorkPage = () => {
   return (
      <div>
         <PageHeading>How we Work</PageHeading>
         <Work />
      </div>
   );
};

export default WorkPage;
