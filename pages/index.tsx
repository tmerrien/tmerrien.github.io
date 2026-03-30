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
  { title: 'WoZ Platform', description: 'Honours thesis — LLM evaluation via Wizard-of-Oz.', url: 'https://github.com/tmerrien/oz-upei', tag: 'Research' },
  { title: 'Notto', description: 'Production React component library.', url: 'https://github.com/tmerrien/notto', tag: 'Open Source' },
  { title: 'WorkSource ATS', description: 'Applicant tracking for non-profits.', url: 'https://beta.worksourcealliance.ca', tag: 'Enterprise' },
  { title: 'Kirkwood Gaps', description: 'Orbital resonance simulation.', url: 'https://github.com/tmerrien/kirkwood_gaps', tag: 'Physics' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanguy Merrien &mdash; AI &amp; Software Engineer</title>
        <meta name="description" content="Portfolio of Tanguy Merrien — AI & Software Engineer specializing in conversational AI, RAG architectures, and agent-driven systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="top" className="px-3 md:px-3 pt-14 md:pt-3 pb-10 md:pb-3 w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden no-scrollbar">
        {/*
          5-row grid:
          Row 1: Profile(4,2) | Research(5,3) | Experience(3,2)
          Row 2: Profile cont  | Research cont | Experience cont
          Row 3: About(4,2)   | Research cont | Education(3,3)
          Row 4: About cont   | Projects(5,2) | Education cont
          Row 5: Contact(4,1) | Projects cont | Education cont
        */}
        <div className="grid grid-cols-12 auto-rows-auto md:grid-rows-5 gap-2.5 md:h-screen md:max-h-screen">

          {/* Profile — 4col, 2row */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="col-span-12 md:col-span-4 md:row-span-2 glass-card rounded-[1.5rem] p-5 flex flex-col justify-between relative overflow-hidden min-h-0"
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <span className="label block mb-1">Identity</span>
              <h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter">Tanguy Merrien</h1>
              <p className="text-[var(--secondary)] text-sm mt-0.5">AI &amp; Software Engineer</p>
            </div>
            <div className="relative mt-auto pt-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full glass-inner-border bg-[var(--surface-container-low)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--primary)] text-lg">psychology</span>
              </div>
              <div>
                <p className="text-[10px] font-['Space_Grotesk'] font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">Status</p>
                <p className="text-[11px] text-[var(--secondary)]">Architecting Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Featured Research — 5col, 3row */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" id="research"
            className="col-span-12 md:col-span-5 md:row-span-3 glass-card rounded-[1.5rem] relative overflow-hidden min-h-0 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-container-low)] to-transparent opacity-60" />
            <div className="relative p-5 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[var(--primary)] font-bold">Featured Research</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-extrabold tracking-tighter leading-tight">WoZ Platform for LLM Evaluation</h2>
                <p className="text-[var(--secondary)] mt-3 text-sm leading-relaxed max-w-sm">
                  Honours Thesis: Developing high-fidelity Wizard-of-Oz frameworks to stress-test large language model alignment in collaborative environments.
                </p>
              </div>
              <a href="https://github.com/tmerrien/oz-upei" target="_blank" rel="noopener noreferrer"
                className="mt-4 bg-[var(--primary)] text-[var(--on-primary)] px-6 py-2.5 rounded-full font-['Space_Grotesk'] text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-all w-fit"
              >
                View Thesis <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </a>
            </div>
          </motion.div>

          {/* Experience — 3col, 2row */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" id="experience"
            className="col-span-12 md:col-span-3 md:row-span-2 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-3">Experience</span>
            <div className="space-y-3">
              {jobs.map((job) => (
                <div key={job.num} className="flex gap-2.5">
                  <div className="text-[var(--primary)] font-['Space_Grotesk'] font-bold text-sm">{job.num}</div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] font-bold text-xs tracking-tight leading-tight">{job.company}</h4>
                    <p className="text-[10px] text-[var(--secondary)]">{job.role} &middot; {job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About / Stack — 4col, 2row */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" id="about"
            className="col-span-12 md:col-span-4 md:row-span-2 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-2">About</span>
            <div className="space-y-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[9px] font-['Space_Grotesk'] font-bold text-[var(--primary)] mb-1.5 uppercase tracking-widest">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (<span key={item} className="chip">{item}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education — 3col, 3row */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" id="education"
            className="col-span-12 md:col-span-3 md:row-span-3 glass-card rounded-[1.5rem] p-5 flex flex-col justify-between overflow-hidden min-h-0"
          >
            <div>
              <span className="label block mb-2">Education</span>
              <h3 className="font-['Space_Grotesk'] font-bold text-base leading-tight">University of Prince Edward Island</h3>
              <p className="text-sm text-[var(--secondary)] mt-1">B.Sc. Honours in Computer Science</p>
              <p className="text-[11px] text-[var(--outline)] mt-0.5">Minor: Physics</p>
            </div>
            <div>
              <div className="flex items-center gap-2 pt-3 border-t border-white/20">
                <span className="material-symbols-outlined text-[var(--primary)] text-lg">school</span>
                <span className="font-['Space_Grotesk'] text-[10px] font-medium text-[var(--on-surface-variant)] uppercase tracking-widest">Honours Distinction</span>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                <span className="material-symbols-outlined text-[var(--primary)] text-lg">music_note</span>
                <div>
                  <p className="font-['Space_Grotesk'] text-[10px] font-medium text-[var(--on-surface-variant)] uppercase tracking-widest">Harris Institute</p>
                  <p className="text-[10px] text-[var(--secondary)]">Sound Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects — 5col, 2row */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" id="projects"
            className="col-span-12 md:col-span-5 md:row-span-2 glass-card rounded-[1.5rem] p-5 overflow-hidden min-h-0"
          >
            <span className="label block mb-2">Projects</span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {projects.map((project) => (
                <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 w-36 glass-inner-border bg-white/30 rounded-xl p-3 hover:bg-white/50 transition-colors group"
                >
                  <span className="font-['Space_Grotesk'] text-[8px] uppercase tracking-widest text-[var(--primary)] font-bold">{project.tag}</span>
                  <h4 className="font-['Space_Grotesk'] font-bold text-[11px] mt-1 leading-snug">{project.title}</h4>
                  <p className="text-[9px] text-[var(--secondary)] mt-1 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <span className="text-[9px] text-[var(--outline)] group-hover:text-[var(--primary)] transition-colors">View</span>
                    <span className="material-symbols-outlined text-[10px] text-[var(--outline)] group-hover:text-[var(--primary)] transition-all">arrow_outward</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact — 4col, 1row */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="col-span-12 md:col-span-4 md:row-span-1 glass-card rounded-[1.5rem] px-5 py-3 flex items-center justify-between group hover:bg-white/40 transition-colors overflow-hidden min-h-0"
          >
            <a href="mailto:tmerrien@outlook.com" className="flex items-center gap-4 w-full">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center text-[var(--on-primary)] flex-shrink-0">
                <span className="material-symbols-outlined text-lg">mail</span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm">Get in Touch</h4>
                <p className="text-[11px] text-[var(--secondary)]">AI/agent engineering &mdash; remote from Ottawa</p>
              </div>
            </a>
            <div className="flex gap-3 flex-shrink-0 ml-3">
              <a href="https://github.com/tmerrien" target="_blank" rel="noopener noreferrer" className="text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/tanguy-merrien-26aa96146/" target="_blank" rel="noopener noreferrer" className="text-[var(--outline-variant)] hover:text-[var(--on-surface)] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
