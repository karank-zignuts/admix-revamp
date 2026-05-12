import type { ReactNode } from "react";

type ContactFieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export function ContactField({ label, children, className }: ContactFieldProps) {
  return (
    <label className={`block space-y-2 ${className ?? ""}`}>
      <span className="font-micro text-lg font-semibold leading-none tracking-normal text-neutral-950">
        {label}
      </span>
      {children}
    </label>
  );
}
