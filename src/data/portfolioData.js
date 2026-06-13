import iquesterLogo from "../assets/iquester-logo.png";
import rxefyLogo from "../assets/Rxefy-logo.png";
import wrappidLogo from "../assets/Wrappid-logo.png";
import resumePdf from "../assets/resume.pdf";

export const siteConfig = {
  name: "Pritam Bag",
  title: "Software Development Engineer",
  location: "Kolkata, West Bengal, India",
  currentRole: "Software Developer at Iquester Solutions LLP",
  summary:
    "I build backend systems for businesses that can't afford downtime — from custom Laravel applications and ERP integrations to multi-vendor platforms and automated workflows.",
  heroDescription:
    "Two years across enterprise backend work, framework contribution, API integrations, and deployment-sensitive software. Based in Kolkata, working where the problem is real and the solution has to survive Monday morning.",
  resumeUrl: resumePdf,
  availability:
    "Open to software engineering roles, backend-heavy freelance work, Laravel product builds, and business workflow automation projects.",
  email: "pritam02b@gmail.com",
  phone: "+91-9749594771",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pritam-bag/",
    icon: "fa-linkedin-in",
  },
  {
    label: "GitHub",
    href: "https://github.com/PritamBag",
    icon: "fa-github",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0125a00c2fbabe8208",
    icon: "fa-upwork",
  },
];

export const quickLinks = [
  {
    label: "Portfolio",
    href: "https://pritambag.in",
  },
  {
    label: "Blog",
    href: "https://nomadjourney.in",
  },
];

export const heroRoles = [
  "Laravel Engineer",
  "Enterprise App Builder",
  "WordPress Customization Specialist",
  "API Integration Developer",
];

export const skills = [
  "Laravel",
  "PHP",
  "Java",
  "React",
  "TypeScript",
  "JavaScript",
  "MySQL",
  "WordPress",
  "Dokan",
  "WooCommerce",
  "Zoho API",
  "Dolibarr",
  "Docker",
  "Git",
  "cPanel",
  "VPS",
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Front-End",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "MUI",
    ],
  },
  {
    title: "Back-End",
    items: ["Laravel (PHP)", "REST APIs", "Jobs & Queues", "Package Development"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "WordPress", "cPanel", "Docker", "VPS"],
  },
];

export const educationItems = [
  {
    title: "Master of Computer Applications",
    institute: "Techno India Hooghly",
    meta: "2022 - 2024 | CGPA - 8.71",
  },
  {
    title: "B.Sc in Mathematics",
    institute: "Barasat College",
    meta: "2018 - 2021 | CGPA - 9.10",
  },
  {
    title: "Higher Secondary",
    institute: "Bodai High School",
    meta: "2016 - 2018 | Percentage - 74.8%",
  },
  {
    title: "Secondary",
    institute: "Bodai High School",
    meta: "Passout - 2016 | Percentage - 82.28%",
  },
];

export const aboutContent = {
  title: "From Mathematics to Code That Works",
  story: [
    "I came to software the same way I approached mathematics — looking for the structure underneath the surface. My B.Sc in Mathematics at Barasat College was not a detour; it was the foundation. Numbers taught me how to break down complexity, spot patterns, and reason toward clean answers. That habit carried straight into MCA at Techno India Hooghly, where I graduated in 2024 with an 8.71 CGPA and a clear direction.",
    "In July 2024, I walked into Rxefy Tech as an intern. Within months, I was contributing to Wrappid — an in-house React-based application framework — while simultaneously building Laravel backends, publishing reusable packages, integrating Zoho Books for financial automation, and wiring WhatsApp and Messenger APIs into business operations. I also participated in architecture design: defining entity boundaries between Streamline and Business layers, building an event-driven worker system using Laravel Jobs to reduce spinup overhead, and creating a UI-driven database schema builder that let users define tables, queries, and relationships without writing raw SQL. By the time I transitioned to full-time, I had shipped production code across multi-tenant applications, Docker-monitored services, and cPanel-based deployments.",
    "In March 2026, I joined Iquester Solutions LLP to work on more operational problems — Dolibarr ERP customization, multi-vendor marketplace platforms on WordPress, custom Laravel systems, and VPS/cPanel server management. This is software that has to run reliably on a Monday morning when someone's entire business depends on it.",
    "Nearly two years in, I build systems that are readable, maintainable, and useful beyond the first sprint. I care less about clever code and more about software that survives real usage.",
    "Outside the screen, I run a food blog called Nomad Journey, where I write about recipes, food culture, and the process of making something good from scratch. The instinct is the same — working within constraints to make something that actually lands.",
  ],
  focusAreas: [
    "Enterprise Laravel applications and reusable backend modules",
    "WordPress, WooCommerce, and Dokan customization",
    "Dolibarr templates, PDF flows, upgrades, and external modules",
    "Business workflow integrations with Zoho, WhatsApp, and Messenger",
    "Deployment and server support through cPanel, VPS, and Docker-led setups",
  ],
};

export const personalHighlights = [
  {
    title: "Cooking",
    description:
      "Cooking is one of the ways I reset outside engineering. I enjoy the process of combining structure, experimentation, and patience to make something thoughtful and enjoyable.",
  },
  {
    title: "Food and Recipe Writing",
    description:
      "I have written on Nomad Journey around food, recipes, and related experiences. It is a space where I share curiosity, taste, and storytelling beyond software.",
    link: {
      label: "Visit Nomad Journey",
      href: "https://nomadjourney.in",
    },
  },
  {
    title: "Learning Through Interests",
    description:
      "My hobbies keep me observant and creative. That balance helps me approach software with a broader perspective and a more human sense of what makes products meaningful.",
  },
];

export const experienceItems = [
  {
    company: "Iquester Solutions LLP",
    role: "Software Developer",
    period: "March 2026 - Present",
    location: "Kolkata, West Bengal, India - Remote",
    logo: iquesterLogo,
    summary:
      "Working across ERP fixes, backend systems, custom platforms, and deployment-sensitive business software.",
    highlights: [
      "Fixed bugs, created templates, and performed version upgrades in Dolibarr ERP.",
      "Developed custom features and code for a multi-vendor platform using WordPress.",
      "Managed deployments and server configurations through cPanel and VPS environments.",
      "Built and maintained backend systems in Laravel, including reusable custom packages.",
    ],
    link: null,
  },
  {
    company: "Rxefy Tech Pvt Ltd",
    role: "Software Development Engineer",
    period: "July 2024 - March 2026",
    location: "Kolkata - Intern to Full-Time",
    logo: rxefyLogo,
    summary:
      "Contributed across framework work, Laravel systems, integrations, scalable backend architecture, and operational product delivery. Participated in architectural design decisions and built reusable patterns used across the product.",
    highlights: [
      "Participated in application architecture design — defining entity boundaries between Streamline entities and Business entities to enforce clean separation of concerns.",
      "Designed an event-driven worker system using Laravel Jobs and Queues to minimize worker spinup overhead and improve async processing performance.",
      "Built a UI-driven database table builder inside the application, enabling users to define DB schemas, queries, and table relationships without writing raw SQL.",
      "Contributed to Wrappid, a React-based in-house framework, improving the application builder, core packages, and styling modules.",
      "Built full-stack features in Laravel, created 5+ reusable Laravel packages for authentication, event handling, and worker spin-up patterns.",
      "Integrated Zoho Books, WhatsApp, and Messenger APIs for financial automation and messaging workflows.",
      "Worked on multi-tenant applications, Docker-monitored services, and cPanel-based deployments.",
    ],
    link: "https://rxefy.com/",
  },
  {
    company: "Wrappid",
    role: "Open Source Contributor",
    period: "August 2024 - February 2025",
    location: "India - Remote",
    logo: wrappidLogo,
    summary:
      "Contributed to packages and business modules in the Wrappid ecosystem, improving framework familiarity and collaboration discipline.",
    highlights: [
      "Worked on shared packages and business modules.",
      "Improved framework-level understanding and collaborative contribution flow.",
    ],
    link: "https://wrappid.dev/",
  },
];

export const architectureHighlights = [
  {
    id: "arch-design",
    title: "Application Architecture",
    description:
      "Participated in defining entity boundaries — Streamline vs Business entity separation — to enforce clean, maintainable application structure.",
    icon: "architecture",
  },
  {
    id: "event-jobs",
    title: "Event-driven Job System",
    description:
      "Designed an event-based worker system using Laravel Jobs and Queues to minimize worker spinup overhead and handle async processing at scale.",
    icon: "events",
  },
  {
    id: "schema-builder",
    title: "Dynamic Schema Builder",
    description:
      "Built a UI-driven database table builder that lets users define tables, queries, and relationships directly from the application without writing raw SQL.",
    icon: "database",
  },
  {
    id: "api-arch",
    title: "API & Integration Design",
    description:
      "Architected integrations with Zoho Books, WhatsApp, and Messenger APIs — mapping external services into structured internal workflows.",
    icon: "integration",
  },
];

export const projectGroups = [
  {
    id: "featured",
    title: "Featured Projects",
    description: "The strongest work to lead with on the portfolio.",
    projects: [
      {
        slug: "knorai",
        title: "Knorai",
        subtitle: "Live product · WooCommerce chat automation",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/knorai.jpg and import it in portfolioData.js",
        isLive: true,
        stack: ["WooCommerce", "WhatsApp", "Telegram", "Laravel", "Automation"],
        summary:
          "Contributed to Knorai — a live SaaS product that lets WooCommerce store owners automate customer support queries through WhatsApp and Telegram channels, reducing manual support effort.",
        details: [
          "Built automation flows connecting WooCommerce order events to WhatsApp and Telegram message channels.",
          "Enabled store owners to handle customer queries with structured automation rules without manual intervention.",
          "Contributed to backend architecture supporting multiple merchants and their individual messaging channels.",
          "Product is live and actively serving online store owners.",
        ],
        links: [
          {
            label: "Visit knorai.com",
            href: "https://knorai.com/",
          },
        ],
      },
      {
        slug: "queriverse",
        title: "Queriverse",
        subtitle: "Android social app with Laravel APIs",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/queriverse.jpg and import it in portfolioData.js",
        isLive: false,
        stack: ["Java", "Android XML", "Laravel API", "MySQL"],
        summary:
          "Built a social media Android app with posts, likes, comments, follows, quizzes, and Laravel-powered REST APIs.",
        details: [
          "Designed Android user interfaces using XML.",
          "Integrated REST APIs built in Laravel for application workflows.",
          "Tested API endpoints and coordinated with a cross-functional team for smooth feature integration.",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/saikatdutta713/queriverse",
          },
        ],
      },
      {
        slug: "trackshoot",
        title: "TrackShoot",
        subtitle: "Production house operations platform",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/trackshoot.jpg and import it in portfolioData.js",
        isLive: false,
        stack: ["Laravel", "MySQL", "Zoho API", "Operations Workflow"],
        summary:
          "Laravel application for production houses to manage daily shoot data, schedules, and operations in a structured workflow.",
        details: [
          "Organized day-wise production and shoot workflow data.",
          "Integrated Zoho APIs into operational processes.",
          "Focused on admin usability and smoother non-technical team operations.",
        ],
        links: [],
      },
    ],
  },
  {
    id: "professional",
    title: "Professional Projects",
    description: "Company and client work that reflects product and business problem-solving.",
    projects: [
      {
        slug: "multivendor-platform",
        title: "Multi-vendor Commerce Platform",
        subtitle: "Marketplace workflow customization",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/multivendor-platform.jpg and import it in portfolioData.js",
        isLive: false,
        stack: ["WordPress", "Dokan", "WooCommerce", "Custom PHP"],
        summary:
          "Developed custom features for a multi-vendor marketplace, allowing multiple sellers to manage and sell goods through tailored workflows.",
        details: [
          "Extended Dokan and WooCommerce behavior with custom code.",
          "Supported seller-specific operational and catalog flows.",
          "Worked inside a live commerce setup with practical constraints.",
        ],
        links: [],
      },
      {
        slug: "automobile-dealer-backend",
        isLive: false,
        title: "Automobile Dealer Backend Platform",
        subtitle: "Laravel internal operations software",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/automobile-dealer-backend.jpg and import it in portfolioData.js",
        stack: ["Laravel", "MySQL", "Admin Operations"],
        summary:
          "Built a Laravel-based backend application for an automobile dealer to manage internal business operations more efficiently.",
        details: [
          "Converted manual business processes into structured software workflows.",
          "Focused on maintainability and everyday operational usage.",
        ],
        links: [],
      },
    ],
  },
  {
    id: "freelance",
    title: "Freelance Work",
    description: "Practical delivery for business systems, ERP customization, and deployment-sensitive changes.",
    projects: [
      {
        slug: "dolibarr-custom-work",
        title: "Dolibarr Custom Engineering",
        subtitle: "ERP customization and deployment support",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/dolibarr-custom-work.jpg and import it in portfolioData.js",
        stack: ["Dolibarr", "PHP", "PDF Templates", "Email Templates", "Hosting"],
        summary:
          "Handled Dolibarr custom templates, PDFs, email flows, hosting movement, external modules, bug fixes, and upgrades.",
        details: [
          "Customized PDF and template outputs for client-facing business usage.",
          "Performed hosting migration and deployment-sensitive maintenance work.",
          "Built external modules to fit client-specific ERP workflows.",
        ],
        links: [
          {
            label: "Upwork Profile",
            href: "https://www.upwork.com/freelancers/~0125a00c2fbabe8208",
          },
        ],
      },
    ],
  },
  {
    id: "packages",
    title: "Packages and Open Source",
    description: "Reusable engineering work that improves scale, consistency, and delivery speed.",
    projects: [
      {
        slug: "laravel-packages",
        title: "Laravel Package Set",
        subtitle: "Reusable backend support modules",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/laravel-packages.jpg and import it in portfolioData.js",
        stack: ["Laravel", "Auth", "Jobs", "Workers", "Events"],
        summary:
          "Created 5+ Laravel packages to support authentication, jobs, and event-based worker spin-up patterns across multiple applications.",
        details: [
          "Reduced duplication across project codebases.",
          "Improved consistency in common backend features.",
          "Focused on scalable support for real production teams.",
        ],
        links: [],
      },
      {
        slug: "wrappid-contributions",
        title: "Wrappid Contributions",
        subtitle: "Framework and module contribution work",
        image: null,
        imageHint: "Add screenshot to src/assets/projects/wrappid-contributions.jpg and import it in portfolioData.js",
        stack: ["Wrappid", "React", "Open Source"],
        summary:
          "Contributed to Wrappid packages and business modules, improving framework-level engineering experience.",
        details: [
          "Worked on a shared framework instead of only app-level work.",
          "Improved contribution discipline and reusable architecture thinking.",
        ],
        links: [
          {
            label: "Wrappid",
            href: "https://wrappid.dev/",
          },
        ],
      },
    ],
  },
];

export const homeStats = [
  { value: "~2", label: "Years in Industry" },
  { value: "2", label: "Professional Roles" },
  { value: "5+", label: "Laravel Packages" },
  { value: "10+", label: "Projects Delivered" },
];

export const certifications = [
  {
    id: "cert-1",
    title: "Add Your Certification",
    issuer: "Issuing Organization",
    date: "Month YYYY",
    credentialId: null,
    link: null,
    category: "Backend Development",
    skills: ["PHP", "Laravel"],
  },
  {
    id: "cert-2",
    title: "Add Your Certification",
    issuer: "Issuing Organization",
    date: "Month YYYY",
    credentialId: null,
    link: null,
    category: "Frontend Development",
    skills: ["React", "JavaScript"],
  },
  {
    id: "cert-3",
    title: "Add Your Certification",
    issuer: "Issuing Organization",
    date: "Month YYYY",
    credentialId: null,
    link: null,
    category: "Cloud & DevOps",
    skills: ["Docker", "VPS", "cPanel"],
  },
];

export const blogIdeas = [
  {
    title: "Building enterprise workflows with Laravel",
    status: "Planned",
    summary:
      "How operational requirements shape real backend architecture and admin experiences.",
  },
  {
    title: "What custom Dolibarr work teaches about business software",
    status: "Planned",
    summary:
      "Lessons from ERP templates, modules, deployment work, and client-specific customization.",
  },
  {
    title: "Messaging automation inside ecommerce support systems",
    status: "Planned",
    summary:
      "Practical notes from integrating WhatsApp and Messenger into business workflows.",
  },
];
