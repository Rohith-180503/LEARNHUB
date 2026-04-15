/**
 * Application-wide constants
 */

// Cart anchor for smooth scrolling to cart section
export const CART_ANCHOR = "learning-cart";

// Application theme storage key
export const THEME_KEY = "theme";

// Navigation course links with descriptions
export const COURSE_LINKS = [
  {
    to: "/explore/all",
    label: "All Courses",
    desc: "Browse every program across development, data, cloud, design, and systems.",
  },
  {
    to: "/explore/web-development",
    label: "Full-Stack Development",
    desc: "Learn React, backend APIs, databases, and production-ready architecture.",
  },
  {
    to: "/explore/data-science",
    label: "AI & Data Science",
    desc: "Work with machine learning, LLM workflows, analytics, and model operations.",
  },
  {
    to: "/explore/cloud-computing",
    label: "Cloud & DevOps",
    desc: "Build skills in AWS, Kubernetes, CI/CD, observability, and automation.",
  },
  {
    to: "/explore/ui-ux-design",
    label: "UI/UX Design",
    desc: "Design user-centered products with research, prototyping, and design systems.",
  },
];

// Navigation resource links with descriptions
export const RESOURCE_LINKS = [
  {
    to: "/resources/blog",
    label: "Blog & Insights",
    desc: "Read practical articles on engineering trends, tools, and product thinking.",
  },
  {
    to: "/resources/community",
    label: "Community",
    desc: "Connect with learners, join discussions, and take part in collaborative events.",
  },
  {
    to: "/resources/success-stories",
    label: "Success Stories",
    desc: "See how learners moved into stronger roles through guided practice.",
  },
  {
    to: "/resources/documentation",
    label: "Docs & Guides",
    desc: "Find onboarding help, platform documentation, and study guidance.",
  },
];
