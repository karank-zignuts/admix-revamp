"use client";

import type { ElementType, FC, ReactNode } from "react";
import { useRef } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  wordClassName?: string;
  revealedClassName?: string;
  mutedClassName?: string;
  as?: ElementType;
  sticky?: boolean;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  wordClassName,
  revealedClassName = "text-neutral-950",
  mutedClassName = "text-neutral-950/20",
  as,
  sticky = false,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: sticky ? ["start end", "end start"] : ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");
  const Component = as ?? "p";

  if (sticky) {
    return (
      <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
        <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20">
          <Component className="flex flex-wrap p-5 text-2xl font-bold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              return (
                <Word
                  key={`${word}-${index}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  className={wordClassName}
                  revealedClassName="text-black dark:text-white"
                  mutedClassName="opacity-30"
                >
                  {word}
                </Word>
              );
            })}
          </Component>
        </div>
      </div>
    );
  }

  return (
    <div ref={targetRef} className="relative z-0">
      <Component className={cn("flex flex-wrap justify-center", className)}>
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[start, end]}
              className={wordClassName}
              revealedClassName={revealedClassName}
              mutedClassName={mutedClassName}
            >
              {word}
            </Word>
          );
        })}
      </Component>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  revealedClassName?: string;
  mutedClassName?: string;
}

const Word: FC<WordProps> = ({
  children,
  progress,
  range,
  className,
  revealedClassName = "text-black dark:text-white",
  mutedClassName = "opacity-30",
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={cn("relative mx-1 lg:mx-2.5", className)}>
      <span aria-hidden="true" className={cn("absolute", mutedClassName)}>
        {children}
      </span>
      <motion.span style={{ opacity }} className={revealedClassName}>
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
