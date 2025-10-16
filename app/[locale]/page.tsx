import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default function HomePage({ params }: { params: { locale: string } }) {
  // Enable static rendering with next-intl for this route
  setRequestLocale(params.locale);
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
