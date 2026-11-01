import PropTypes from "prop-types";

/* Font Awesome brand icon, or an inline SVG for brands Font Awesome doesn't ship (e.g. Gravatar) */
const SocialIcon = ({ link, className = "", style }) => {
  if (link.svgPath) {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} style={style} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1em", height: "1em" }}>
          <path d={link.svgPath} />
        </svg>
      </span>
    );
  }
  return <i className={`fa-brands ${link.icon} ${className}`} style={style} />;
};

SocialIcon.propTypes = {
  link:      PropTypes.object.isRequired,
  className: PropTypes.string,
  style:     PropTypes.object,
};

export default SocialIcon;
