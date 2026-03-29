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
    title: 'WoZ Platform for LLM Evaluation',
    description: 'Honours thesis research platform enabling controlled evaluation of LLM conversational quality using Wizard-of-Oz methodology.',
    tech: ['Next.js', 'Supabase', 'Ollama', 'AI SDK'],
    url: 'https://github.com/tmerrien/oz-upei',
    tag: 'Research',
  },
  {
    title: 'Notto',
    description: 'Production-ready React component library bridging basic component libraries and full starter kits.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'shadcn/ui'],
    url: 'https://github.com/tmerrien/notto',
    tag: 'Open Source',
  },
  {
    title: 'WorkSource Alliance ATS',
    description: 'Full-scale applicant tracking system serving non-profits and institutions. Led architecture and a 7-member team.',
    tech: ['Next.js', 'Supabase', 'FastAPI'],
    url: 'https://beta.worksourcealliance.ca',
    tag: 'Enterprise',
  },
  {
    title: 'Kirkwood Gaps Simulation',
    description: 'Physics simulation of orbital resonance gaps in the asteroid belt using numerical integration.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
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

      <div id="top" className="px-6 md:pl-24 md:pr-8 pt-4 pb-10 max-w-[1440px] mx-auto w-full h-[calc(100vh-48px)] overflow-y-auto md:overflow-hidden no-scrollbar">
        {/* Bento Grid */}
        <div className="grid grid-cols-12 auto-rows-auto md:grid-rows-[repeat(6,minmax(0,1fr))] gap-3 md:h-[calc(100vh-100px)]">

          {/* Module 1: Profile */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="col-span-12 md:col-span-4 md:row-span-2 glass-card rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[var(--primary)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <span className="label block mb-2">Identity</span>
              <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tighter text-[var(--on-surface)]">
                Tanguy Merrien
              </h1>
              <p className="text-[var(--secondary)] text-lg mt-1">AI &amp; Software Engineer</p>
            </div>
            <div className="relative mt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-inner-border bg-[var(--surface-container-low)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--primary)]">psychology</span>
              </div>
              <div>
                <p className="text-[11px] font-['Space_Grotesk'] font-bold text-[var(--on-surface-variant)] uppercase tracking-wider">
                  Status
                </p>
                <p className="text-xs text-[var(--secondary)]">Architecting Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Module 2: Featured Research */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            id="research"
            className="col-span-12 md:col-span-5 md:row-span-4 glass-card rounded-[2rem] p-0 relative overflow-hidden group"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-container-low)] to-transparent opacity-60" />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="font-['Space_Grotesk'] text-[11px] uppercase tracking-widest text-[var(--primary)] font-bold">
                    Featured Research
                  </span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-extrabold tracking-tighter leading-tight text-[var(--on-surface)]">
                  WoZ Platform for LLM Evaluation
                </h2>
                <p className="text-[var(--secondary)] mt-6 text-base md:text-lg leading-relaxed max-w-sm">
                  Honours Thesis: Developing high-fidelity Wizard-of-Oz frameworks to stress-test
                  large language model alignment in collaborative environments.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://github.com/tmerrien/oz-upei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary)] text-[var(--on-primary)] px-8 py-4 rounded-full font-['Space_Grotesk'] text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  View Thesis
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Module 3: Experience / Trajectory */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            id="experience"
            className="col-span-12 md:col-span-3 md:row-span-3 glass-card rounded-[2rem] p-8"
          >
            <span className="label block mb-6">Experience</span>
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.num} className="flex gap-4">
                  <div className="text-[var(--primary)] font-['Space_Grotesk'] font-bold text-lg">
                    {job.num}
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] font-bold text-[var(--on-surface)] tracking-tight">
                      {job.role} <span className="font-normal text-[var(--secondary)]">&mdash; {job.company}</span>
                    </h4>
                    <p className="text-[11px] text-[var(--outline)] mt-0.5">{job.period}</p>
                    <p className="text-xs text-[var(--secondary)] font-medium mt-0.5">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Module 4: Core Stack */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            id="about"
            className="col-span-12 md:col-span-4 md:row-span-3 glass-card rounded-[2rem] p-8"
          >
            <span className="label block mb-6">About</span>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[10px] font-['Space_Grotesk'] font-bold text-[var(--primary)] mb-3 uppercase tracking-widest">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Module 5: Education */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            id="education"
            className="col-span-12 md:col-span-3 md:row-span-3 glass-card rounded-[2rem] p-8 flex flex-col justify-between"
          >
            <div>
              <span className="label block mb-4">Education</span>
              <h3 className="font-['Space_Grotesk'] font-bold text-xl text-[var(--on-surface)] leading-tight">
                University of Prince Edward Island
              </h3>
              <p className="text-[var(--secondary)] mt-2">B.Sc. Honours in Computer Science</p>
              <p className="text-xs text-[var(--outline)] mt-1">Minor: Physics</p>
            </div>
            <div className="pt-6 border-t border-white/20 mt-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--primary)]">school</span>
                <span className="font-['Space_Grotesk'] text-[11px] font-medium text-[var(--on-surface-variant)] uppercase tracking-widest">
                  Honours Distinction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Module 6: Projects Carousel */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            id="projects"
            className="col-span-12 md:col-span-5 md:row-span-2 glass-card rounded-[2rem] p-8"
          >
            <span className="label block mb-4">Projects</span>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-44 glass-inner-border bg-white/30 rounded-2xl p-4 hover:bg-white/50 transition-colors group"
                >
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase tracking-widest text-[var(--primary)] font-bold">
                    {project.tag}
                  </span>
                  <h4 className="font-['Space_Grotesk'] font-bold text-xs text-[var(--on-surface)] mt-1.5 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-[10px] text-[var(--secondary)] mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="text-[10px] text-[var(--outline)] group-hover:text-[var(--primary)] transition-colors">
                      View
                    </span>
                    <span className="material-symbols-outlined text-xs text-[var(--outline)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-all">
                      arrow_outward
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Module 7: Contact / Laboratory */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="col-span-12 md:col-span-5 md:row-span-1 glass-card rounded-[2rem] px-8 py-6 flex items-center justify-between group cursor-pointer hover:bg-white/40 transition-colors"
          >
            <a href="mailto:tmerrien@outlook.com" className="flex items-center gap-6 w-full">
              <div className="w-14 h-14 rounded-2xl bg-[var(--primary)] flex items-center justify-center text-[var(--on-primary)] flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-bold text-lg">Get in Touch</h4>
                <p className="text-sm text-[var(--secondary)]">
                  Open to AI/agent engineering opportunities &mdash; remote from Ottawa
                </p>
              </div>
            </a>
            <div className="w-12 h-12 rounded-full border border-[var(--primary)]/20 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--on-primary)] transition-all flex-shrink-0 ml-4">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </motion.div>

          {/* Module 8: Sound Engineering (secondary education) */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="col-span-12 md:col-span-2 md:row-span-1 glass-card rounded-[2rem] p-6 flex flex-col justify-center"
          >
            <span className="material-symbols-outlined text-[var(--primary)] mb-2">music_note</span>
            <p className="font-['Space_Grotesk'] text-[10px] font-bold text-[var(--on-surface-variant)] uppercase tracking-widest">
              Harris Institute
            </p>
            <p className="text-[11px] text-[var(--secondary)] mt-1">Sound Engineering</p>
          </motion.div>

        </div>
      </div>
    </>
  );
}
