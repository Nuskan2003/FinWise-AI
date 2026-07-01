import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <Features />

      <DashboardPreview />

      <HowItWorks />

      <Testimonials />
    </main>
  );
}