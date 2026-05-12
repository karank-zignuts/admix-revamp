"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: ReadonlyArray<Testimonial>;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }) => (
              <article
                className="w-full max-w-xs rounded-lg border border-neutral-200 bg-[#f8f8f2] p-7 shadow-sm shadow-primary/5"
                key={`${name}-${index}`}
              >
                <p className="text-sm leading-6 text-neutral-700">{text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex min-w-0 flex-col">
                    <div className="truncate text-sm font-medium leading-5 tracking-normal text-neutral-950">
                      {name}
                    </div>
                    <div className="truncate text-xs leading-5 tracking-normal text-neutral-500">
                      {role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
