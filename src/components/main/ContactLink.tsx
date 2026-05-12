import type { ReactNode } from "react";

type ContactLinkProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

export function ContactLink({ icon, label, value, href }: ContactLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="flex gap-3 rounded-lg p-2 transition hover:bg-neutral-50"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span className="mt-0.5 text-neutral-950">{icon}</span>
      <span>
        <span className="block font-micro text-lg font-semibold leading-none tracking-normal text-neutral-500">
          {label}
        </span>
        <span className="mt-1 block leading-5 text-neutral-950">{value}</span>
      </span>
    </a>
  );
}
