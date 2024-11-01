import React from "react";
import "../index.css";

// importin all of Icons
import { FaGithub, FaLinkedin, FaLink, FaTelegram } from "react-icons/fa";

interface AnimatedLinkProps {
  icon?: keyof typeof icons;
  children?: React.ReactNode;
  href?: string;
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  link: FaLink,
  telegram: FaTelegram,
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ icon="link", children=icon, href="/404" }) => {
  const IconComponent = icons[icon];
  return (
    <div className="flex flex-row items-center">
        <IconComponent className="mr-2 text-dark-200 dark:text-light-800"/>
        <a
        href={href}
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
        {children || icon}
        </a>
    </div>
  );
};
export default AnimatedLink;
