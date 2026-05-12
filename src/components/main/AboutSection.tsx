"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { aboutContent, stats } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...(shouldReduceMotion ? {} : reveal())}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <SectionLabel>{aboutContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-normal text-neutral-950 sm:text-5xl">
            {aboutContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            {aboutContent.body}
          </p>
        </motion.div>

        <motion.div
          {...(shouldReduceMotion ? {} : reveal(1))}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {aboutContent.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <Card key={item.value} className="rounded-lg bg-[#f6f7ef] py-6 ring-neutral-200">
              <CardContent className="space-y-2 px-5 text-center">
                <div className="text-3xl font-medium">{item.value}</div>
                <p className="text-sm leading-5 text-neutral-600">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
