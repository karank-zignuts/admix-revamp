import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="html-hydration-attribute-cleanup"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: hydrationAttributeCleanup }}
        />
        {children}
      </body>
    </html>
  );
}
