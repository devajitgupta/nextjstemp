export type TAuthorSocialLinks = {
   platform: string;
   url: string;
   _key: string;
};

export type TAuthorRepository = {
   _id: string;
   name: string;
   bio: string;
   image: any;
   socialLinks: TAuthorSocialLinks[] | [];
   _createdAt: Date;
   _updatedAt: Date;
};
