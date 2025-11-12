import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection({ id, eyebrow, title, subtitle, children, tint = 'from-indigo-500/10 to-transparent' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  return (
    <section id={id} ref={ref} className="relative py-24 sm:py-32">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${tint}`} />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div style={{ y, scale }} className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">{eyebrow}</p>}
          {title && <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h3>}
          {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
        </motion.div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
