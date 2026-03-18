'use client';
import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedGradientText } from './ui/animated-gradient-text';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    setSize();

    type Particle = { x: number; y: number; speed: number; opacity: number; fadeStart: number; fadingOut: boolean };

    const count = () => Math.floor((canvas.width * canvas.height) / 12000);
    const make = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() / 5 + 0.05,
      opacity: 0.5,
      fadeStart: Date.now() + Math.random() * 800 + 200,
      fadingOut: false,
    });
    const reset = (p: Particle) => { Object.assign(p, make()); p.y = canvas.height; };

    let particles = Array.from({ length: count() }, make);
    let raf = 0;

    const isDark = () => document.documentElement.classList.contains('dark');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = isDark() ? '250, 250, 250' : '24, 24, 27';
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) { p.opacity -= 0.006; if (p.opacity <= 0) reset(p); }
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 1.5 + 0.5);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { setSize(); particles = Array.from({ length: count() }, make); };
    window.addEventListener('resize', onResize);
    raf = requestAnimationFrame(draw);
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
}

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="home" className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 px-5 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      <ParticleCanvas />
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} relative z-10`}>
        <AnimatedGradientText className="mb-6">
          <span className="text-xs font-mono font-bold tracking-wide">AI & SOFTWARE ENGINEER</span>
        </AnimatedGradientText>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[0.95]">
          Tanguy<br />Merrien
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
