import {
  Brain,
  Wallet,
  PieChart,
  Target,
  ScanText,
  PiggyBank,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Track every expense and income in one place with an intuitive interface.",
  },
  {
    icon: PieChart,
    title: "Financial Analytics",
    description:
      "Visualize your spending with interactive charts and insightful reports.",
  },
  {
    icon: Brain,
    title: "AI Financial Advisor",
    description:
      "Receive personalized recommendations and spending insights powered by AI.",
  },
  {
    icon: Target,
    title: "Budget Planner",
    description:
      "Create monthly budgets and stay on track with smart progress monitoring.",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    description:
      "Set savings targets and monitor your progress toward achieving them.",
  },
  {
    icon: ScanText,
    title: "Receipt Scanner",
    description:
      "Upload receipts and automatically extract transaction details using OCR.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Everything You Need to Manage Your Money
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            FinWise AI combines modern financial management tools
            with artificial intelligence to help you make smarter
            financial decisions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}