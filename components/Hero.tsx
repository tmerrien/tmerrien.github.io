'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const setSize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      canvas.width = p.offsetWidth;
      canvas.height = p.offsetHeight;
    };
    setSize();

    type P = { x: number; y: number; s: number; o: number; fs: number; fo: boolean };
    const mk = (): P => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, s: Math.random() / 5 + 0.05, o: 0.5, fs: Date.now() + Math.random() * 800 + 200, fo: false });
    const rs = (p: P) => Object.assign(p, mk(), { y: canvas.height });
    let ps = Array.from({ length: Math.floor(canvas.width * canvas.height / 12000) }, mk);
    let raf = 0;
    const dark = () => document.documentElement.classList.contains('dark');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const c = dark() ? '250,250,250' : '24,24,27';
      ps.forEach(p => {
        p.y -= p.s;
        if (p.y < 0) rs(p);
        if (!p.fo && Date.now() > p.fs) p.fo = true;
        if (p.fo) { p.o -= 0.006; if (p.o <= 0) rs(p); }
        ctx.fillStyle = `rgba(${c},${p.o})`;
        ctx.fillRect(p.x, p.y, 0.8, Math.random() * 1.5 + 0.5);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { setSize(); ps = Array.from({ length: Math.floor(canvas.width * canvas.height / 12000) }, mk); };
    window.addEventListener('resize', onResize);
    raf = requestAnimationFrame(draw);
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-10 sm:pb-14 px-5 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      <ParticleCanvas />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <AnimatedGradientText className="mb-6 !mx-0">
            <span className="text-xs font-mono font-bold tracking-wide">AI & SOFTWARE ENGINEER</span>
          </AnimatedGradientText>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[0.95]">
          Tanguy<br />Merrien
        </motion.h1>
        <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mb-6" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Building production conversational AI systems — RAG pipelines, agent architectures,
          and LLM-driven workflows. Published research on evaluating human-AI interaction quality.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
          <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:opacity-90 text-white cursor-pointer")}>
            Get in touch
          </a>
          <a href="#projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "cursor-pointer")}>
            View projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
