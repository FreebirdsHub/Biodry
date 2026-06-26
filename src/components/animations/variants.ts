import { Variants } from 'framer-motion';

/**
 * Biodry 2026 Motion System Tokens
 * Inspired by Swiss engineering, Apple, and top UK agencies.
 */

// Custom Easing Curves
export const EASINGS = {
  // Ultra-smooth deceleration (Apple/Linear style)
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Snappy, scientific mechanical movement
  snappy: [0.25, 1, 0.5, 1] as [number, number, number, number],
  // Slow, elegant entrance
  elegant: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

// Durations
export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  ultraSlow: 1.2,
};

// Reusable Variants
export const editorialReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.smooth,
    },
  },
};

export const scientificDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: DURATIONS.ultraSlow,
      ease: EASINGS.smooth,
    },
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 4px 24px -4px rgba(15, 45, 74, 0.04)',
    borderColor: 'var(--border-default)',
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 32px -8px rgba(15, 45, 74, 0.12)',
    borderColor: 'var(--color-brand-blue-light)',
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.snappy,
    },
  },
};
