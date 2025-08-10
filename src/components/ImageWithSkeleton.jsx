import { useState } from "react";

function ImageWithSkeleton({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Fallback preview image */}
      <img
        src="small.jpg"
        alt="blur preview"
        className={`absolute border border-red-600 inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Actual image */}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover rounded-full"
      />
    </div>
  );
}

export default ImageWithSkeleton;
