import { UtensilsCrossed, Coffee, Cake, Salad, Sandwich, IceCream, Pizza, Fish, Drumstick } from "lucide-react";

const categories = [
  { name: "Burgers", icon: Sandwich, color: "from-orange-400 to-red-500" },
  { name: "Pizza", icon: Pizza, color: "from-red-500 to-yellow-500" },
  { name: "Drinks", icon: Coffee, color: "from-cyan-400 to-blue-500" },
  { name: "Desserts", icon: Cake, color: "from-pink-400 to-rose-500" },
  { name: "Healthy", icon: Salad, color: "from-green-400 to-emerald-500" },
  { name: "Seafood", icon: Fish, color: "from-sky-400 to-indigo-500" },
  { name: "Chicken", icon: Drumstick, color: "from-amber-400 to-orange-500" },
  { name: "More", icon: UtensilsCrossed, color: "from-slate-400 to-slate-600" },
];

export default function Categories() {
  return (
    <section id="browse" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Browse by category</h2>
          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">See all</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`group relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br ${cat.color} text-white h-28 shadow-lg hover:shadow-xl transition`}
            >
              <div className="absolute -bottom-6 -right-6 opacity-30 text-white/70 group-hover:opacity-40 transition">
                <cat.icon className="h-24 w-24" />
              </div>
              <div className="relative z-10 text-left">
                <cat.icon className="h-6 w-6 mb-3" />
                <div className="text-sm font-semibold">{cat.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
