export function ImageComponent({ src, alt, className }) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  };