const projects = [
  {
    title: 'WoZ Platform for LLM Evaluation',
    description: 'Honours thesis research platform enabling controlled evaluation of LLM conversational quality using Wizard-of-Oz methodology. Three experimental conditions to study how tone, empathy, and refusal strategies affect user trust.',
    tech: ['Next.js', 'Supabase', 'Ollama', 'Vercel AI SDK'],
    url: 'https://github.com/tmerrien/oz-upei',
    tag: 'Research',
  },
  {
    title: 'Notto',
    description: 'Production-ready React component library bridging basic component libraries and full starter kits. Inspired by SwiftUI and Vue3 patterns.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'shadcn/ui'],
    url: 'https://github.com/tmerrien/notto',
    tag: 'Open Source',
  },
  {
    title: 'WorkSource Alliance ATS',
    description: 'Full-scale applicant tracking system serving non-profits and institutions. Led architecture and a 7-member development team.',
    tech: ['Next.js', 'Supabase', 'FastAPI', 'TypeScript'],
    url: 'https://beta.worksourcealliance.ca',
    tag: 'Enterprise',
  },
  {
    title: 'Kirkwood Gaps Simulation',
    description: 'Physics simulation of orbital resonance gaps in the asteroid belt due to Jupiter\'s gravitational perturbations using numerical integration.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    url: 'https://github.com/tmerrien/kirkwood_gaps',
    tag: 'Physics',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto border-t border-[#E4E4E7] dark:border-[#27272A]">
      <h2 className="text-xs font-mono text-[#2563EB] dark:text-[#60A5FA] mb-10 tracking-wide">
        PROJECTS
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-lg border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] hover:border-[#2563EB] dark:hover:border-[#60A5FA] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] tracking-wider uppercase">
                {project.tag}
              </span>
              <svg className="w-4 h-4 text-[#D4D4D8] dark:text-[#3F3F46] group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-[#18181B] dark:text-white mb-2 font-mono">
              {project.title}
            </h3>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#F4F4F5] dark:bg-[#27272A] text-[#52525B] dark:text-[#71717A] font-mono">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
