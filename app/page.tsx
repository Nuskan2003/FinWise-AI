import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <Features />
    </main>
  );
}