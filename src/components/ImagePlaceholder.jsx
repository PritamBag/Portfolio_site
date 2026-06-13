import { useState } from "react";
import PropTypes from "prop-types";

const ImagePlaceholder = ({
  src,
  alt,
  hint,
  className = "",
  fallbackClassName = "",
}) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center text-sm text-slate-500 ${fallbackClassName}`}
      >
        <div>
          <p className="font-semibold text-slate-700">Image placeholder</p>
          <p>{hint || "Add an image path when ready."}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

ImagePlaceholder.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  hint: PropTypes.string,
  className: PropTypes.string,
  fallbackClassName: PropTypes.string,
};

export default ImagePlaceholder;
