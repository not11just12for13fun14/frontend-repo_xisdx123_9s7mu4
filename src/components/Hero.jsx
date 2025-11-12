import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-1 shadow-sm mb-4">
            <span className="text-xs font-semibold text-red-600">New</span>
            <span className="text-xs text-gray-600">3D experience for faster cravings</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Food delivery that feels deliciously instant
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            Crave it. Tap it. Track it. From your favorite restaurants to your door, super fast.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#browse" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-red-500 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-0.5 transition">
              Order now
            </a>
            <a href="#restaurants" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition">
              Explore restaurants
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
