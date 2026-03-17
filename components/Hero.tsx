export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      <p className="text-xs font-mono text-[#2563EB] dark:text-[#60A5FA] mb-4 tracking-wide">
        AI &amp; SOFTWARE ENGINEER
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#18181B] dark:text-white mb-6 tracking-tight leading-tight">
        Tanguy Merrien
      </h1>
      <p className="text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl">
        Building production conversational AI systems — RAG pipelines, agent architectures,
        and LLM-driven workflows. Published research on evaluating human-AI interaction quality.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] dark:bg-white text-white dark:text-[#09090B] text-sm font-medium rounded-md hover:bg-[#3F3F46] dark:hover:bg-[#E4E4E7] transition-colors duration-200 cursor-pointer"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E4E4E7] dark:border-[#3F3F46] text-sm font-medium rounded-md text-[#18181B] dark:text-[#E2E8F0] hover:bg-[#F4F4F5] dark:hover:bg-[#18181B] transition-colors duration-200 cursor-pointer"
        >
          View projects
        </a>
      </div>
    </section>
  );
}
