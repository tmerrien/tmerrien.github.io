'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-12 sm:py-16 px-5 sm:px-6 max-w-4xl mx-auto">
      <Separator className="mb-12" />
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-xs font-mono gradient-text font-bold mb-10 tracking-wide">
          EDUCATION &amp; RESEARCH
        </h2>

        <div className="stagger grid sm:grid-cols-[200px_1fr] gap-4 mb-10">
          <div>
            <Badge variant="outline" className="font-mono text-xs">Dec 2025</Badge>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">
              B.Sc. Computer Science (Honours)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              University of Prince Edward Island — Minor: Physics
            </p>
            <Card className="bg-gradient-to-br from-card to-[#F8FAFF] dark:from-card dark:to-[#1a1a2e]">
              <CardContent className="pt-5">
                <p className="text-xs font-mono font-bold gradient-text mb-2 tracking-wide">
                  HONOURS THESIS
                </p>
                <p className="text-sm font-medium mb-2 italic">
                  &ldquo;Building a Wizard-of-Oz Platform for Evaluating LLM Conversational Quality&rdquo;
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed and built a research platform for controlled evaluation of LLM response quality.
                  Supports three experimental conditions (direct-AI, human-mediated AI, direct-human) to study
                  how tone, empathy, refusal strategies, and formatting affect user trust in conversational AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="stagger grid sm:grid-cols-[200px_1fr] gap-4">
          <div>
            <Badge variant="outline" className="font-mono text-xs">Apr 2020</Badge>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">
              Professional Certificate in Sound Engineering
            </h3>
            <p className="text-sm text-muted-foreground">Harris Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}
