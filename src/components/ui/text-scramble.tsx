"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type MotionProps } from "framer-motion";

const motionComponents = {
  div: motion.div,
  h1: motion.h1,
  p: motion.p,
  span: motion.span,
};

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: keyof typeof motionComponents;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = "p",
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motionComponents[Component];
  const [displayText, setDisplayText] = useState(children);
  const isAnimatingRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const text = children;

  useEffect(() => {
    if (!trigger || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const steps = Math.max(1, Math.round(duration / speed));
    let step = 0;

    intervalRef.current = setInterval(() => {
      const progress = step / steps;
      let scrambled = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          scrambled += " ";
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
        isAnimatingRef.current = false;
        onScrambleComplete?.();
      }
    }, speed * 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [characterSet, duration, onScrambleComplete, speed, text, trigger]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
