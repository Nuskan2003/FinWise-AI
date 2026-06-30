import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          AI Powered Personal Finance
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
          Take Control of Your Money
          <span className="text-emerald-500">
            {" "}
            with AI
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Track expenses, manage budgets, achieve savings goals,
          and receive intelligent financial insights powered by AI.
        </p>
      </section>
    </main>
  );
}