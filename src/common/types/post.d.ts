export type TPostRepository = {
   _id: string;
   title: string;
   subtitle: string;
   description: any;
   slug: {
      current: string;
      _type: string;
   };
   mainImage: any;
   body: any;
   author: { name: string; image: any };
   publishedAt: Date;
};
