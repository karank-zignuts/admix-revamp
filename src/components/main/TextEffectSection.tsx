import { Typewriter } from "@/components/ui/typewriter";
import { textEffectContent } from "@/data/main";

export function TextEffectSection() {
  return (
    <section className="flex min-h-[360px] items-center justify-center bg-[#f8f8f2] px-4 py-20 text-neutral-950 sm:px-6 lg:px-8">
      <p className="max-w-7xl text-center text-3xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-6xl">
        <span>{textEffectContent.prefix}</span>
        <Typewriter
          text={[...textEffectContent.words]}
          speed={70}
          className="text-[#9f7c00]"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar="_"
        />
      </p>
    </section>
  );
}
