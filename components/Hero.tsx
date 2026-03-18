'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="home" className="pt-20 sm:pt-28 pb-12 sm:pb-20 px-5 sm:px-6 max-w-4xl mx-auto">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <p className="text-xs font-mono gradient-text font-bold mb-4 tracking-wide">
          AI &amp; SOFTWARE ENGINEER
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
          Tanguy Merrien
        </h1>
        <div className="accent-line mb-6" />
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Building production conversational AI systems — RAG pipelines, agent architectures,
          and LLM-driven workflows. Published research on evaluating human-AI interaction quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
          <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:opacity-90 text-white cursor-pointer")}>
            Get in touch
          </a>
          <a href="#projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "cursor-pointer")}>
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
