import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company, footerContent, navItems } from "@/data/main";

export function Footer() {
  return (
    <footer className="bg-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <Image
            src={company.logo}
            alt={company.name}
            width={150}
            height={50}
            className="brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            {footerContent.description}
          </p>
        </div>

        <div>
          <Accordion className="md:hidden">
            <AccordionItem value="links">
              <AccordionTrigger className="text-white">{footerContent.linksLabel}</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 text-white/70">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="hidden justify-end gap-7 text-sm text-white/65 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/45 md:text-right">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
