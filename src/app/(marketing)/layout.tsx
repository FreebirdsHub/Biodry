import React from 'react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import SchemaMarkup from '@/components/shared/schema-markup';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#09090B]">
      {/* Luxury Ambient Glassmorphism Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#1E6FA8] opacity-[0.08] blur-[120px] bg-glow-orb-1"
          style={{ top: '15%', left: '5%' }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#7C8F6A] opacity-[0.06] blur-[150px] bg-glow-orb-2"
          style={{ top: '55%', right: '5%' }}
        />
      </div>

      <SchemaMarkup />
      <Navbar />
      <main className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
