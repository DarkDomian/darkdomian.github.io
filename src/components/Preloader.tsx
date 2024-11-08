import { useEffect, useState } from 'react';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-light-200 dark:bg-dark-600 z-40 transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="h-[4px] bg-accent w-1/2 animate-preloader-line rounded-sm" ></div>
    </div>
  );
}

export default Preloader;