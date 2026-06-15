import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HireMeModal from "./components/HireMeModal";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import HomeSnapshot from "./components/HomeSnapshot";
import Certifications from "./components/Certifications";
import GrafxBackground from "./components/GrafxBackground";
import { siteConfig } from "./data/portfolioData";
import "./App.css";

const normalizeRoute = (hash) => {
  if (!hash || hash === "#") return "/";
  const cleanedHash = hash.replace(/^#/, "");
  if (cleanedHash === "" || cleanedHash === "/") return "/";
  return cleanedHash.startsWith("/") ? cleanedHash : `/${cleanedHash}`;
};

function App() {
  const [route, setRoute] = useState(normalizeRoute(window.location.hash));
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(normalizeRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll-triggered animations — re-run on every route change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".anim-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);

  useEffect(() => {
    const pageTitles = {
      "/": `${siteConfig.name} | Software Development Engineer`,
      "/about": `About | ${siteConfig.name}`,
      "/projects": `Projects | ${siteConfig.name}`,
      "/resume": `Resume | ${siteConfig.name}`,
      "/certifications": `Certifications | ${siteConfig.name}`,
      "/blog": `Blog | ${siteConfig.name}`,
      "/contact": `Contact | ${siteConfig.name}`,
    };
    document.title = pageTitles[route] || `${siteConfig.name} | Portfolio`;
  }, [route]);

  const page = useMemo(() => {
    switch (route) {
      case "/about":
        return (
          <>
            <About />
            <Expertise onOpenHireModal={() => setIsHireModalOpen(true)} />
          </>
        );
      case "/projects":
        return <Projects />;
      case "/resume":
        return <Experience />;
      case "/certifications":
        return <Certifications />;
      case "/blog":
        return <Blog />;
      case "/contact":
        return <Contact />;
      case "/":
      default:
        return (
          <>
            <Banner onOpenHireModal={() => setIsHireModalOpen(true)} />
            <HomeSnapshot />
            <Expertise onOpenHireModal={() => setIsHireModalOpen(true)} />
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
        <main className="min-h-screen">{page}</main>
        <Footer />
      </div>

      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}

export default App;
