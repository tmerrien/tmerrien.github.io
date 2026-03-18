'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-12 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto">
      <Separator className="mb-12" />
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs font-mono gradient-text font-bold mb-10 tracking-wide">
          PROJECTS
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="stagger group cursor-pointer"
            >
              <Card className="h-full card-glow hover:border-[#2563EB]/40 dark:hover:border-[#60A5FA]/40 transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="gradient-text font-mono text-[10px] font-bold tracking-wider">
                      {project.tag}
                    </Badge>
                    <svg className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-base font-semibold mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-[11px] font-mono font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
