'use client';
import { FadeIn, FadeInStagger, FadeInItem } from './FadeIn';
import { Timeline, TimelineItem, TimelineDot, TimelineContent, TimelineHeading, TimelineLine } from './ui/timeline';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const jobs = [
  {
    role: 'Developer',
    company: 'Revio',
    label: 'AI Sales CRM',
    period: 'Dec 2025 — Present',
    status: 'current' as const,
    points: [
      'Production RAG system for AI-driven customer engagement across social media DMs',
      'Conversational AI agents: lead qualification, call booking, follow-ups, human handovers',
      'Conversation classification pipelines for intent-based routing',
      'AI autopilot for automated outbound outreach',
      'Internal tools and customer service infrastructure at scale',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'WorkSource Alliance',
    period: '2023 — Dec 2025',
    status: 'done' as const,
    points: [
      'Led all technology decisions across internal and external digital systems',
      'Architected ATS using Next.js, Supabase, FastAPI; managed 7-member team',
      'Job board platform serving non-profits across PEI',
      'Scalable deployment infrastructure via Vercel',
    ],
  },
  {
    role: 'Solution Consultant',
    company: 'ADL',
    label: 'Amalgamated Dairies Limited',
    period: '2024 — 2025',
    status: 'done' as const,
    points: [
      'Gap analysis of marketing and operations platforms',
      'B2B food show booking solution (Next.js + PostgreSQL)',
      'Legacy WordPress migration',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-12 px-5 sm:px-6 max-w-4xl mx-auto">
      <Separator className="mb-8" />
      <FadeIn>
        <h2 className="text-xs font-mono gradient-text font-bold mb-6 tracking-wide">EXPERIENCE</h2>
      </FadeIn>
      <FadeInStagger>
        <Timeline positions="left">
          {jobs.map((job, i) => (
            <FadeInItem key={job.company}>
              <TimelineItem status={job.status === 'current' ? 'default' : 'done'}>
                <TimelineHeading>
                  {job.role} <span className="text-muted-foreground font-normal">— {job.company}</span>
                </TimelineHeading>
                <TimelineDot status={job.status === 'current' ? 'current' : 'done'} />
                {i < jobs.length - 1 && <TimelineLine done={job.status === 'done'} />}
                <TimelineContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="font-mono text-[11px]">{job.period}</Badge>
                    {job.label && <span className="text-xs text-muted-foreground">{job.label}</span>}
                  </div>
                  <ul className="space-y-1.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:bg-gradient-to-r before:from-[#2563EB] before:to-[#7C3AED] before:rounded-full">
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineContent>
              </TimelineItem>
            </FadeInItem>
          ))}
        </Timeline>
      </FadeInStagger>
    </section>
  );
}
