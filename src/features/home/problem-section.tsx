'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/animations/fade-up';
import { motion } from 'framer-motion';
import { cardHover } from '@/components/animations/variants';

export function ProblemSection() {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        background: 'var(--color-stone-100)',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Biodry real images */}
          <div className="lg:col-span-5 relative">
            <FadeUp delay={0.1}>
              <div
                className="relative"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <Image
                  src="/images/biodry-original/biodry-machines.jpeg"
                  alt="Biodry moisture elimination device installed on wall"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>

            {/* Overlapping second image */}
            <FadeUp delay={0.3}>
              <div
                className="absolute -bottom-8 -right-8 hidden lg:block"
                style={{
                  width: '55%',
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  border: '2px solid var(--color-stone-100)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <Image
                  src="/images/biodry-original/dumpwall.jpg"
                  alt="Damp wall showing rising moisture — before Biodry installation"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right: About text from biodry.in */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
            <FadeUp delay={0.1}>
              <span className="kicker">About Biodry Technology</span>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2
                className="text-3xl sm:text-4xl tracking-tight leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-ink-950)',
                  fontWeight: 400,
                }}
              >
                Biodry Technology eliminates capillary rising damp{' '}
                <span style={{ color: 'var(--color-brand-blue)' }}>permanently.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                It reverses the flow of water molecules by canceling the electrical disturbance
                present in the ground. By exploiting this natural physical principle, the system
                interrupts the interferences created by the underground movement of groundwater,
                thus restoring the original balance to the wall.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                Biodry bases its technology on the natural physical principle of cancelling the
                progressive rise of moisture from the ground without invasive or aggressive methods,
                solving the true cause of capillary rising damp.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                Rising damp, also called capillary ascending moisture, is the ascent of groundwater
                in the form of moisture through capillaries in the masonry. It is a continuous and
                steady flow of water molecules that rise through the porosity of the material, drawn
                upwards from the moisture in the ground. Despite the force of gravity, the moisture
                is drawn high up into the walls, exceeding, in some cases, two meters in height.
                Rising damp is the main cause of mould, musty odours and salt crystals in the walls.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-500)' }}>
                Rising damp left untreated will eventually cause structural damage. Biodry does not
                have any chemical additives, does not provide any electromagnetic emissions and does
                not need any invasive building work. Thanks to this ingenious technology, the water
                present in the ground is no longer drawn upwards and into the walls but remains in
                the ground.
              </p>
            </FadeUp>

            {/* Constant Service badge - Premium Hover Card */}
            <FadeUp delay={0.45}>
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="p-4 flex items-center gap-4 bg-[var(--color-stone-100)] border border-[var(--border-hairline)] rounded-md cursor-default"
              >
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/biodry-original/Constant Service.png"
                    alt="Constant service guarantee"
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-brand-blue)', fontFamily: 'var(--font-sans)' }}
                >
                  Constant service and monitoring — guaranteed results for every installation.
                </p>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.5} className="mt-2">
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
                  REQUEST A FREE QUOTE →
                </Button>
              </Link>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProblemSection;
