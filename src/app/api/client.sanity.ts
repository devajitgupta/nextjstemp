import { createClient } from "next-sanity";
import config from "@/common/utils/config";

const client = createClient({
   projectId: config.projectId,
   dataset: config.dataset,
   apiVersion: config.apiVersion,
   useCdn: true,
   token: config.token,
});

export { client };
