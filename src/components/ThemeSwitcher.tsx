import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../index.css'

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="switcher"
    >
      {isDarkMode ? <FaSun className="text-light" /> : <FaMoon className="text-dark" />}
      <span className="click-effect"></span>
    </button>
  );
}
