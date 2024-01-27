export type TServiceRepository = {
   _id: string;
   icon: string;
   title: string;
   description: string;
   url: {
      link: string;
      title: string;
   };
   _createdAt: Date;
   _updatedAt: Date;
};
