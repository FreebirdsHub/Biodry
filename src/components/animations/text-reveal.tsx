'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASINGS, DURATIONS } from './variants';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function TextReveal({ children, className = '', delay = 0, style }: TextRevealProps) {
  // If children is a string, we split by word. If it contains HTML/Elements, we just wrap the whole thing.
  const isString = typeof children === 'string';

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
        duration: DURATIONS.slow,
        ease: EASINGS.smooth,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateZ: 2,
    },
  };

  if (!isString) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={className}
        style={style}
      >
        <motion.div variants={child} style={{ display: 'inline-block' }}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  const words = (children as string).split(' ');

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap', ...style }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
