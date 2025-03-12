'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi2';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the theme is loaded before rendering
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="cursor-pointer  rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <HiMoon className="w-6 h-6" title="Switch to Dark Mode" />
      ) : (
        <HiSun className="w-6 h-6" title="Switch to Light Mode" />
      )}
    </div>
  );
};

export default ThemeToggle;
