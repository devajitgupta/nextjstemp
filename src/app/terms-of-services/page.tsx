import pageTitle from "@/common/utils/page-title";
import Container from "@/components/container";
import PageHeading from "@/components/pageHeading";
import TermOfServices from "@/components/termService";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.termsOfServices;

const TermsOfServicesPage = () => {
   return (
      <section>
         <PageHeading>Terms of Services</PageHeading>
         <Container className="bg-white w-full">
            <TermOfServices />
         </Container>
      </section>
   );
};

export default TermsOfServicesPage;
