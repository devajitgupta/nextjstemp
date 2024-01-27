import { TPostRepository } from "../types/post";
import { client } from "../utils/sanity";

export const getAllPosts = async (
   page: number = 1,
   pageSize: number = 10,
   query?: string
): Promise<{ posts: TPostRepository[]; totalCount: number }> => {
   try {
      const start = (page - 1) * pageSize;
      const end = start + pageSize - 1;

      // Query for paginated posts
      const paginatedQuery = query
         ? query
         : `*[_type == 'post'] | order(publishedAt desc) [${start}...${end}] {
           _id,
           title,
           subtitle,
           author -> {
              name,
              image
           },
           slug,
           mainImage,
           description,
           publishedAt
        }`;

      // Query for total count
      const totalCountQuery = `count(*[_type == 'post'])`;

      // Execute both queries in parallel
      const [posts, totalCount] = await Promise.all([
         client.fetch<TPostRepository[]>(paginatedQuery),
         client.fetch<number>(totalCountQuery),
      ]);

      return { posts, totalCount };
   } catch (error) {
      console.error(error);
      throw error;
   }
};

export const getPostBySlug = async (
   slug: string
): Promise<TPostRepository | null> => {
   try {
      // Query for a single post based on the provided slug
      const query = `*[_type == 'post' && slug.current == $slug][0] {
         _id,
         title,
         subtitle,
         author -> {
            name,
            image
         },
         slug,
         mainImage,
         description,
         publishedAt,
         body
      }`;

      // Execute the query with the provided slug
      const post = await client.fetch<TPostRepository | null>(query, { slug });

      return post;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
