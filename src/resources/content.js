import { Logo } from "@once-ui-system/core";

const company = {
  name: "Stratus Interactive",
  tagline: "Intelligent tools for the future of productivity.",
  description: "Stratus Interactive is building AI-first software and hardware that transforms how people think, plan, and execute.",
  founded: "2024",
  focus: "AI + Hardware Integration",
  vision: "Amplify human creativity through intuitive tools",
  email: "stratusfeedback@gmail.com", // updated email
  location: "America/New_York", // Using proper timezone identifier for TimeDisplay component
  // Additional properties for compatibility with existing pages
  avatar: "/images/Logos/Light-Logo.png",
  role: "AI-First Technology Company",
  languages: ["English"], // Company languages
};

const newsletter = {
  display: true,
  title: <>Join the Stratus Interactive Newsletter</>,
  description: (
    <>
      Stay updated on our latest developments, product launches, and insights into the future of AI-powered productivity.
    </>
  ),
};

const social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/stratusinteractive",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://facebook.com/stratusinteractive",
  },
  {
    name: "X",
    icon: "x", // Using the proper X icon from icons.ts
    link: "https://x.com/stratus_ai",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/stratus-interactive",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${company.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/gallery/Mulit Screen Demo.png",
  label: "Home",
  title: `${company.name} - Intelligent tools for the future of productivity`,
  description: `${company.description}`,
  headline: <>{company.tagline}</>,
  featured: {
    display: true,
    title: <>Featured: <strong className="ml-4">Stratus Productivity</strong></>,
    href: "/productivity",
  },
  subline: (
    <>
      We're an AI software and hardware company focused on creating intelligent solutions that enhance human capability and workflow efficiency. Our products are designed to feel natural, intuitive, and deeply integrated into your life.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${company.name}`,
  description: `Learn about ${company.name}'s mission to transform productivity through AI-first design`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Stratus Interactive",
    description: (
      <>
        At Stratus Interactive we are working towards building the future of personal and professional productivity — starting with intelligent software and hardware that think with you. We create AI-first systems designed to integrate seamlessly into your life and enhance how you plan, work, and grow.<br /><br />
        At the heart of our vision is Skye, your personalized AI assistant, built to adapt to your needs, understand your habits, and empower your goals. Whether you’re organizing your day or coordinating your team, Stratus makes it feel effortless — like it was built just for you.<br /><br />
        We believe great technology should serve people — not overwhelm them.
      </>
    ),
  },
  work: {
    display: false,
    title: "Company Overview",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Innovation Pillars",
    institutions: [
      {
        name: "AI-First Design",
        description: <>We lead with AI — integrating intelligence from the ground up to create tools that anticipate your needs and streamline your workflows.</>,
      },
      {
        name: "Productivity-Centered Innovation",
        description: <>Everything we build puts productivity first. Our products are designed to make your life easier — not more complex.</>,
      },
      {
        name: "Hardware Integration",
        description: <>At Stratus we build more than software. Our long-term roadmap includes seamless integration with personal AI servers, smart devices, and next-gen input systems.</>,
      },
      {
        name: "Scalable Architecture",
        description: <>Built for longevity. Our products evolve with your goals and the world around you — modular, adaptable, and ready for the future.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Technologies",
    skills: [
      {
        title: "AI & Machine Learning",
        description: <>From natural language understanding to dynamic scheduling, our AI models — including our assistant Skye — are designed to think like a partner, not just a processor.</>,
        images: [
          {
            src: "/images/Skye/Skye.png",
            alt: "Skye AI Assistant",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Productivity Software",
        description: <>Stratus Productivity is the first product in our ecosystem. It’s more than a todo list — it’s a life organizer that feels as intuitive and useful.</>,
        images: [
          {
            src: "/images/gallery/Mulit Screen Demo.png",
            alt: "Stratus Productivity Multi Screen Demo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Personal AI Infrastructure (Coming Soon)",
        description: <>We’re pioneering personal AI servers that keep your data private, contextual, and accessible across all your devices — for a truly tailored and intelligent experience.</>,
        images: [],
      },
    ],
  },
};

const productivity = {
  path: "/productivity",
  label: "Stratus Productivity",
  title: "Stratus Productivity – AI-Powered Productivity App",
  description: "Our flagship AI-powered productivity app that reimagines how you organize thoughts, manage tasks, and maintain focus.",
  // Create new project pages by adding a new .mdx file to app/productivity/posts
  // All features will be listed on the /productivity route
};

const vision = {
  path: "/vision",
  label: "Our Vision",
  title: "Vision – The Future of AI-Powered Productivity",
  description: "Explore our roadmap for building a comprehensive AI ecosystem that transforms how people live and work.",
  // Create new vision posts by adding a new .mdx file to app/vision/posts
  // All vision content will be listed on the /vision route
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights & Updates",
  description: `Read about ${company.name}'s latest developments, product insights, and thoughts on the future of productivity`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${company.name}`,
  description: `Products and projects by ${company.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Product Gallery – ${company.name}`,
  description: `A showcase of ${company.name}'s products and interfaces`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/product-1.jpg",
      alt: "Stratus Productivity Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/product-2.jpg",
      alt: "AI Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/product-3.jpg",
      alt: "Hardware Prototype",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/product-4.jpg",
      alt: "Mobile App Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/product-5.jpg",
      alt: "Desktop Application",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/product-6.jpg",
      alt: "AI Assistant Interface",
      orientation: "vertical",
    },
  ],
};

const routes = {
  "/": home,
  "/about": about,
  "/productivity": productivity,
  "/vision": vision,
  "/blog": blog,
  "/privacy": true, // Enable privacy policy route
  // Removed work and gallery from exported routes
};

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://stratusinteractive.com";

// Create person reference for compatibility
const person = company;

export {
  company,
  person,
  newsletter,
  social,
  home,
  about,
  productivity,
  vision,
  blog,
  work,
  gallery,
  routes,
  baseURL,
};
