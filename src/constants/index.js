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
    label: "Full Course Catalog",
    desc: "Comprehensive curricula from Linux training to advanced AI systems.",
  },
  {
    to: "/explore/web-development",
    label: "Modern Web Stack",
    desc: "Master JavaScript, React, and Node.js for scalable application engineering.",
  },
  {
    to: "/explore/data-science",
    label: "AI & Neural Systems",
    desc: "Deep dives into Generative AI, LLMs, and high-performance data modeling.",
  },
  {
    to: "/explore/cloud-computing",
    label: "Cloud & DevOps",
    desc: "Architecting AWS infrastructure and Kubernetes-driven GitOps workflows.",
  },
  {
    to: "/explore/ui-ux-design",
    label: "Experience Architecture",
    desc: "Synthesizing Figma mastery with cognitive psychology for intuitive UI.",
  },
];

// Navigation resource links with descriptions
export const RESOURCE_LINKS = [
  {
    to: "/resources/blog",
    label: "Tech Intelligence",
    desc: "Critical analysis of emerging tech like Rust, Go, and Edge AI.",
  },
  {
    to: "/resources/community",
    label: "Peer Network",
    desc: "Engage with a large community of learners in our developer ecosystem.",
  },
  {
    to: "/resources/success-stories",
    label: "Career Transitions",
    desc: "First-hand accounts of students moving from zero to senior roles.",
  },
  {
    to: "/resources/documentation",
    label: "Student Playbook",
    desc: "Guides for getting more value from the platform and its tooling.",
  },
];
