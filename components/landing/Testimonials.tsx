const testimonials = [
  {
    name: "Sarah Perera",
    role: "Freelancer",
    message:
      "FinWise AI completely changed the way I manage my monthly expenses. The AI insights are incredibly useful.",
  },
  {
    name: "Ahmed Rizwan",
    role: "Software Engineer",
    message:
      "The dashboard is clean, intuitive, and makes budgeting much easier than spreadsheets.",
  },
  {
    name: "Nimal Fernando",
    role: "Small Business Owner",
    message:
      "Tracking income and expenses has never been easier. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Loved by Users
          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((user) => (

            <div
              key={user.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >

              <p className="leading-8 text-slate-600">
                "{user.message}"
              </p>

              <div className="mt-8">

                <h3 className="font-semibold">
                  {user.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {user.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}