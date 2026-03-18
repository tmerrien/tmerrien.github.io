'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-12 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto border-t border-[#E4E4E7] dark:border-[#27272A]">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs font-mono gradient-text font-bold mb-10 tracking-wide">
          EDUCATION &amp; RESEARCH
        </h2>

        <div className="stagger grid sm:grid-cols-[200px_1fr] gap-4 mb-10">
          <div>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">Dec 2025</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#18181B] dark:text-white mb-1">
              B.Sc. Computer Science (Honours)
            </h3>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-4">
              University of Prince Edward Island — Minor: Physics
            </p>
            <div className="p-4 rounded-lg border border-[#E4E4E7] dark:border-[#27272A] bg-gradient-to-br from-white to-[#F8FAFF] dark:from-[#18181B] dark:to-[#1a1a2e]">
              <p className="text-xs font-mono font-bold gradient-text mb-2 tracking-wide">
                HONOURS THESIS
              </p>
              <p className="text-sm font-medium text-[#18181B] dark:text-white mb-2 italic">
                &ldquo;Building a Wizard-of-Oz Platform for Evaluating LLM Conversational Quality&rdquo;
              </p>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Designed and built a research platform for controlled evaluation of LLM response quality.
                Supports three experimental conditions (direct-AI, human-mediated AI, direct-human) to study
                how tone, empathy, refusal strategies, and formatting affect user trust in conversational AI systems.
              </p>
            </div>
          </div>
        </div>

        <div className="stagger grid sm:grid-cols-[200px_1fr] gap-4">
          <div>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">Apr 2020</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#18181B] dark:text-white mb-1">
              Professional Certificate in Sound Engineering
            </h3>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">Harris Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}
