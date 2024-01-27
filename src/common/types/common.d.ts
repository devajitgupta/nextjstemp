import { ReactNode } from "react";

export type TIcon = {
   width?: number;
   height?: number;
   active?: boolean;
   color?: string;
   className?: string;
   dataAos?: string;
};

export type TNavlink = {
   title: string;
   href: string;
   className: string;
   icon: ReactNode | null;
};
