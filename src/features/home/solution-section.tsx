'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/animations/fade-up';

const steps = [
  {
    step: '01',
    image: '/images/biodry-original/step1.png',
    title: 'Ground Moisture Rises',
    text: 'Capillary rising damp is a constant flow of water molecules that rise through walls in contact with the ground.',
  },
  {
    step: '02',
    image: '/images/biodry-original/step2.png',
    title: 'Aesthetic & Structural Damage',
    text: 'Damp stains become an aesthetic problem; they are also harmful to health as to the structure of the property.',
  },
  {
    step: '03',
    image: '/images/biodry-original/step3.png',
    title: 'Biodry Technology Activates',
    text: 'Once Biodry is installed, the water present in the ground is no longer drawn upwards. Biodry reverses the flow of water molecules exploiting a natural physical principle.',
  },
  {
    step: '04',
    image: '/images/biodry-original/step4.png',
    title: 'Moisture Eliminated',
    text: 'Thanks to the technology that counteracts moisture, Biodry eliminates the problem of rising damp permanently.',
  },
  {
    step: '05',
    image: '/images/biodry-original/step5.png',
    title: 'Walls Dry Permanently',
    text: 'Finally the damp stains disappear and the walls become dry again. 100% guaranteed!',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const handleNext = () => {
    if (activeIndex < steps.length - 1) {
      setPage([activeIndex + 1, 1]);
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setPage([activeIndex - 1, -1]);
      setActiveIndex(activeIndex - 1);
    }
  };

  const currentStep = steps[activeIndex];

  return (
    <section id="technology" className="bg-[var(--color-stone-50)]">
      {/* Intro block (normal scroll) */}
      <div className="py-24">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <FadeUp delay={0.1}>
              <span className="kicker">How It Works</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2
                className="text-4xl sm:text-5xl tracking-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-ink-950)',
                  fontWeight: 400,
                }}
              >
                The Biodry Narrative
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-lg" style={{ color: 'var(--color-ink-500)' }}>
                Explore how the Biodry system reverses capillary flow physically and safely, using zero chemical injection and zero electrical power.
              </p>
            </FadeUp>
          </div>
        </Container>
      </div>

      {/* INTERACTIVE CAROUSEL CONTAINER */}
      <div className="relative w-full py-16 bg-[var(--color-stone-100)] border-y border-[var(--border-hairline)] overflow-hidden">
        <Container size="xl" className="relative">
          <div className="min-h-[480px] md:min-h-[400px] flex items-center justify-center relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full flex flex-col md:flex-row items-center justify-between gap-12"
              >
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <div
                    className="w-fit"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--color-brand-blue)',
                      letterSpacing: '0.12em',
                      background: 'var(--color-brand-blue-subtle)',
                      border: '1px solid var(--color-brand-blue-light)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    STEP {currentStep.step}
                  </div>
                  <h3
                    className="text-3xl md:text-5xl"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-950)' }}
                  >
                    {currentStep.title}
                  </h3>
                  <p className="text-lg leading-relaxed max-w-md" style={{ color: 'var(--color-ink-500)' }}>
                    {currentStep.text}
                  </p>
                </div>

                {/* Right: Image Content */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full opacity-30 dark:opacity-10 blur-3xl" />
                    <Image
                      src={currentStep.image}
                      alt={currentStep.title}
                      fill
                      className="object-contain relative z-10"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-6 border-t border-[var(--border-hairline)]">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {steps.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => {
                    setPage([idx, idx > activeIndex ? 1 : -1]);
                    setActiveIndex(idx);
                  }}
                  className="w-3 h-3 rounded-full transition-all duration-200"
                  style={{
                    background: idx === activeIndex ? 'var(--color-brand-blue)' : 'var(--color-stone-300)',
                    transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)',
                  }}
                  aria-label={`Go to step ${step.step}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="rounded-xs px-6 py-2 transition-all duration-200"
                style={{
                  borderColor: 'var(--border-default)',
                  color: 'var(--color-ink-950)',
                  opacity: activeIndex === 0 ? 0.4 : 1,
                  cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                ← Prev
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={activeIndex === steps.length - 1}
                className="rounded-xs px-6 py-2 transition-all duration-200"
                style={{
                  borderColor: 'var(--border-default)',
                  color: 'var(--color-ink-950)',
                  opacity: activeIndex === steps.length - 1 ? 0.4 : 1,
                  cursor: activeIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                Next →
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Video & Tech Specs (Normal Scroll again) */}
      <div className="py-32">
        <Container size="xl">
          {/* YouTube Video Embed */}
          <FadeUp delay={0.1}>
            <div
              className="max-w-4xl mx-auto mb-32 overflow-hidden"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '16/9',
                position: 'relative',
              }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/rHkVkT5XSqc"
                title="How Biodry Works — Rising Damp Elimination"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </FadeUp>

          {/* Technology content block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left image: BIODRY-TECH */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-default)',
                    boxShadow: '0 12px 40px -12px rgba(15, 45, 74, 0.1)',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/biodry-original/BIODRY-TECH.jpg"
                    alt="Biodry Swiss technology — internal view of the moisture elimination device"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Right text content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <h3
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: 'var(--color-ink-950)', fontFamily: 'var(--font-sans)' }}
                >
                  WITH BIODRY, THE MOULD DISAPPEARS
                </h3>
                <p className="text-base leading-relaxed mt-3" style={{ color: 'var(--color-ink-500)' }}>
                  No chemical additives, electromagnetic emissions or invasive building works.
                  It is the strength of our device that leads to the permanent elimination of mould.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <h4
                  className="text-lg font-bold"
                  style={{ color: 'var(--color-ink-950)', fontFamily: 'var(--font-sans)' }}
                >
                  BIODRY TECHNOLOGY
                </h4>
                <p className="text-base leading-relaxed mt-2" style={{ color: 'var(--color-ink-500)' }}>
                  Biodry is the innovative device with advanced Swiss technology that eliminates
                  the capillary rising damp permanently. Biodry does not have any chemical additives,
                  does not provide any electromagnetic emissions and does not require any invasive
                  building work. That is the strength of our device.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="mt-4">
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
          </div>
        </Container>
      </div>
    </section>
  );
}

export default SolutionSection;
