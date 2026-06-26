'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use Framer Motion values for premium spring physics
  const rawPosition = useMotionValue(50);
  const springPosition = useSpring(rawPosition, { stiffness: 400, damping: 30 });
  
  // Convert 0-100 to percentage string for clip-path
  const clipPath = useTransform(springPosition, (val) => `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`);
  const leftPosition = useTransform(springPosition, (val) => `${val}%`);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    rawPosition.set(percentage);
  };

  const isDragging = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden aspect-[4/3] md:aspect-[16/10] w-full rounded-xs shadow-md border border-[var(--border-hairline)] cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        e.preventDefault();
        isDragging.current = true;
        handleMove(e.clientX);
      }}
      onTouchStart={() => { isDragging.current = true; }}
    >
      {/* Before Image (Damp) */}
      <Image
        src="/images/wall_before_damp.png"
        alt="Damp peeling brick wall before treatment"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-xs font-mono px-3 py-1 rounded-xs uppercase tracking-widest z-10 pointer-events-none">
        Before: Damp & Mold
      </div>

      {/* After Image (Restored - Clipped via clip-path) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath }}
      >
        <Image
          src="/images/wall_after_clean.png"
          alt="Dry restored brick wall after Biodry treatment"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute bottom-4 right-4 bg-[var(--color-brand-blue)]/90 backdrop-blur-xs text-white text-[10px] sm:text-xs font-mono px-3 py-1 rounded-xs uppercase tracking-widest pointer-events-none z-10">
        After: Dry & Clean
      </div>

      {/* Slider Line */}
      <motion.div
        className="absolute top-0 bottom-0 w-0.5 bg-[var(--color-copper)] shadow-lg pointer-events-none z-20 transition-colors group-hover:bg-[var(--color-copper-light)]"
        style={{ left: leftPosition }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-stone-100)] border border-[var(--color-copper)] shadow-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
          <div className="flex gap-1">
            <span className="w-0.5 h-3 bg-[var(--color-copper)]" />
            <span className="w-0.5 h-3 bg-[var(--color-copper)]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BeforeAfterSlider;
