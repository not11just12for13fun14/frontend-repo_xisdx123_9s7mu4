import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" />
      </div>

      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-white/10 via-white/40 to-white"/>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 backdrop-blur-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to exciting opportunities
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
            Surya Venkata Karthikeya Yelamanchili
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg">
            Building immersive, responsive and delightful web experiences with 3D, motion, and clean code.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 hover:bg-black">
              Explore Projects
            </a>
            <a href="#contact" className="rounded-xl border border-gray-900/10 bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {["React", "Three.js", "Spline", "Framer Motion"].map((t) => (
            <div key={t} className="rounded-xl border border-white/30 bg-white/70 p-3 text-center text-sm font-medium text-gray-700 backdrop-blur">
              {t}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"/>
    </section>
  );
}
