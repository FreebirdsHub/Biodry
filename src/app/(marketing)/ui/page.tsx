'use client';

import React from 'react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { FadeUp } from '@/components/animations/fade-up';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

export default function KitchenSinkPage() {
  const [sliderVal, setSliderVal] = React.useState<number[]>([50]);

  const handleSliderChange = (val: number | readonly number[]) => {
    if (typeof val === 'number') {
      setSliderVal([val]);
    } else {
      setSliderVal([...val]);
    }
  };

  return (
    <div className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <Container size="xl">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8 mb-12">
          <h1 className="text-4xl font-bold text-brand-blue dark:text-white">
            Biodry Design System Kitchen Sink
          </h1>
          <p className="text-text-secondary dark:text-neutral-400 mt-2">
            A visual showcase of typography, colors, shadcn UI components, and animations.
          </p>
        </div>

        {/* Section: Typography */}
        <section className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-green font-mono mb-6">
            01 / Typography Hierarchy
          </h2>
          <div className="bg-white dark:bg-neutral-950 p-8 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 space-y-6">
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">H1 Heading (64px)</span>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-primary dark:text-white">
                Eradicate Rising Damp. Permanently.
              </h1>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">H2 Heading (48px)</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary dark:text-white">
                Swiss-Engineered Moisture Solution.
              </h2>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">H3 Heading (32px)</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary dark:text-white">
                Non-Invasive Structural Preservation
              </h3>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Body Large (18px)</span>
              <p className="text-lg text-text-secondary dark:text-neutral-300 leading-relaxed">
                The Biodry technology uses the natural gravomagnetic principles to reverse the polarity of water molecules within walls, drawing moisture down into the ground.
              </p>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">Body Base (16px)</span>
              <p className="text-base text-text-secondary dark:text-neutral-400 leading-relaxed">
                Traditional damp-proofing methods are invasive, require chemical injections, and often damage historical masonry. Biodry offers a permanent, green alternative.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Colors */}
        <section className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-green font-mono mb-6">
            02 / Color Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="p-4 bg-brand-blue text-white rounded-xs">
              <p className="text-xs font-mono">Deep Engineering Blue</p>
              <p className="text-lg font-bold mt-2">#0F2942</p>
            </div>
            <div className="p-4 bg-brand-green text-white rounded-xs">
              <p className="text-xs font-mono">Muted Sage Green</p>
              <p className="text-lg font-bold mt-2">#4A7C59</p>
            </div>
            <div className="p-4 bg-surface-light border border-neutral-200 text-text-primary rounded-xs">
              <p className="text-xs font-mono">Warm Neutral / Light</p>
              <p className="text-lg font-bold mt-2">#F8F9FA</p>
            </div>
            <div className="p-4 bg-surface-card border border-neutral-200 text-text-primary rounded-xs">
              <p className="text-xs font-mono">Surface Card</p>
              <p className="text-lg font-bold mt-2">#F1F5F9</p>
            </div>
            <div className="p-4 bg-white border border-neutral-200 text-text-primary rounded-xs col-span-2">
              <p className="text-xs font-mono">Text Primary / Charcoal</p>
              <p className="text-lg font-bold mt-2">#1A1A1A</p>
            </div>
          </div>
        </section>

        {/* Section: UI Components */}
        <section className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-green font-mono mb-6">
            03 / UI Primitives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <Card className="rounded-xs border-neutral-200/60 dark:border-neutral-800/60">
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Shadcn UI custom-styled buttons</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xs px-6">
                  Primary Solid
                </Button>
                <Button variant="outline" className="border-text-primary text-text-primary hover:bg-neutral-100 rounded-xs px-6">
                  Secondary Outline
                </Button>
                <Button variant="ghost" className="text-brand-blue hover:bg-brand-blue/5 rounded-xs">
                  Ghost Button
                </Button>
              </CardContent>
            </Card>

            {/* Inputs & Sliders */}
            <Card className="rounded-xs border-neutral-200/60 dark:border-neutral-800/60">
              <CardHeader>
                <CardTitle>Inputs & Controls</CardTitle>
                <CardDescription>Form controls and sliders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-text-secondary block mb-2">Text Input</label>
                  <Input type="email" placeholder="Enter your email address" className="rounded-xs border-neutral-300 focus-visible:ring-brand-blue" />
                </div>
                <div>
                  <label className="text-xs font-mono text-text-secondary block mb-2 flex justify-between">
                    <span>Slider Interaction</span>
                    <span className="font-bold">{sliderVal[0]}%</span>
                  </label>
                  <Slider value={sliderVal} onValueChange={handleSliderChange} max={100} step={1} className="text-brand-blue" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section: Animations */}
        <section className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-green font-mono mb-6">
            04 / Animations (Framer Motion)
          </h2>
          <div className="space-y-8">
            <FadeUp>
              <div className="bg-white dark:bg-neutral-950 p-6 rounded-md border border-neutral-200/60 dark:border-neutral-800/60 shadow-xs">
                <h4 className="font-bold text-brand-blue mb-2">Fade Up Reveal</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  This card fades in and slides up smoothly when scrolled into view.
                </p>
              </div>
            </FadeUp>

            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4 font-mono">Staggered Card Grid</h3>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <StaggerItem key={i}>
                    <Card className="rounded-xs border-neutral-200/60 dark:border-neutral-800/60 shadow-xs bg-white dark:bg-neutral-950">
                      <CardHeader>
                        <CardTitle className="text-lg">Stagger {i}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-text-secondary">
                          Delay cascades down sequential items in this staggered layout container.
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
