import { Menu, MapPin, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-full bg-white/70 hover:bg-white transition shadow-sm">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-500 grid place-items-center shadow-md">
              <span className="text-white font-black">Z</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-800">Zomato</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-2 shadow-sm w-full">
            <MapPin className="h-4 w-4 text-red-500" />
            <input
              placeholder="Enter delivery location"
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
            <div className="w-px h-6 bg-gray-200" />
            <Search className="h-4 w-4 text-gray-500" />
            <input
              placeholder="Search for restaurants or cuisines"
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
