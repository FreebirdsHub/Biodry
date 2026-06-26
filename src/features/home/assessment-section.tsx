'use client';

import React from 'react';
import { Container } from '@/components/shared/container';
import { AssessmentFunnel } from '@/components/forms/assessment-funnel';
import { FadeUp } from '@/components/animations/fade-up';

export function AssessmentSection() {
  return (
    <section
      id="assessment"
      className="py-24"
      style={{
        background: 'var(--color-brand-blue)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <FadeUp delay={0.1}>
            <span
              className="kicker"
              style={{ color: 'var(--color-moisture-blue-subtle)' }}
            >
              Quotation Calculator
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2
              className="text-3xl sm:text-5xl tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#FAFAF8',
                fontWeight: 400,
              }}
            >
              Request a free price quotation
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p
              className="text-lg"
              style={{ color: 'rgba(250,250,248,0.60)' }}
            >
              Do the AutoTest in 10 minutes! Provide baseline property dimensions and symptoms.
              At the end of the test, receive a free quote and preliminary analysis report within 24 hours.
            </p>
          </FadeUp>

          {/* Trust strip */}
          <FadeUp delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { label: 'No Obligation', icon: '✓' },
                { label: '24hr Response', icon: '✓' },
                { label: 'Certified Engineers', icon: '✓' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--color-moisture-blue-subtle)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ color: 'var(--color-brand-green-subtle)' }}>
                    {item.icon}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <AssessmentFunnel />
        </FadeUp>
      </Container>
    </section>
  );
}

export default AssessmentSection;
