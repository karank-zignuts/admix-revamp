import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-micro text-xl font-semibold leading-none tracking-normal text-neutral-600 ${
        className ?? ""
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </div>
  );
}
