import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import config from "./config";

const client = createClient({
   projectId: config.projectId,
   dataset: config.dataset,
   apiVersion: config.apiVersion,
   useCdn: true,
   // token: config.token,
});

const imageClient = createClient({
   projectId: config.projectId,
   dataset: config.dataset,
   apiVersion: config.apiVersion,
   useCdn: true,
});

export { client };

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
   return builder.image(source);
}
