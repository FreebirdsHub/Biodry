'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic styling based on scroll
  const headerPy = useTransform(scrollY, [0, 50], ['1.25rem', '0.75rem']); // py-5 to py-3
  const headerBg = useTransform(scrollY, [0, 50], ['rgba(9, 9, 11, 0)', 'rgba(9, 9, 11, 0.75)']);
  const headerBorder = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(255, 255, 255, 0.08)']);
  const headerShadow = useTransform(scrollY, [0, 50], ['none', '0 4px 24px -4px rgba(15, 45, 74, 0.04)']);
  const headerBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(8px)']);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full transition-colors border-b"
      style={{
        paddingTop: headerPy,
        paddingBottom: headerPy,
        backgroundColor: headerBg,
        borderColor: headerBorder,
        boxShadow: headerShadow,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
    >
      <Container size="xl" className="flex items-center justify-between">
        {/* Logo with real Biodry logo image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xs overflow-hidden" style={{ border: '1px solid var(--border-hairline)' }}>
            <Image src="/images/biodry-original/ico-biodry.jpg" alt="Biodry logo" fill className="object-cover" />
          </div>
          <span
            className="text-xl font-bold tracking-tight flex items-center"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-brand-blue)',
            }}
          >
            BIODRY
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {[['/#technology','Technology'],['/#solutions','Solutions'],['/case-studies','Case Studies'],['/blog','Insights']].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors relative py-2 group/nav"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-ink-500)',
              }}
            >
              {label}
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover/nav:scale-x-100"
                style={{ background: 'linear-gradient(90deg, #1E6FA8 0%, #7C8F6A 100%)' }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/#assessment">
            <Button
              variant="default"
              size="sm"
              className="rounded-xs px-5 font-semibold group/btn transition-all duration-200"
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
              Free Assessment
              <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1 ml-1.5">
                →
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-text-primary dark:text-white focus:outline-hidden"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={cn(
                'w-full h-0.5 bg-current transition-all duration-300',
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              )}
            />
            <span
              className={cn(
                'w-full h-0.5 bg-current transition-all duration-300',
                mobileMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'w-full h-0.5 bg-current transition-all duration-300',
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              )}
            />
          </div>
        </button>
      </Container>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 top-[60px] z-40 w-full md:hidden transition-all duration-300 ease-in-out transform',
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
        style={{
          background: 'var(--color-stone-50)',
          borderTop: '1px solid var(--border-hairline)',
        }}
      >
        <div className="flex flex-col p-6 gap-6 h-full justify-between">
          <nav className="flex flex-col gap-5">
            {[['/#technology','Technology'],['/#solutions','Solutions'],['/case-studies','Case Studies'],['/blog','Insights']].map(([href,label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold transition-colors"
                style={{ color: 'var(--color-ink-950)', fontFamily: 'var(--font-sans)' }}
              >
                {label}
              </Link>
            ))}
          </nav>
          
          <div className="pb-12">
            <Link href="/#assessment" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full rounded-xs py-6 font-semibold"
                style={{
                  background: 'var(--color-brand-blue)',
                  color: '#FAFAF8',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Free Assessment →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
