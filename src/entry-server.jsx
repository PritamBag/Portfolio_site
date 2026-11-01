import { renderToStaticMarkup } from "react-dom/server";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Services from "./components/Services";
import HomeSnapshot from "./components/HomeSnapshot";
import Certifications from "./components/Certifications";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig, blogPosts, servicesContent } from "./data/portfolioData";

const SITE_URL = "https://pritambag.in";
const noop = () => {};

// GitHub Pages 301-redirects bare paths to their trailing-slash form (it's serving
// real directory/index.html files), so canonical/sitemap/OG URLs must use the
// trailing-slash form directly to avoid pointing at a URL that redirects away from itself.
const canonicalUrl = (route) => (route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}/`);

const staticRoutes = {
  "/": {
    title: `${siteConfig.name} – Backend & Product Engineer | FastAPI, Laravel`,
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
      "About Pritam Bag - a software engineer from Kolkata building backend systems, data pipelines, and web and mobile apps with Python, FastAPI, Laravel, and React.",
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
      "Engineering projects by Pritam Bag - the WIIMO food-data platform, data pipelines, Laravel packages, ERP modules, and a WordPress.org plugin.",
    render: () => <Projects />,
  },
  "/services": {
    title: "Hire a Freelance Dolibarr, Laravel & FastAPI Developer | Pritam Bag",
    description:
      "Freelance developer from Kolkata for Dolibarr customization, WordPress and WooCommerce, websites and apps, FastAPI or Laravel backends, CI/CD, testing, and code review.",
    render: () => <Services onOpenHireModal={noop} />,
  },
  "/resume": {
    title: `Resume | ${siteConfig.name}`,
    description:
      "Professional experience of Pritam Bag - FastAPI and PostgreSQL platforms, data pipelines, Next.js and React Native apps, and Laravel backend architecture.",
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
      "Engineering notes from Pritam Bag on backend architecture, data pipelines, ERP customization, and systems design.",
    render: () => <Blog />,
  },
  "/contact": {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with Pritam Bag for software engineering roles, backend and data pipeline work, or Laravel and FastAPI product builds.",
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
    const canonical = canonicalUrl(`/blog/${post.slug}`);
    const imageUrl = post.coverImage ? `${SITE_URL}${post.coverImage}` : `${SITE_URL}/Photo.png`;
    return {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.summary,
      canonical,
      ogType: "article",
      image: imageUrl,
      keywords: post.tags.join(", "),
      article: {
        publishedTime: post.isoDate,
        author: siteConfig.name,
        tags: post.tags,
      },
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          image: imageUrl,
          datePublished: post.isoDate,
          dateModified: post.isoDate,
          author: { "@type": "Person", name: siteConfig.name, url: SITE_URL },
          publisher: { "@type": "Person", name: siteConfig.name, url: SITE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          url: canonical,
          keywords: post.tags.join(", "),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/blog") },
            { "@type": "ListItem", position: 3, name: post.title, item: canonical },
          ],
        },
      ],
    };
  }
  const entry = staticRoutes[route];
  if (!entry) return null;
  const meta = {
    title: entry.title,
    description: entry.description,
    canonical: canonicalUrl(route),
  };
  if (route === "/services") {
    meta.jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `${siteConfig.name} - Freelance Software Development`,
        url: meta.canonical,
        description: entry.description,
        address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
        founder: { "@type": "Person", name: siteConfig.name, url: `${SITE_URL}/` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Freelance services",
          itemListElement: servicesContent.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.problem },
          })),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: servicesContent.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
  }
  if (route === "/blog") {
    meta.jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: meta.canonical,
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: canonicalUrl(`/blog/${post.slug}`),
        datePublished: post.isoDate,
      })),
    };
  }
  return meta;
}

// Header + footer go into the static HTML too, so crawlers see real <a> links to
// every page (not just the sitemap). The client mounts with createRoot().render(),
// which replaces this markup, so there is no hydration to mismatch.
const withChrome = (route, page) =>
  renderToStaticMarkup(
    <>
      <Header currentRoute={route} onOpenHireModal={noop} />
      <main>{page}</main>
      <Footer />
    </>
  );

export function renderRoute(route) {
  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    return withChrome(route, <BlogPost slug={slug} />);
  }
  const entry = staticRoutes[route];
  if (!entry) return null;
  return withChrome(route, entry.render());
}
