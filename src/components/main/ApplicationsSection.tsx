"use client";

import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { applications, applicationsContent, productImages } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function ApplicationsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedApplication, setSelectedApplication] = useState(0);
  const selected = applications[selectedApplication];

  return (
    <section id="applications" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <SectionLabel>{applicationsContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            {applicationsContent.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            {applicationsContent.body}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            {...(shouldReduceMotion ? {} : reveal())}
            className="relative min-h-[340px] overflow-hidden rounded-lg bg-neutral-200 sm:min-h-[470px]"
          >
            <Image
              src={productImages[selectedApplication % productImages.length]}
              alt={selected.title}
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="max-w-md text-lg font-medium">{selected.title}</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/75">{selected.body}</p>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {applications.map((item, index) => {
              const isSelected = selectedApplication === index;

              return (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedApplication(index)}
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 14 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true, margin: "-60px" },
                        transition: {
                          duration: 0.42,
                          delay: index * 0.04,
                          ease: "easeOut" as const,
                        },
                      })}
                  className={`group flex min-h-20 transform-gpu items-center justify-between rounded-lg border px-5 text-left transition-colors ${
                    isSelected
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-[#f4f4f1] text-neutral-950 hover:border-neutral-300"
                  }`}
                >
                  <span>
                    <span className="block text-lg font-medium">{item.title}</span>
                    <span
                      className={`mt-1 block text-sm ${
                        isSelected ? "text-white/70" : "text-neutral-500"
                      }`}
                    >
                      {item.body}
                    </span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 transition group-hover:translate-x-1" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
