import {
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything Important in One Place
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Monitor your finances with a beautiful dashboard
            designed to give you instant insights.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          {/* Header */}

          <div className="border-b border-slate-200 px-8 py-6">

            <h3 className="text-2xl font-bold text-slate-900">
              Financial Dashboard
            </h3>

          </div>

          {/* Cards */}

          <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">

            <SummaryCard
              title="Balance"
              amount="Rs.245,000"
              positive
            />

            <SummaryCard
              title="Income"
              amount="Rs.120,000"
              positive
            />

            <SummaryCard
              title="Expenses"
              amount="Rs.75,000"
            />

            <SummaryCard
              title="Savings"
              amount="Rs.45,000"
              positive
            />

          </div>

          {/* Bottom Grid */}

          <div className="grid gap-8 border-t border-slate-200 p-8 lg:grid-cols-2">

            <ChartPlaceholder />

            <AIInsight />

          </div>

        </div>

      </div>
    </section>
  );
}

function SummaryCard({
  title,
  amount,
  positive = false,
}: {
  title: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">

      <div className="flex items-center justify-between">

        <p className="text-slate-500">
          {title}
        </p>

        {positive ? (
          <ArrowUpRight className="text-emerald-500" />
        ) : (
          <ArrowDownRight className="text-red-500" />
        )}

      </div>

      <h3 className="mt-4 text-3xl font-bold text-slate-900">
        {amount}
      </h3>

    </div>
  );
}

function ChartPlaceholder() {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">

      <h3 className="text-xl font-semibold text-slate-900">
        Spending Overview
      </h3>

      <div className="mt-8 flex h-52 items-end justify-between gap-3">

        <div className="h-20 w-full rounded-t-xl bg-emerald-200"></div>
        <div className="h-40 w-full rounded-t-xl bg-emerald-300"></div>
        <div className="h-28 w-full rounded-t-xl bg-emerald-400"></div>
        <div className="h-48 w-full rounded-t-xl bg-emerald-500"></div>
        <div className="h-36 w-full rounded-t-xl bg-emerald-300"></div>
        <div className="h-24 w-full rounded-t-xl bg-emerald-200"></div>

      </div>

    </div>
  );
}

function AIInsight() {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">

      <div className="flex items-center gap-2">

        <Sparkles className="text-emerald-500" />

        <h3 className="text-xl font-semibold text-slate-900">
          AI Insights
        </h3>

      </div>

      <ul className="mt-8 space-y-4">

        <li className="rounded-xl bg-emerald-50 p-4">
          ✔ Spending decreased by 12% this month.
        </li>

        <li className="rounded-xl bg-emerald-50 p-4">
          ✔ Savings increased by Rs.8,500.
        </li>

        <li className="rounded-xl bg-emerald-50 p-4">
          ✔ Food budget is on track.
        </li>

      </ul>

    </div>
  );
}