import { TextRevealByWord } from "@/components/ui/text-reveal";

type SectionHeadingProps = {
  text: string;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ text, className, tone = "light" }: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <TextRevealByWord
      as="h2"
      text={text}
      className={
        className ??
        "mt-4 text-3xl font-medium leading-tight tracking-normal sm:text-5xl"
      }
      revealedClassName={isDark ? "text-white" : "text-neutral-950"}
      mutedClassName={isDark ? "text-white/20" : "text-neutral-950/20"}
    />
  );
}
