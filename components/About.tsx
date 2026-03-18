'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  const skills = [
    { label: 'AI/LLM', items: ['RAG Pipelines', 'Agent Design', 'Prompt Engineering', 'Context Engineering', 'LLM UX'] },
    { label: 'Stack', items: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'] },
    { label: 'Infra', items: ['Vercel', 'Supabase', 'Docker', 'Azure'] },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto border-t border-[#E4E4E7] dark:border-[#27272A]">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs font-mono gradient-text font-bold mb-6 tracking-wide">
          ABOUT
        </h2>
        <p className="text-base text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mb-10">
          AI-focused software engineer with 4+ years of full-stack experience. I specialize in
          RAG architectures, conversational agent design, and LLM UX — backed by an honours thesis
          on evaluating human-AI interaction quality. Bilingual in English and French.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <div key={group.label} className="stagger">
              <h3 className="text-xs font-mono font-bold text-[#18181B] dark:text-white mb-3 tracking-wide">
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-[#64748B] dark:text-[#94A3B8]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
