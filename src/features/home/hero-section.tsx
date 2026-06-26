'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/animations/fade-up';
import { TextReveal } from '@/components/animations/text-reveal';
import { scientificDraw } from '@/components/animations/variants';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax subtle movement for the device image
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative pt-12 pb-24 md:py-32 overflow-hidden" style={{ background: 'var(--color-stone-50)' }}>
      {/* Scientific Capillary Flow Background Motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.04 }}>
        <motion.svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          initial="hidden"
          animate="visible"
          variants={scientificDraw}
        >
          <defs>
            <pattern id="capillary-flow" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 60 120 C 60 80, 20 40, 20 0 M 60 120 C 60 80, 100 40, 100 0" fill="none" stroke="var(--color-brand-blue)" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="60" cy="120" r="1.5" fill="var(--color-brand-blue)" />
              <path d="M 0 60 L 120 60" fill="none" stroke="var(--color-brand-blue)" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capillary-flow)" />
        </motion.svg>
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <span className="kicker">Welcome to Biodry</span>
            </FadeUp>

            <TextReveal delay={0.2} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] max-w-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-950)', fontWeight: 400 }}>
              Find out how to definitively eliminate the problems of moisture from the walls.
            </TextReveal>

            <FadeUp delay={0.4}>
              <p className="text-lg max-w-lg leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                Biodry is the innovative and ecological device that definitively eliminates
                rising damp problems — without chemicals, invasive drilling, or electromagnetic emissions.
              </p>
            </FadeUp>

            <FadeUp delay={0.5} className="flex flex-wrap gap-4 mt-2">
              <Link href="#assessment">
                <Button
                  className="rounded-xs px-8 py-6 text-base group transition-all duration-200"
                  style={{
                    background: 'var(--color-brand-blue)',
                    color: '#FAFAF8',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
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
                  Request Free Quote
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1.5">→</span>
                </Button>
              </Link>
            </FadeUp>

            {/* Contact strip */}
            <FadeUp delay={0.6} className="mt-4 pt-6 flex flex-wrap gap-6 items-center" style={{ borderTop: '1px solid var(--border-hairline)' }}>
              <a
                href="tel:+918968780262"
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: 'var(--color-brand-blue)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 89687 80262
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-ink-500)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Guaranteed Results
              </div>
              <div className="hidden sm:flex items-center gap-2">
                {['Swiss Tech', 'Eco-Friendly'].map(label => (
                  <span
                    key={label}
                    className="text-[10px] uppercase font-bold"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-brand-green-deep)',
                      background: 'var(--color-brand-green-light)',
                      border: '1px solid var(--color-brand-green-subtle)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-sm)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Biodry machine image */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <motion.div 
              className="w-full max-w-[520px] relative"
              style={{ y: yParallax }}
            >
              {/* Backing card */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 -z-10"
                style={{
                  background: 'var(--color-stone-200)',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-hairline)',
                }}
              />
              <div
                className="w-full overflow-hidden relative"
                style={{
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)',
                  background: 'var(--color-stone-100)',
                }}
              >
                <Image
                  src="/images/biodry-original/biodry-machines.jpeg"
                  alt="Biodry moisture control device — Swiss-engineered rising damp solution"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating label card */}
              <div
                className="absolute -bottom-6 -left-6 hidden sm:block max-w-[220px]"
                style={{
                  background: 'var(--color-stone-100)',
                  border: '1px solid var(--border-hairline)',
                  borderLeft: '3px solid var(--color-copper)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  padding: '12px 16px',
                  boxShadow: '0 10px 30px -10px rgba(15, 45, 74, 0.1)',
                }}
              >
                <p className="kicker" style={{ color: 'var(--color-copper)', marginBottom: 4 }}>
                  Biodry Model 3000-X
                </p>
                <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--color-ink-800)', fontFamily: 'var(--font-sans)' }}>
                  THE ULTIMATE SOLUTION AGAINST CAPILLARY RISING DAMP
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
