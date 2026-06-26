'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 mt-auto"
      style={{
        background: '#070B19',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container size="xl">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Contact Info */}
          <StaggerItem className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xs overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image src="/images/biodry-original/ico-biodry.jpg" alt="Biodry logo" fill className="object-cover" />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-brand-blue)',
                }}
              >
                BIODRY
              </span>
            </Link>
            <p
              className="text-sm max-w-sm leading-relaxed"
              style={{ color: 'rgba(250,250,248,0.50)', fontFamily: 'var(--font-sans)' }}
            >
              THE ULTIMATE SOLUTION AGAINST CAPILLARY RISING DAMP. Swiss-engineered, permanent, and non-invasive moisture eradication for homes, heritage buildings, and commercial properties.
            </p>

            {/* Real contact info from biodry.in */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918968780262"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(250,250,248,0.55)', fontFamily: 'var(--font-mono)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-moisture-blue-subtle)" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 89687 80262
              </a>
              <a
                href="mailto:bajwaend@hotmail.com"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(250,250,248,0.55)', fontFamily: 'var(--font-mono)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-moisture-blue-subtle)" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bajwaend@hotmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3 items-center mt-1">
              {['CE Certified', 'Swiss Tech', 'TÜV Tested'].map(badge => (
                <span
                  key={badge}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    color: 'var(--color-moisture-blue-subtle)',
                    background: 'rgba(30,111,168,0.12)',
                    border: '1px solid rgba(30,111,168,0.20)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </StaggerItem>

          {/* Solutions Column */}
          <StaggerItem className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.35)',
              }}
            >
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['Residential Property', 'Heritage & Monuments', 'Commercial Buildings', 'Architects & Engineers'].map(label => (
                <li key={label}>
                  <Link
                    href="/#solutions"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(250,250,248,0.50)', fontFamily: 'var(--font-sans)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.85)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.50)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.35)',
              }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[['How it Works', '/#technology'], ['Case Studies', '/case-studies'], ['About Us', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(250,250,248,0.50)', fontFamily: 'var(--font-sans)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.85)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.50)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Resources Column */}
          <StaggerItem className="flex flex-col gap-4">
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.35)',
              }}
            >
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[['Insights Blog', '/blog'], ['FAQs', '/#faqs'], ['20-Year Guarantee', '/warranty'], ['Technical Docs', '/downloads']].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(250,250,248,0.50)', fontFamily: 'var(--font-sans)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.85)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.50)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Heritage divider */}
        <div className="heritage-divider mt-16" />

        {/* Bottom Bar */}
        <div
          className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'rgba(250,250,248,0.30)',
              letterSpacing: '0.06em',
            }}
          >
            © {currentYear} Biodry India. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[['Privacy Policy', '/privacy'], ['Terms of Use', '/terms']].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'rgba(250,250,248,0.30)',
                  letterSpacing: '0.06em',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.70)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(250,250,248,0.30)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
