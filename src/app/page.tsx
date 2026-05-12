import {
  AboutSection,
  ApplicationsSection,
  ContactSection,
  Footer,
  GlobalPresenceSection,
  Hero,
  ProductsSection,
  QualitySection,
  TestimonialsSection,
  TextEffectSection,
} from "@/components/main";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f2] text-neutral-950">
      <Hero />
      <QualitySection />
      <TextEffectSection />
      <ApplicationsSection />
      <ProductsSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
