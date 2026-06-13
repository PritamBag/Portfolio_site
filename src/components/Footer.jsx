import { socialLinks, siteConfig } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
