import React from 'react';
import HeroSection from '@/features/home/hero-section';
import ProblemSection from '@/features/home/problem-section';
import SolutionSection from '@/features/home/solution-section';
import BeforeAfterSection from '@/features/home/before-after-section';
import BenefitsSection from '@/features/home/benefits-section';
import AssessmentSection from '@/features/home/assessment-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfterSection />
      <BenefitsSection />
      <AssessmentSection />
    </>
  );
}
