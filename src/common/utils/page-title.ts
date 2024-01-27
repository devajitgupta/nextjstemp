const description =
   "Merlin, Hunter & Associates is a private non-governmental intelligence agency located in the heart of London’s financial district.We house a small team of ethical and professional investigators, journalist and intelligence analyst that have comprehensive experience in dealing with complex civil and arbitrary cases. We provide confidential intelligence gathering and investigative services to high net worth individuals, businesses and law firms worldwide. ";

const title = "Merlin, Hunter & Associates";

const getTitle = (value: string) => `${value} | ${title}`;

export default {
   home: {
      title,
      description,
   },
   blogs: {
      title: getTitle("Blogs"),
      description,
   },
   blogDetails: {
      title: getTitle("Blogs Details"),
      description,
   },
   services: {
      title: getTitle("Services"),
      description,
   },
   work: {
      title: getTitle("Work"),
      description,
   },
   faqs: {
      title: getTitle("FAQs"),
      description,
   },
   newCase: {
      title: getTitle("New Case"),
      description,
   },
   privacyPolicy: {
      title: getTitle("Privacy Policy"),
      description,
   },
   termsOfServices: {
      title: getTitle("Terms of Services"),
      description,
   },
};
