'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1 } },
};

const jobs = [
  {
    num: '01',
    role: 'Developer',
    company: 'Revio',
    label: 'AI Sales CRM',
    period: 'Dec 2025 — Present',
    points: [
      'Production RAG system for AI-driven customer engagement across social media DMs',
      'Conversational AI agents: lead qualification, call booking, follow-ups, human handovers',
      'Conversation classification pipelines for intent-based routing',
      'AI autopilot for automated outbound outreach',
      'Internal tools and customer service infrastructure at scale',
    ],
  },
  {
    num: '02',
    role: 'Senior Developer',
    company: 'WorkSource Alliance',
    period: '2023 — Dec 2025',
    points: [
      'Led all technology decisions across internal and external digital systems',
      'Architected ATS using Next.js, Supabase, FastAPI; managed 7-member team',
      'Job board platform serving non-profits across PEI',
      'Scalable deployment infrastructure via Vercel',
    ],
  },
  {
    num: '03',
    role: 'Solution Consultant',
    company: 'ADL',
    label: 'Amalgamated Dairies Limited',
    period: '2024 — 2025',
    points: [
      'Gap analysis of marketing and operations platforms',
      'B2B food show booking solution (Next.js + PostgreSQL)',
      'Legacy WordPress migration',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience &mdash; Tanguy Merrien</title>
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
          Experience
        </motion.h1>

        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-10">
          {jobs.map((job) => (
            <motion.div key={job.num} variants={item} className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[var(--primary-accent)] font-['Space_Grotesk'] font-bold text-2xl">{job.num}</span>
                <div>
                  <h2 className="font-['Space_Grotesk'] font-bold text-2xl tracking-tight">
                    {job.role} <span className="text-[var(--secondary)] font-normal">&mdash; {job.company}</span>
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-[var(--outline)]">{job.period}</span>
                    {job.label && <span className="text-sm text-[var(--secondary)]">{job.label}</span>}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-10">
                {job.points.map((point, i) => (
                  <li key={i} className="text-base text-[var(--on-surface-variant)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[var(--primary-accent)] before:rounded-full">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
