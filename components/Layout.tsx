'use client';

import { ReactNode, useCallback } from 'react';

const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

const sideIcons = [
  { icon: 'dashboard', href: '#top', label: 'Overview' },
  { icon: 'work', href: '#experience', label: 'Experience' },
  { icon: 'folder_special', href: '#projects', label: 'Projects' },
  { icon: 'school', href: '#education', label: 'Education' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-[40px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center px-8 h-12 w-full max-w-[1440px] mx-auto">
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="font-['Space_Grotesk'] font-bold text-lg tracking-tighter text-[var(--on-surface)]"
          >
            Tanguy Merrien
          </a>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-['Space_Grotesk'] tracking-tight text-sm text-[var(--outline)] hover:text-[var(--on-surface)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="font-['Space_Grotesk'] tracking-tight text-sm text-[var(--on-surface-variant)] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Available: Remote/Ottawa
          </span>
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-12 h-[calc(100vh-48px)] w-16 z-40 bg-white/5 backdrop-blur-[40px] border-r border-white/10 hidden md:flex flex-col items-center py-8 gap-8">
        <div className="mb-4">
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="font-['Space_Grotesk'] font-black text-xl text-[var(--on-surface)]"
          >
            TM
          </a>
        </div>
        <div className="flex flex-col gap-6">
          {sideIcons.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              title={item.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-[var(--outline-variant)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-container-low)] hover:scale-110 transition-all duration-200"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-12">{children}</main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-4 border-t border-white/5 bg-[var(--surface)]/80 backdrop-blur-sm z-30">
        <div className="flex justify-between items-center px-8 w-full max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--outline-variant)]">
            &copy; {new Date().getFullYear()} Tanguy Merrien
          </span>
          <div className="flex gap-6">
            <a
              href="https://github.com/tmerrien"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/tanguy-merrien-26aa96146/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
