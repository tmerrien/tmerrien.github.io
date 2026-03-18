'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  const skills = [
    { label: 'AI/LLM', items: ['RAG Pipelines', 'Agent Design', 'Prompt Engineering', 'Context Engineering', 'LLM UX'] },
    { label: 'Stack', items: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'] },
    { label: 'Infra', items: ['Vercel', 'Supabase', 'Docker', 'Azure'] },
  ];

  return (
    <section id="about" className="py-8 sm:py-12 px-5 sm:px-6 max-w-4xl mx-auto">
      <Separator className="mb-8" />
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs font-mono gradient-text font-bold mb-6 tracking-wide">
          ABOUT
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
          AI-focused software engineer with 4+ years of full-stack experience. I specialize in
          RAG architectures, conversational agent design, and LLM UX — backed by an honours thesis
          on evaluating human-AI interaction quality. Bilingual in English and French.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.label} className="stagger">
              <h3 className="text-xs font-mono font-bold mb-3 tracking-wide">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
