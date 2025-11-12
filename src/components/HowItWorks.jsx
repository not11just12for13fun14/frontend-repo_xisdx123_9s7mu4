import { Bike, Smartphone, Timer } from "lucide-react";

const steps = [
  {
    title: "Choose",
    desc: "Browse top-rated restaurants and menus near you.",
    icon: Smartphone,
  },
  {
    title: "Order",
    desc: "Customize your meal with a tap and check out in seconds.",
    icon: Timer,
  },
  {
    title: "Deliver",
    desc: "Track your rider in real-time from kitchen to doorstep.",
    icon: Bike,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">How it works</h2>
        <p className="mt-2 text-gray-600 text-center">Ordering made effortless in three simple steps.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 grid place-items-center mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
