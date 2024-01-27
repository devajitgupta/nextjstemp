import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
   className?: string;
   children: ReactNode;
   background?: string;
};

const Container = ({ children, className, background }: Props) => {
   return (
      <section className={clsx(background)}>
         <main
            className={twMerge(
               clsx(
                  "px-[16px] md:px-[50px] lg:px-[100px] max-w-[1440px] mx-auto ",
                  className
               )
            )}
         >
            {children}
         </main>
      </section>
   );
};

export default Container;
