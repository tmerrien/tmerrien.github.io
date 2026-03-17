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

  const sections = ['about', 'experience', 'projects', 'education', 'contact'];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] text-[#1E293B] dark:text-[#E2E8F0] transition-colors duration-200">
      <nav className="fixed top-0 w-full bg-[#FAFAFA]/90 dark:bg-[#09090B]/90 backdrop-blur-sm border-b border-[#E4E4E7] dark:border-[#27272A] z-50">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center h-14">
          <a href="#home" className="font-mono font-bold text-sm text-[#18181B] dark:text-white tracking-tight">
            tanguy.merrien
          </a>
          <div className="flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="hidden sm:inline text-xs font-medium text-[#64748B] hover:text-[#2563EB] dark:text-[#94A3B8] dark:hover:text-[#60A5FA] transition-colors duration-200 cursor-pointer"
              >
                {s}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-md text-[#64748B] hover:text-[#18181B] dark:text-[#94A3B8] dark:hover:text-white hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-14">{children}</main>
    </div>
  );
}
