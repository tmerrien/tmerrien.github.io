'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, bounce: 0.25, duration: 1.2 } },
};

const projects = [
  {
    title: 'WoZ Platform for LLM Evaluation',
    description: 'Honours thesis research platform enabling controlled evaluation of LLM conversational quality using Wizard-of-Oz methodology. Supports three experimental conditions to study how tone, empathy, refusal strategies, and formatting affect user trust in conversational AI systems.',
    tech: ['Next.js', 'Supabase', 'Ollama', 'Vercel AI SDK'],
    url: 'https://github.com/tmerrien/oz-upei',
    tag: 'Research',
  },
  {
    title: 'Notto',
    description: 'Production-ready React component library bridging basic component libraries and full starter kits. Built with a focus on developer experience and real-world usage patterns.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'shadcn/ui'],
    url: 'https://github.com/tmerrien/notto',
    tag: 'Open Source',
  },
  {
    title: 'WorkSource Alliance ATS',
    description: 'Full-scale applicant tracking system serving non-profits and institutions across PEI. Led architecture decisions and managed a 7-member development team.',
    tech: ['Next.js', 'Supabase', 'FastAPI', 'TypeScript'],
    url: 'https://beta.worksourcealliance.ca',
    tag: 'Enterprise',
  },
  {
    title: 'Kirkwood Gaps Simulation',
    description: 'Physics simulation of orbital resonance gaps in the asteroid belt using numerical integration. Visualizes how Jupiter\'s gravitational influence creates gaps in the asteroid distribution.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    url: 'https://github.com/tmerrien/kirkwood_gaps',
    tag: 'Physics',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects &mdash; Tanguy Merrien</title>
      </Head>
      <div className="relative z-10 px-6 md:px-12 pt-14 md:pt-8 pb-16 w-full h-auto md:h-screen overflow-y-auto no-scrollbar max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--primary-accent)] font-['Space_Grotesk'] font-medium mb-8 hover:gap-3 transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to hub
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Space_Grotesk'] text-5xl font-bold tracking-tighter mb-12"
        >
          Projects
        </motion.h1>

        <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              variants={item}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[var(--primary-accent)] font-bold">{project.tag}</span>
                  <span className="material-symbols-outlined text-lg text-[var(--outline-variant)] group-hover:text-[var(--primary-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">arrow_outward</span>
                </div>
                <h2 className="font-['Space_Grotesk'] font-bold text-xl tracking-tight mb-3">{project.title}</h2>
                <p className="text-base text-[var(--on-surface-variant)] leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}
