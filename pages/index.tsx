'use client';

import Head from 'next/head';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

const jobs = [
  { num: '01', company: 'Revio', role: 'Developer', desc: 'AI Sales CRM', period: 'Dec 2025 — Present' },
  { num: '02', company: 'WorkSource Alliance', role: 'Senior Developer', desc: 'Full Stack', period: '2023 — Dec 2025' },
  { num: '03', company: 'ADL', role: 'Solution Consultant', desc: 'Amalgamated Dairies Limited', period: '2024 — 2025' },
];

const skills = {
  'AI/LLM': ['RAG Pipelines', 'Agent Design', 'Prompt Engineering', 'Context Engineering', 'LLM UX'],
  Stack: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
  Infra: ['Coolify', 'Supabase', 'Docker', 'Azure'],
};

const projects = [
  {
    title: 'WoZ Platform',
    description: 'Honours thesis — LLM evaluation via Wizard-of-Oz methodology.',
    url: 'https://github.com/tmerrien/oz-upei',
    tag: 'Research',
  },
  {
    title: 'Notto',
    description: 'Production React component library for starter kits.',
    url: 'https://github.com/tmerrien/notto',
    tag: 'Open Source',
  },
  {
    title: 'WorkSource ATS',
    description: 'Applicant tracking system for non-profits. Led 7-member team.',
    url: 'https://beta.worksourcealliance.ca',
    tag: 'Enterprise',
  },
  {
    title: 'Kirkwood Gaps',
    description: 'Orbital resonance simulation in the asteroid belt.',
    url: 'https://github.com/tmerrien/kirkwood_gaps',
    tag: 'Physics',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanguy Merrien &mdash; AI &amp; Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Tanguy Merrien — AI & Software Engineer specializing in conversational AI, RAG architectures, and agent-driven systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="top" className="px-3 md:px-4 pt-14 md:pt-3 pb-10 md:pb-3 w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden no-scrollbar">
        <div className="grid grid-cols-12 auto-rows-auto md:grid-rows-[repeat(6,minmax(0,1fr))] gap-2.5 md:h-[calc(100vh-24px)]">

          {/* Profile */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="col-span-12 md:col-span-4 md:row-span-2 glass-card rounded-[1.5rem] p-5 flex flex-col justify-between relative overflow-hidden min-h-0"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[var(--primary)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <span className="label block mb-1">Identity</span>
              <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter text-[var(--on-surface)]">
                Tanguy Merrien
              </h1>
              <p className="text-[var(--secondary)] text-sm mt-0.5">AI &amp; Software Engineer</p>
            </div>
            <div className="relative mt-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full glass-inner-border bg-[var(--surface-container-low)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--primary)] text-lg">psychology</span>
              </div>
              <div>
                <p className="text-[10px] font-['Space_Grotesk'] font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">Status</p>
                <p className="text-[11px] text-[var(--secondary)]">Architecting Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Research */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" id="research"
            className="col-span-12 md:col-span-5 md:row-span-4 glass-card rounded-[1.5rem] relative overflow-hidden min-h-0 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-container-low)] to-transparent opacity-60" />
            <div className="relative p-5 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[var(--primary)] font-bold">
                    Featured Research
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-extrabold tracking-tighter leading-tight text-[var(--on-surface)]">
                  WoZ Platform for LLM Evaluation
                </h2>
                <p className="text-[var(--secondary)] mt-4 text-sm leading-relaxed max-w-sm">
                  Honours Thesis: Developing high-fidelity Wizard-of-Oz frameworks to stress-test
                  large language model alignment in collaborative environments.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/tmerrien/oz-upei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary)] text-[var(--on-primary)] px-6 py-3 rounded-full font-['Space_Grotesk'] text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  View Thesis
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" id="experience"
            className="col-span-12 md:col-span-3 md:row-span-3 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-4">Experience</span>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.num} className="flex gap-3">
                  <div className="text-[var(--primary)] font-['Space_Grotesk'] font-bold text-sm">{job.num}</div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] font-bold text-sm text-[var(--on-surface)] tracking-tight leading-tight">
                      {job.company}
                    </h4>
                    <p className="text-[10px] text-[var(--secondary)]">{job.role} &middot; {job.desc}</p>
                    <p className="text-[10px] text-[var(--outline)]">{job.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About / Stack */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" id="about"
            className="col-span-12 md:col-span-4 md:row-span-3 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-3">About</span>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[9px] font-['Space_Grotesk'] font-bold text-[var(--primary)] mb-2 uppercase tracking-widest">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" id="education"
            className="col-span-12 md:col-span-3 md:row-span-3 glass-card rounded-[1.5rem] p-5 flex flex-col justify-between overflow-hidden min-h-0"
          >
            <div>
              <span className="label block mb-3">Education</span>
              <h3 className="font-['Space_Grotesk'] font-bold text-base text-[var(--on-surface)] leading-tight">
                University of Prince Edward Island
              </h3>
              <p className="text-sm text-[var(--secondary)] mt-1">B.Sc. Honours in Computer Science</p>
              <p className="text-[11px] text-[var(--outline)] mt-0.5">Minor: Physics</p>
            </div>
            <div className="pt-3 border-t border-white/20 mt-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--primary)] text-lg">school</span>
                <span className="font-['Space_Grotesk'] text-[10px] font-medium text-[var(--on-surface-variant)] uppercase tracking-widest">
                  Honours Distinction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" id="projects"
            className="col-span-12 md:col-span-5 md:row-span-2 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-3">Projects</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-36 glass-inner-border bg-white/30 rounded-xl p-3 hover:bg-white/50 transition-colors group"
                >
                  <span className="font-['Space_Grotesk'] text-[8px] uppercase tracking-widest text-[var(--primary)] font-bold">
                    {project.tag}
                  </span>
                  <h4 className="font-['Space_Grotesk'] font-bold text-[11px] text-[var(--on-surface)] mt-1 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-[9px] text-[var(--secondary)] mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[9px] text-[var(--outline)] group-hover:text-[var(--primary)] transition-colors">View</span>
                    <span className="material-symbols-outlined text-[10px] text-[var(--outline)] group-hover:text-[var(--primary)] transition-all">arrow_outward</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="col-span-12 md:col-span-5 md:row-span-1 glass-card rounded-[1.5rem] px-5 py-3 flex items-center justify-between group cursor-pointer hover:bg-white/40 transition-colors overflow-hidden min-h-0"
          >
            <a href="mailto:tmerrien@outlook.com" className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center text-[var(--on-primary)] flex-shrink-0">
                <span className="material-symbols-outlined text-lg">mail</span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm">Get in Touch</h4>
                <p className="text-xs text-[var(--secondary)]">
                  Open to AI/agent engineering &mdash; remote from Ottawa
                </p>
              </div>
            </a>
            <div className="w-9 h-9 rounded-full border border-[var(--primary)]/20 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--on-primary)] transition-all flex-shrink-0 ml-3">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </motion.div>

          {/* Harris Institute */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible"
            className="col-span-12 md:col-span-2 md:row-span-1 glass-card rounded-[1.5rem] p-4 flex flex-col justify-center overflow-hidden min-h-0"
          >
            <span className="material-symbols-outlined text-[var(--primary)] text-lg mb-1">music_note</span>
            <p className="font-['Space_Grotesk'] text-[9px] font-bold text-[var(--on-surface-variant)] uppercase tracking-widest">
              Harris Institute
            </p>
            <p className="text-[10px] text-[var(--secondary)] mt-0.5">Sound Engineering</p>
          </motion.div>

        </div>
      </div>
    </>
  );
}
