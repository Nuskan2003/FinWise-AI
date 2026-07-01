import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-emerald-500 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center text-white">

        <h2 className="text-4xl font-bold md:text-5xl">
          Ready to Take Control of Your Finances?
        </h2>

        <p className="mt-6 text-lg text-emerald-100">
          Join thousands of users managing their money smarter with
          AI-powered financial insights.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-100"
          >
            Get Started

            <ArrowRight className="ml-2 h-4 w-4" />

          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-emerald-600
            hover:bg-slate-100 hover:text-emerald-600"
          >
            Learn More
          </Button>

        </div>

      </div>
    </section>
  );
}