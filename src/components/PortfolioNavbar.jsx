import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white shadow-inner shadow-white/30">
                <span className="text-sm font-bold tracking-tight">SY</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm text-gray-500">Portfolio</p>
                <h1 className="text-base font-semibold text-gray-900">Surya Venkata Karthikeya Yelamanchili</h1>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/20 bg-white/70 px-3 py-2 text-sm font-medium text-gray-900 backdrop-blur hover:bg-white">
                <div className="flex items-center gap-2"><Github className="h-4 w-4"/><span>GitHub</span></div>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group rounded-xl border border-white/20 bg-white/70 px-3 py-2 text-sm font-medium text-gray-900 backdrop-blur hover:bg-white">
                <div className="flex items-center gap-2"><Linkedin className="h-4 w-4"/><span>LinkedIn</span></div>
              </a>
              <a href="#contact" className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black">Hire me</a>
            </div>

            <button className="md:hidden rounded-xl border border-white/20 bg-white/70 p-2 backdrop-blur">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
