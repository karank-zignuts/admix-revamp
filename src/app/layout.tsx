import type { Metadata } from "next";
import { Caveat, Geist_Mono, Oswald } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/main/SmoothScrollProvider";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hydrationAttributeCleanup = `
  (() => {
    const html = document.documentElement;
    const attributes = [
      "data-locator-target",
      "data-locator-experimental-features",
      "speedupyoutubeads",
    ];

    const clean = () => {
      for (const attribute of attributes) {
        html.removeAttribute(attribute);
      }
    };

    clean();

    const observer = new MutationObserver(clean);
    observer.observe(html, {
      attributes: true,
      attributeFilter: attributes,
    });

    window.addEventListener("load", () => observer.disconnect(), {
      once: true,
    });
  })();
`;

export const metadata: Metadata = {
  title: "Admix Metacraft LLP | FRP Manhole Covers",
  description:
    "Industrial manufacturing landing page for Admix Metacraft LLP, maker of WAVE FRP manhole covers for infrastructure and utility projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${caveat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="html-hydration-attribute-cleanup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: hydrationAttributeCleanup }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
