'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeUpProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease-smooth curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeUp;
