const projects = [
  {
    title: 'WoZ Platform for LLM Evaluation',
    description: 'Honours thesis research platform for controlled evaluation of LLM conversational quality using Wizard-of-Oz methodology.',
    url: 'https://github.com/tmerrien/oz-upei',
    tech: ['Next.js', 'Supabase', 'Ollama', 'Vercel AI SDK'],
  },
  {
    title: 'Notto — React Component Library',
    description: 'Production-ready React component library bridging basic component libraries and full starter kits. Built with Next.js 15 and shadcn/ui.',
    url: 'https://github.com/tmerrien/notto',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui'],
  },
  {
    title: 'WorkSource Alliance ATS',
    description: 'Full-scale applicant tracking system serving non-profits and institutions. Led architecture and a 7-member development team.',
    url: 'https://beta.worksourcealliance.ca',
    tech: ['Next.js', 'Supabase', 'FastAPI', 'TypeScript'],
  },
  {
    title: 'Kirkwood Gaps Simulation',
    description: 'Physics simulation of orbital resonance gaps in the asteroid belt due to Jupiter\'s gravitational perturbations.',
    url: 'https://github.com/tmerrien/kirkwood_gaps',
    tech: ['Python', 'NumPy', 'Matplotlib'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                {project.title} ↗
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
