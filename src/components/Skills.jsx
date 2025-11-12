import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'Three.js', 'Spline', 'Framer Motion', 'Tailwind CSS', 'FastAPI', 'MongoDB', 'TypeScript', 'Node.js'
];

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {skills.map((s, i) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, duration: 0.4 }}
          className="rounded-xl border border-gray-200 bg-white/80 px-3 py-1.5 text-sm text-gray-800 backdrop-blur"
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}
