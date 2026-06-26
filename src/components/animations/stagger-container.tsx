'use client';

import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.22, 1, 0.36, 1] as const,
      duration: 0.5,
    },
  },
};

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
