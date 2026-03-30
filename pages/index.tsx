'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, bounce: 0.25, duration: 1.2 },
  },
};

const skills = ['RAG Pipelines', 'Agent Design', 'TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Docker'];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanguy Merrien &mdash; AI &amp; Software Engineer</title>
        <meta name="description" content="Portfolio of Tanguy Merrien — AI & Software Engineer specializing in conversational AI, RAG architectures, and agent-driven systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative z-10 px-4 md:px-5 pt-14 md:pt-5 pb-10 md:pb-5 w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden no-scrollbar">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 auto-rows-auto md:grid-rows-3 gap-3 md:h-[calc(100vh-40px)] max-w-[1600px] mx-auto"
        >

          {/* Hero / Profile — big statement */}
          <motion.div variants={card}
            className="col-span-12 md:col-span-5 md:row-span-2 glass-card rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden min-h-0"
          >
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
            <div className="relative">
              <span className="label block mb-3">Portfolio</span>
              <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]">
                Tanguy<br />Merrien
              </h1>
              <p className="text-[var(--secondary)] text-xl mt-3 max-w-sm leading-relaxed">
                AI &amp; Software Engineer building production conversational AI systems, RAG pipelines, and agent architectures.
              </p>
            </div>
            <div className="relative mt-auto pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/40">
                <img src="/images/avatar.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-['Space_Grotesk'] font-bold text-[var(--on-surface)]">Ottawa, Canada</p>
                <p className="text-sm text-[var(--primary-accent)] font-medium">Available for remote work</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Research — hero card */}
          <motion.div variants={card}
            className="col-span-12 md:col-span-7 md:row-span-2 glass-card accent-glow rounded-3xl relative overflow-hidden min-h-0 group cursor-pointer"
          >
            <img
              src="/images/research-bg.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
            />
            <a href="https://github.com/tmerrien/oz-upei" target="_blank" rel="noopener noreferrer"
              className="relative p-10 h-full flex flex-col justify-between block"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[var(--primary-accent)] font-bold">Featured Research</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] max-w-lg">
                  WoZ Platform for LLM Evaluation
                </h2>
                <p className="text-[var(--secondary)] mt-5 text-lg leading-relaxed max-w-md">
                  Honours Thesis: High-fidelity Wizard-of-Oz frameworks to stress-test large language model alignment in collaborative environments.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="bg-[var(--primary)] text-[var(--on-primary)] px-7 py-3 rounded-full font-['Space_Grotesk'] text-sm font-bold inline-flex items-center gap-2">
                  View Thesis <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </span>
                <span className="text-sm text-[var(--outline)]">Next.js &middot; Supabase &middot; Ollama &middot; AI SDK</span>
              </div>
            </a>
          </motion.div>

          {/* Experience teaser */}
          <motion.div variants={card}
            className="col-span-12 md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 overflow-hidden min-h-0 cursor-pointer group"
          >
            <Link href="/experience" className="h-full flex flex-col justify-between">
              <div>
                <span className="label block mb-3">Experience</span>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[var(--primary-accent)] font-['Space_Grotesk'] font-bold text-lg">01</span>
                    <div>
                      <span className="font-['Space_Grotesk'] font-bold text-lg">Revio</span>
                      <span className="text-sm text-[var(--secondary)] ml-2">Developer &middot; AI Sales CRM</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[var(--primary-accent)] font-['Space_Grotesk'] font-bold text-lg">02</span>
                    <div>
                      <span className="font-['Space_Grotesk'] font-bold text-lg">WorkSource Alliance</span>
                      <span className="text-sm text-[var(--secondary)] ml-2">Senior Developer</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[var(--primary-accent)] font-['Space_Grotesk'] font-bold text-lg">03</span>
                    <div>
                      <span className="font-['Space_Grotesk'] font-bold text-lg">ADL</span>
                      <span className="text-sm text-[var(--secondary)] ml-2">Solution Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm text-[var(--primary-accent)] font-['Space_Grotesk'] font-medium group-hover:gap-3 transition-all">
                View full experience <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          </motion.div>

          {/* Projects teaser */}
          <motion.div variants={card}
            className="col-span-12 md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 overflow-hidden min-h-0 cursor-pointer group"
          >
            <Link href="/projects" className="h-full flex flex-col justify-between">
              <div>
                <span className="label block mb-3">Projects</span>
                <div className="grid grid-cols-2 gap-2">
                  {['WoZ Platform', 'Notto', 'WorkSource ATS', 'Kirkwood Gaps'].map((name) => (
                    <div key={name} className="glass-inner rounded-xl p-3">
                      <p className="font-['Space_Grotesk'] font-bold text-sm leading-tight">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm text-[var(--primary-accent)] font-['Space_Grotesk'] font-medium group-hover:gap-3 transition-all">
                View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          </motion.div>

          {/* Contact + Skills + Socials */}
          <motion.div variants={card}
            className="col-span-12 md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-0"
          >
            <div>
              <span className="label block mb-3">Stack &amp; Contact</span>
              <div className="flex flex-wrap gap-2 mb-5">
                {skills.map((s) => (<span key={s} className="chip">{s}</span>))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a href="mailto:tmerrien@outlook.com"
                className="bg-[var(--primary)] text-[var(--on-primary)] px-6 py-2.5 rounded-full font-['Space_Grotesk'] text-sm font-bold inline-flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Get in Touch
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/tmerrien" target="_blank" rel="noopener noreferrer" className="text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/tanguy-merrien-26aa96146/" target="_blank" rel="noopener noreferrer" className="text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}
