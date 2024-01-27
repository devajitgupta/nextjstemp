/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
            pathname: "**",
         },
      ],
   },
   // head: {
   //    link: [
   //       {
   //          rel: "stylesheet",
   //          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
   //       },
   //    ],
   // },
};

module.exports = nextConfig;
