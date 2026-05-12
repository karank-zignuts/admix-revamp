"use client";

import { motion, useReducedMotion } from "motion/react";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonialColumns, testimonialsContent } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...(shouldReduceMotion ? {} : reveal())}
          className="mx-auto flex max-w-[560px] flex-col items-center justify-center text-center"
        >
          <SectionLabel>{testimonialsContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-normal sm:text-5xl">
            {testimonialsContent.title}
          </h2>
          <p className="mt-5 text-sm leading-6 text-neutral-600 sm:text-base">
            {testimonialsContent.body}
          </p>
        </motion.div>

        <div className="mt-12 flex max-h-[680px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <TestimonialsColumn testimonials={testimonialColumns[0]} duration={18} />
          <TestimonialsColumn
            testimonials={testimonialColumns[1]}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={testimonialColumns[2]}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
}
