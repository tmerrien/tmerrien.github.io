'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Research', href: '#research', active: true },
  { label: 'Systems', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Archive', href: '#projects' },
];

const sideIcons = [
  { icon: 'dashboard', href: '#top', active: true },
  { icon: 'work', href: '#experience' },
  { icon: 'folder_special', href: '#projects' },
  { icon: 'school', href: '#education' },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-[40px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center px-8 h-12 w-full max-w-[1440px] mx-auto">
          <span className="font-['Space_Grotesk'] font-bold text-lg tracking-tighter text-[var(--on-surface)]">
            Tanguy Merrien
          </span>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-['Space_Grotesk'] tracking-tight text-sm transition-colors ${
                  link.active
                    ? 'text-[var(--on-surface)] font-bold border-b border-[var(--on-surface)] pb-1'
                    : 'text-[var(--outline)] hover:text-[var(--on-surface)]'
                }`}
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
          <span className="font-['Space_Grotesk'] font-black text-xl text-[var(--on-surface)]">TM</span>
        </div>
        <div className="flex flex-col gap-6">
          {sideIcons.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-110 ${
                item.active
                  ? 'bg-[var(--inverse-surface)] text-white'
                  : 'text-[var(--outline-variant)] hover:text-[var(--on-surface)]'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-12">{children}</main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-4 border-t border-white/5 bg-transparent z-30">
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
