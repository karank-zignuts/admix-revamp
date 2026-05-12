"use client";

import { Menu, Phone } from "lucide-react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company, headerContent, navItems } from "@/data/main";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#" className="relative block h-10 w-32">
          <Image
            src={company.logo}
            alt={company.name}
            fill
            priority
            sizes="128px"
            className="object-contain brightness-0 invert"
          />
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={company.phoneHref}
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-4 text-xs font-medium text-neutral-950 transition hover:bg-[#eef3cf]"
          >
            <Phone className="size-3.5" /> {headerContent.contactLabel}
          </a>
        </div>

        <Sheet>
          <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-lg bg-white text-neutral-950 lg:hidden">
            <Menu className="size-5" />
            <span className="sr-only">{headerContent.navigationLabel}</span>
          </SheetTrigger>
          <SheetContent className="w-[88vw] max-w-sm bg-white">
            <SheetHeader>
              <SheetTitle>{company.name}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-neutral-100 py-4 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 text-sm font-medium text-white"
              >
                <Phone className="size-4" /> {headerContent.contactLabel}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
