import {
  UserPlus,
  Wallet,
  Brain,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Sign up securely and personalize your financial workspace.",
  },
  {
    icon: Wallet,
    title: "Track Your Finances",
    description:
      "Record income and expenses while organizing them into categories.",
  },
  {
    icon: Brain,
    title: "Receive AI Insights",
    description:
      "Let AI analyze your spending patterns and recommend smarter decisions.",
  },
  {
    icon: TrendingUp,
    title: "Achieve Your Goals",
    description:
      "Monitor your savings, budgets, and financial progress over time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Start Managing Your Finances in Minutes
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            FinWise AI simplifies financial management into four easy steps.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white">

                  <Icon className="h-8 w-8" />

                </div>

                <div className="mt-6 text-sm font-bold text-emerald-600">
                  Step {index + 1}
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}