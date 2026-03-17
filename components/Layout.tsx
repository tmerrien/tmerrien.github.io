'use client';

import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = (saved || (prefersDark ? 'dark' : 'light')) === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    if (newTheme) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const sections = ['about', 'experience', 'education', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center h-12">
          <a href="#home" className="text-sm font-semibold text-gray-900 dark:text-white">TM</a>
          <div className="flex items-center gap-4">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} className="hidden sm:inline text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white capitalize">
                {s}
              </a>
            ))}
            <button onClick={toggleTheme} className="text-sm" aria-label="Toggle theme">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-12">{children}</main>
    </div>
  );
}
