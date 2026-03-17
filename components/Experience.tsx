const jobs = [
  {
    role: 'Developer',
    company: 'Revio',
    label: 'AI Sales CRM',
    period: 'Dec 2025 — Present',
    points: [
      'Building and maintaining a production RAG system powering AI-driven customer engagement across social media DMs',
      'Developing conversational AI agents for sales funnel automation: lead qualification, call booking, scheduled follow-ups, and human handovers',
      'Implementing conversation classification pipelines to route and prioritize interactions based on intent',
      'Contributing to an AI autopilot system for automated outbound outreach',
      'Building internal tools and customer service infrastructure at scale',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'WorkSource Alliance',
    period: '2023 — Dec 2025',
    points: [
      'Led all technology decision-making across internal and external digital systems',
      'Architected a full-scale applicant tracking system using Next.js, Supabase, and FastAPI; managed a 7-member team',
      'Designed job board platform serving non-profits and institutions across PEI',
      'Built scalable deployment infrastructure via Vercel',
    ],
  },
  {
    role: 'Solution Consultant',
    company: 'ADL',
    label: 'Amalgamated Dairies Limited',
    period: '2024 — 2025',
    points: [
      'Conducted gap analysis of internal marketing and operations platforms',
      'Developed a B2B food show booking solution using Next.js and PostgreSQL',
      'Led migration of legacy WordPress infrastructure',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto border-t border-[#E4E4E7] dark:border-[#27272A]">
      <h2 className="text-xs font-mono text-[#2563EB] dark:text-[#60A5FA] mb-10 tracking-wide">
        EXPERIENCE
      </h2>
      <div className="space-y-12">
        {jobs.map((job) => (
          <div key={job.company} className="grid sm:grid-cols-[200px_1fr] gap-4">
            <div>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">{job.period}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#18181B] dark:text-white mb-1">
                {job.role}
                <span className="text-[#64748B] dark:text-[#94A3B8] font-normal"> — {job.company}</span>
              </h3>
              {job.label && (
                <p className="text-xs text-[#94A3B8] dark:text-[#52525B] mb-3">{job.label}</p>
              )}
              <ul className="space-y-2">
                {job.points.map((point, i) => (
                  <li key={i} className="text-sm text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#E4E4E7] dark:before:bg-[#3F3F46] before:rounded-full">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
