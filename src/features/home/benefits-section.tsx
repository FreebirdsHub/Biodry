'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/animations/fade-up';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { motion } from 'framer-motion';
import { cardHover } from '@/components/animations/variants';

const testimonials = [
  {
    name: 'Mauro',
    role: 'Surveyor',
    review: 'I have found excellent results, because the musty smell has disappeared and the humidity is gone. We have eliminated the use of the environmental dehumidifier.',
  },
  {
    name: 'Edvige',
    role: 'Brusimpiano',
    review: 'After the installation of Biodry, the saline efflorescences no longer appeared, the musty smell where it was present at the time of installation has disappeared.',
  },
  {
    name: 'Tabacco Bar',
    role: 'Milano',
    review: 'The saline efflorescences on the walls have disappeared, the humidity has practically disappeared.',
  },
  {
    name: 'Rosaria',
    role: 'Lucera (FG)',
    review: 'Humidity eliminated completely, which was a major problem for my home. The musty smell is now non-existent, the quality of life in the house has significantly improved.',
  },
  {
    name: 'Arch. Roberta',
    role: 'Castiglione Olona',
    review: 'The rooms no longer show the typical signs of rising damp, including basements against the ground. One aspect that satisfied me a lot was the speed of installation.',
  },
  {
    name: 'Andrea',
    role: 'Milano',
    review: 'In a very short time our wall is completely dry, allowing us to carry out the plastering work and better arrange the facade of our house.',
  },
];

export function BenefitsSection() {
  return (
    <>
      {/* ── Guaranteed Results (from biodry.in infobar) ── */}
      <section
        id="solutions"
        className="py-20"
        style={{
          background: 'var(--color-brand-blue)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-4">
              <FadeUp delay={0.1}>
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: 'var(--shadow-brand)',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/biodry-original/good-result.jpg"
                    alt="Good result after Biodry installation — dry clean walls"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <FadeUp delay={0.1}>
                <span className="kicker" style={{ color: 'var(--color-moisture-blue-subtle)' }}>
                  Guaranteed Results
                </span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2
                  className="text-3xl sm:text-4xl tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', color: '#FAFAF8', fontWeight: 400 }}
                >
                  Guaranteed Results. <span style={{ color: 'var(--color-moisture-blue-subtle)' }}>Every Time.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(250,250,248,0.70)' }}>
                  In the highly unlikely event of unexpected results over 3 years, we offer a refund
                  of 70%. (Engineer site evaluations and work are non-refundable.)
                </p>
              </FadeUp>

              {/* Benefits grid */}
              <FadeUp delay={0.35}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  {[
                    { value: '0W', label: 'Power Required' },
                    { value: '20yr', label: 'Performance' },
                    { value: '≤2hr', label: 'Installation' },
                    { value: '0ppm', label: 'Chemicals' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="p-4 text-center"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRadius: 'var(--radius-md)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '24px',
                          fontWeight: 400,
                          color: '#FAFAF8',
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: 'rgba(250,250,248,0.45)',
                          letterSpacing: '0.10em',
                          textTransform: 'uppercase',
                          marginTop: '4px',
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
                      background: '#FAFAF8',
                      color: 'var(--color-brand-blue)',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--color-stone-200)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#FAFAF8';
                    }}
                  >
                    FIND OUT MORE →
                  </Button>
                </Link>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Work With Us section (from biodry.in "Work With Us") ── */}
      <section
        className="py-20"
        style={{
          background: 'var(--color-stone-100)',
          borderTop: '1px solid var(--border-hairline)',
          borderBottom: '1px solid var(--border-hairline)',
        }}
      >
        <Container size="xl">
          <div className="max-w-3xl flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <span className="kicker">Work With Us</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2
                className="text-3xl sm:text-4xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-950)', fontWeight: 400 }}
              >
                Become a Biodry Professional
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                Training for professionals: become an expert on wall humidity problems and start
                earning with Biodry. With Biodry training you will be able to offer your customers
                an extra service by helping them solve the problem of rising damp. Complete your
                professionalism with the Biodry proposal.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <Link href="#assessment">
                <Button
                  className="self-start rounded-xs px-8 py-5 font-semibold transition-all duration-200"
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
        </Container>
      </section>

      {/* ── Testimonials (from biodry.in) ── */}
      <section
        className="py-24"
        style={{ background: '#FAFAF8', borderBottom: '1px solid var(--border-hairline)' }}
      >
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <FadeUp delay={0.1}>
              <span className="kicker">Testimonials</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2
                className="text-3xl sm:text-4xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-950)', fontWeight: 400 }}
              >
                Thousands of people around the world have already chosen Biodry®
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="flex flex-col gap-4 p-7 h-full bg-[var(--color-stone-100)] border border-[var(--border-hairline)] rounded-md cursor-default"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-copper)" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <p
                    className="text-sm leading-relaxed flex-1 italic"
                    style={{ color: 'var(--color-ink-500)', fontFamily: 'var(--font-sans)' }}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Author */}
                  <div
                    className="flex items-center gap-3 pt-4"
                    style={{ borderTop: '1px solid var(--border-hairline)' }}
                  >
                    {/* Avatar initials */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: 'var(--color-brand-blue-light)',
                        color: 'var(--color-brand-blue)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-ink-950)', fontFamily: 'var(--font-sans)' }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--color-ink-400)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}

export default BenefitsSection;
