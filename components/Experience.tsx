export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
      
      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Developer — Revio</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">Dec 2025 – Present</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">AI Sales CRM</p>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• Building and maintaining a production RAG system powering AI-driven customer engagement across social media DMs</li>
            <li>• Developing conversational AI agents for sales funnel automation: lead qualification, call booking, scheduled follow-ups, and human handovers</li>
            <li>• Implementing conversation classification pipelines to route and prioritize interactions based on intent</li>
            <li>• Contributing to an AI autopilot system for automated outbound outreach</li>
            <li>• Building internal tools and customer service infrastructure at scale</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Developer — WorkSource Alliance</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">2023 – Dec 2025</span>
          </div>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• Led all technology decision-making across internal and external digital systems</li>
            <li>• Architected a full-scale applicant tracking system using Next.js, Supabase, and FastAPI; managed a 7-member team</li>
            <li>• Designed job board platform serving non-profits and institutions across PEI</li>
            <li>• Built scalable deployment infrastructure via Vercel</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solution Consultant — ADL</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">2024 – 2025</span>
          </div>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• Conducted gap analysis of internal marketing and operations platforms</li>
            <li>• Developed a B2B food show booking solution using Next.js and PostgreSQL</li>
            <li>• Led migration of legacy WordPress infrastructure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
