'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dock, DockIcon } from './ui/dock';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const sections = [
    { id: 'about', icon: '👤' },
    { id: 'experience', icon: '💼' },
    { id: 'projects', icon: '📁' },
    { id: 'education', icon: '🎓' },
    { id: 'contact', icon: '✉️' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Mobile top nav */}
      <nav className="md:hidden fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="px-6 flex justify-between items-center h-14">
          <a href="#home" className="font-mono font-bold text-sm tracking-tight">
            tanguy.merrien
          </a>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-10 h-10 cursor-pointer" aria-label="Toggle theme">
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-border px-6 py-3 flex flex-wrap gap-4 bg-background">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer capitalize">
                {s.id}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Desktop floating dock */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock magnification={50} distance={120}>
          <DockIcon className="bg-background/80 border border-border backdrop-blur-sm">
            <a href="#home" className="text-xs font-mono font-bold" title="Home">TM</a>
          </DockIcon>
          {sections.map((s) => (
            <DockIcon key={s.id} className="bg-background/80 border border-border backdrop-blur-sm">
              <a href={`#${s.id}`} title={s.id} className="text-base">{s.icon}</a>
            </DockIcon>
          ))}
          <DockIcon className="bg-background/80 border border-border backdrop-blur-sm" >
            <button onClick={toggleTheme} className="text-base cursor-pointer" aria-label="Toggle theme">
              {isDark ? '☀️' : '🌙'}
            </button>
          </DockIcon>
        </Dock>
      </div>

      <main className="pt-14 md:pt-0 pb-24 md:pb-28">{children}</main>
    </div>
  );
}
