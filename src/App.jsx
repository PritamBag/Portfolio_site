import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import HireMeModal from "./components/HireMeModal";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Services from "./components/Services";
import HomeSnapshot from "./components/HomeSnapshot";
import Certifications from "./components/Certifications";
import GrafxBackground from "./components/GrafxBackground";
import DecorGrafx from "./components/DecorGrafx";
import { siteConfig } from "./data/portfolioData";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const normalizeRoute = (pathname) => {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
};

// Scroll so the anchor sits just below the sticky header (scroll-margin alone gets
// overridden by the browser's own fragment jump + the global smooth-scroll CSS).
// Default "instant" (not "auto"), because html has scroll-behavior: smooth - a long smooth scroll on
// page load gets cut short when ScrollTrigger refreshes and restores the scroll position.
const scrollToAnchor = (id, behavior = "instant") => {
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 64;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
  window.scrollTo({ top, behavior });
};

function App() {
  const [route, setRoute] = useState(normalizeRoute(window.location.pathname));
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Direct visit to an anchor (e.g. /projects/#wiimo): the client re-renders the page,
  // so jump to the target again once it exists
  useEffect(() => {
    // Hash-only changes on the same page (no reload) skip the mount path below
    const onHashChange = () => scrollToAnchor(window.location.hash.slice(1), "smooth");
    window.addEventListener("hashchange", onHashChange);

    const hash = window.location.hash.slice(1);
    // Fonts and images still shift the layout a little after mount - re-align once settled
    const timer = hash ? setTimeout(() => scrollToAnchor(hash), 500) : null;
    if (hash) scrollToAnchor(hash);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      clearTimeout(timer);
    };
  }, []);

  // Intercept clicks on internal links so navigation stays client-side (no full reload)
  useEffect(() => {
    const handleClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest("a");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      e.preventDefault();
      const [path, hash] = href.split("#");
      window.history.pushState(null, "", href);
      setRoute(normalizeRoute(path));
      if (hash) {
        // Wait for the new route to render, then jump to the anchor (e.g. /projects/#wiimo)
        setTimeout(() => scrollToAnchor(hash, "smooth"), 60);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll-triggered animations via GSAP - re-run on every route change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".anim-fade-up").forEach((el, i) => {
        const tween = { opacity: 1, y: 0, duration: 0.32, ease: "power3.out", delay: i * 0.025 };
        // Already on screen or scrolled past (e.g. landing on /projects/#slug or going back):
        // a scroll trigger would never fire, so reveal it right away
        if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
          gsap.to(el, tween);
          return;
        }
        gsap.to(el, { ...tween, scrollTrigger: { trigger: el, start: "top 94%", once: true } });
      });
    });
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [route]);

  useEffect(() => {
    if (route.startsWith("/blog/")) {
      document.title = `Blog | ${siteConfig.name}`;
      return;
    }
    const pageTitles = {
      "/": `${siteConfig.name} – Backend & Product Engineer | FastAPI, Laravel`,
      "/about": `About | ${siteConfig.name}`,
      "/projects": `Projects | ${siteConfig.name}`,
      "/services": "Hire a Freelance Dolibarr, Laravel & FastAPI Developer | Pritam Bag",
      "/resume": `Resume | ${siteConfig.name}`,
      "/certifications": `Certifications | ${siteConfig.name}`,
      "/blog": `Blog | ${siteConfig.name}`,
      "/contact": `Contact | ${siteConfig.name}`,
    };
    document.title = pageTitles[route] || `${siteConfig.name} | Portfolio`;
  }, [route]);

  const page = useMemo(() => {
    if (route.startsWith("/blog/")) {
      const slug = route.replace("/blog/", "");
      return <BlogPost slug={slug} />;
    }
    switch (route) {
      case "/about":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="about-flow"
              ringPos="tl"
              dotPos="br"
              orbitPos="ml"
              c1="#7c3aed"
              c2="#c55ea2"
              c3="#6366f1"
              flipCurve
              showCube
              cubePos="tr"
              cubeSize={88}
              showBrackets
              showPolygons
              polyPos="bl"
              showAmbientFill={false}
            />
            <About />
            <Expertise onOpenHireModal={() => setIsHireModalOpen(true)} />
          </div>
        );
      case "/projects":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="projects-flow"
              ringPos="tr"
              dotPos="bl"
              orbitPos="mr"
              c1="#7c3aed"
              c2="#c55ea2"
              c3="#6366f1"
              showCube
              cubePos="bl"
              cubeSize={96}
              showBrackets
              showPolygons
              polyPos="tr"
              showAmbientFill={false}
            />
            <Projects />
          </div>
        );
      case "/services":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="services-flow"
              ringPos="tl"
              dotPos="br"
              orbitPos="mr"
              c1="#7c3aed"
              c2="#6366f1"
              c3="#c55ea2"
              showCube
              cubePos="tr"
              cubeSize={88}
              showBrackets
              showPolygons
              polyPos="bl"
              showAmbientFill={false}
            />
            <Services onOpenHireModal={() => setIsHireModalOpen(true)} />
          </div>
        );
      case "/resume":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="resume-flow"
              ringPos="bl"
              dotPos="tr"
              orbitPos="mr"
              c1="#6366f1"
              c2="#7c3aed"
              c3="#c55ea2"
              showCube
              cubePos="br"
              cubeSize={90}
              showPolygons
              polyPos="tl"
              showAmbientFill={false}
            />
            <Experience />
          </div>
        );
      case "/certifications":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="certifications-flow"
              ringPos="tr"
              dotPos="bl"
              orbitPos="br"
              c1="#7c3aed"
              c2="#c55ea2"
              c3="#6366f1"
              showCube
              cubePos="bl"
              cubeSize={86}
              showBrackets
              showPolygons
              polyPos="br"
              showAmbientFill={false}
            />
            <Certifications />
          </div>
        );
      case "/blog":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="blog-flow"
              ringPos="br"
              dotPos="tl"
              orbitPos="bl"
              c1="#7c3aed"
              c2="#6366f1"
              c3="#c55ea2"
              flipCurve
              showCube
              cubePos="tr"
              cubeSize={90}
              showPolygons
              polyPos="bl"
              showAmbientFill={false}
            />
            <Blog />
          </div>
        );
      case "/contact":
        return (
          <div className="relative overflow-hidden">
            <DecorGrafx
              id="contact-flow"
              ringPos="bl"
              dotPos="tr"
              orbitPos="mr"
              c1="#6366f1"
              c2="#7c3aed"
              c3="#c55ea2"
              showCube
              cubePos="tr"
              cubeSize={86}
              showBrackets
              showAmbientFill={false}
            />
            <Contact />
          </div>
        );
      case "/":
      default:
        return (
          <>
            <Banner />
            <div className="relative overflow-hidden">
              <DecorGrafx
                id="home-flow"
                ringPos="br"
                dotPos="tl"
                orbitPos="ml"
                c1="#7c3aed"
                c2="#c55ea2"
                c3="#6366f1"
                showCube
                cubePos="br"
                cubeSize={92}
                showPolygons
                polyPos="tr"
                showBrackets
                showAmbientFill={false}
              />
            <HomeSnapshot />
            <Expertise onOpenHireModal={() => setIsHireModalOpen(true)} />
            </div>
          </>
        );
    }
  }, [route]);

  return (
    <div className="relative bg-[#f8fafc] text-slate-900">
      <GrafxBackground />

      {/* All page content sits above the ambient layer */}
      <div className="relative flex flex-col" style={{ zIndex: 1 }}>
        <Header
          currentRoute={route}
          onOpenHireModal={() => setIsHireModalOpen(true)}
        />
        <div className="relative flex flex-1 flex-col overflow-hidden">
          <main className="relative min-h-screen">{page}</main>
          <Footer />
        </div>
      </div>

      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}

export default App;
