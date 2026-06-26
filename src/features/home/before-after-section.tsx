'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/animations/fade-up';
import { BeforeAfterSlider } from './before-after-slider';

export function BeforeAfterSection() {
  return (
    <>
      {/* ── Capillary Rising Damp explainer (from biodry.in "What is capillary rising damp?") ── */}
      <section
        className="py-24"
        style={{
          background: 'var(--color-stone-100)',
          borderTop: '1px solid var(--border-hairline)',
          borderBottom: '1px solid var(--border-hairline)',
        }}
      >
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <span className="kicker">Understanding the Problem</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2
                  className="text-3xl sm:text-4xl tracking-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-ink-950)',
                    fontWeight: 400,
                  }}
                >
                  WHAT IS CAPILLARY RISING DAMP?
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                  Rising damp is a phenomenon often present in the walls of buildings directly in
                  contact with the ground. With Biodry, the water present in the ground is no longer
                  drawn upwards and into the walls.
                </p>
              </FadeUp>

              <FadeUp delay={0.35}>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[
                    { value: '2m+', label: 'Max moisture height in walls' },
                    { value: '100%', label: 'Guaranteed results' },
                    { value: '0', label: 'Chemical additives used' },
                    { value: '2hr', label: 'Installation time' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="p-4"
                      style={{
                        background: 'var(--color-stone-100)',
                        border: '1px solid var(--border-hairline)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-xs)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '28px',
                          fontWeight: 400,
                          color: 'var(--color-brand-blue)',
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        className="mt-1"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--color-ink-400)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.4} className="mt-2">
                <Link href="#assessment">
                  <Button
                    className="rounded-xs px-8 py-5 font-semibold transition-all duration-200"
                    style={{
                      background: 'var(--color-brand-blue)',
                      color: '#FAFAF8',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-blue-hover)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-brand)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-blue)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    FIND OUT MORE →
                  </Button>
                </Link>
              </FadeUp>
            </div>

            {/* Right: capillary.jpg image */}
            <div className="lg:col-span-6">
              <FadeUp delay={0.2}>
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-default)',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/biodry-original/capillary.jpg"
                    alt="Capillary rising damp in wall — water ascending through masonry"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Cinematic Before/After Slider ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-brand-blue-deep)' }}>
        {/* Subtle Capillary Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern id="navy-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#navy-grid)" />
          </svg>
        </div>

        <Container size="lg" className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-4">
            <FadeUp delay={0.1}>
              <span className="kicker" style={{ color: 'var(--color-copper)' }}>
                Visual Proof
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2
                className="text-3xl sm:text-5xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: '#FAFAF8', fontWeight: 400 }}
              >
                Watch capillary damp disappear
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-lg" style={{ color: 'var(--color-ink-400)' }}>
                Drag the interactive slider to witness the structural drying process —
                from saturated masonry to permanently dry walls.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.4}>
            <div
              className="max-w-[960px] mx-auto"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <BeforeAfterSlider />
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <p
              className="text-center mt-8"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-ink-400)',
                letterSpacing: '0.08em',
              }}
            >
              REAL CLIENT PROPERTY — BEFORE AND AFTER BIODRY® INSTALLATION
            </p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}

export default BeforeAfterSection;
