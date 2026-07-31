// GitHub Pages 301-redirects bare paths ("/about") to their trailing-slash form
// ("/about/") since it's serving real directory/index.html files. Internal links
// should point at the trailing-slash form directly to avoid that extra redirect hop.
export const toHref = (path) => (path === "/" ? "/" : `${path}/`);
