import pageTitle from "@/common/utils/page-title";
import PrivacyPolicys from "@/components/PrivacyPolicys/PrivacyPolicys";
import Container from "@/components/container";
import PageHeading from "@/components/pageHeading";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.privacyPolicy;

const PrivacyPolicy = () => {
   return (
      <section>
         <PageHeading>Privacy Policy</PageHeading>
         <Container className="bg-white w-full">
            <PrivacyPolicys />
         </Container>
      </section>
   );
};

export default PrivacyPolicy;
