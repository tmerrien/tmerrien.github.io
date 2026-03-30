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
    if (!el) return;

    // Find the scrollable parent (the #top container)
    const scrollContainer = document.getElementById('top');
    if (scrollContainer) {
      const offset = el.offsetTop - scrollContainer.offsetTop;
      scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Navigation — mobile only (md: hidden) */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/5 backdrop-blur-[40px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center px-6 h-12 w-full">
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="font-['Space_Grotesk'] font-bold text-lg tracking-tighter text-[var(--on-surface)]"
          >
            Tanguy Merrien
          </a>
          <div className="flex gap-6 items-center">
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-0">{children}</main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-3 border-t border-white/5 bg-[var(--surface)]/80 backdrop-blur-sm z-30">
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
