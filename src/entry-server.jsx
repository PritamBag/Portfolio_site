import { renderToStaticMarkup } from "react-dom/server";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import HomeSnapshot from "./components/HomeSnapshot";
import Certifications from "./components/Certifications";
import { siteConfig, blogPosts } from "./data/portfolioData";

const SITE_URL = "https://pritambag.in";
const noop = () => {};

const staticRoutes = {
  "/": {
    title: `${siteConfig.name} | Software Development Engineer`,
    description: siteConfig.heroDescription,
    render: () => (
      <>
        <Banner />
        <HomeSnapshot />
        <Expertise onOpenHireModal={noop} />
      </>
    ),
  },
  "/about": {
    title: `About | ${siteConfig.name}`,
    description:
      "About Pritam Bag - a software development engineer from Kolkata working across Laravel, WordPress, Dolibarr ERP, and backend systems architecture.",
    render: () => (
      <>
        <About />
        <Expertise onOpenHireModal={noop} />
      </>
    ),
  },
  "/projects": {
    title: `Projects | ${siteConfig.name}`,
    description:
      "Engineering projects by Pritam Bag - SaaS automation, marketplace platforms, ERP customization, and Laravel backend systems.",
    render: () => <Projects />,
  },
  "/resume": {
    title: `Resume | ${siteConfig.name}`,
    description:
      "Professional experience of Pritam Bag, Software Development Engineer - Laravel, Dolibarr ERP, WordPress, and backend architecture work.",
    render: () => <Experience />,
  },
  "/certifications": {
    title: `Certifications | ${siteConfig.name}`,
    description: "Certifications and credentials earned by Pritam Bag, Software Development Engineer.",
    render: () => <Certifications />,
  },
  "/blog": {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Engineering notes from Pritam Bag on Laravel architecture, ERP customization, and backend systems design.",
    render: () => <Blog />,
  },
  "/contact": {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with Pritam Bag for software engineering roles, Laravel product work, or backend consulting.",
    render: () => <Contact />,
  },
};

export function getAllRoutes() {
  return [...Object.keys(staticRoutes), ...blogPosts.map((p) => `/blog/${p.slug}`)];
}

export function getMetaForRoute(route) {
  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return null;
    return {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.summary,
      canonical: `${SITE_URL}/blog/${post.slug}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        author: { "@type": "Person", name: siteConfig.name, url: SITE_URL },
        url: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.tags.join(", "),
      },
    };
  }
  const entry = staticRoutes[route];
  if (!entry) return null;
  return {
    title: entry.title,
    description: entry.description,
    canonical: `${SITE_URL}${route === "/" ? "/" : route}`,
  };
}

export function renderRoute(route) {
  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    return renderToStaticMarkup(<BlogPost slug={slug} />);
  }
  const entry = staticRoutes[route];
  if (!entry) return null;
  return renderToStaticMarkup(entry.render());
}
