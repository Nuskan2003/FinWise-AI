import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <Logo  dark/>

            <p className="mt-6 text-slate-400">
              FinWise AI helps individuals manage their
              finances with intelligent insights,
              budgeting tools and financial analytics.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Product
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>Dashboard</li>

              <li>Budgets</li>

              <li>Reports</li>

              <li>AI Advisor</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>About</li>

              <li>Careers</li>

              <li>Privacy</li>

              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              Resources
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">

              <li>Documentation</li>

              <li>Support</li>

              <li>Community</li>

              <li>Blog</li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 FinWise AI. All rights reserved.

        </div>

      </div>

    </footer>
  );
}