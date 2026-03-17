'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Revio — AI Sales CRM</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">Dec 2025 – Present</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Building and maintaining a production RAG system powering AI-driven customer engagement across social media DMs</li>
                <li>• Developing conversational AI agents for sales funnel automation: lead qualification, call booking, scheduled follow-ups, and human handovers</li>
                <li>• Implementing conversation classification pipelines to route and prioritize interactions based on intent</li>
                <li>• Contributing to an AI autopilot system that automates outbound outreach and end-to-end prospect conversations</li>
                <li>• Building internal tools and customer service infrastructure to support platform operations at scale</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">WorkSource Alliance</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">2023 – Dec 2025</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Led all technology decision-making across the organization's internal and external digital systems</li>
                <li>• Architected and built a full-scale applicant tracking system using Next.js, Supabase, and FastAPI; managed a 7-member development team</li>
                <li>• Designed system architecture for the job board platform serving non-profits and institutions across PEI</li>
                <li>• Built scalable deployment infrastructure connecting website, job board, and ATS via Vercel</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Solution Consultant
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Amalgamated Dairies Limited (ADL)</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">2024 – 2025</span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Conducted gap analysis of internal marketing and operations platforms to identify modernization opportunities</li>
                <li>• Developed a B2B food show booking management solution using Next.js and PostgreSQL</li>
                <li>• Led migration of legacy WordPress infrastructure to modern, maintainable components</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 