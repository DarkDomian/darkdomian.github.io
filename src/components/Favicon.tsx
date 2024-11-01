// components/Favicon.tsx
import { VscAccount } from 'react-icons/vsc';
import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';


const Favicon = () => {
  useEffect(() => {
    const link: HTMLLinkElement = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';

    const iconSVG = renderToString(<VscAccount size={32} color='#D81B60' />);
    link.href = `data:image/svg+xml,${encodeURIComponent(iconSVG)}`;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default Favicon;
