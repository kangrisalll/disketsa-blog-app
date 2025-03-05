export function Input({ placeholder, className, ...props }) {
    return <input type="search" placeholder={placeholder} className={`w-full px-4 py-2 bg-white rounded-md text-black ${className}`} {...props} />;
  }