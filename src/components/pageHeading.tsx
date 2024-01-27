import { ReactNode } from "react";
import Container from "./container";
import clsx from "clsx";

const PageHeading = ({
   children,
   className,
}: {
   children: ReactNode;
   className?: string;
}) => {
   return (
      <Container
         background="bg-[#F1f1f1]"
         className=" py-[50px] animate__animated animate__fadeIn"
      >
         <h1
            className={clsx(
               "text-[3rem] mt-[100px] md:text-[3.438rem] font-bold font-roboto text-center animate__fadeInUp animate__animated animate__delay-500ms",
               className
            )}
         >
            {children}
         </h1>
      </Container>
   );
};

export default PageHeading;
