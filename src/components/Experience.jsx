import { motion } from 'framer-motion';

const items = [
  { role: 'Frontend Developer', company: 'Your Company', period: '2023 — Present', points: ['Built interactive dashboards', 'Improved performance by 30%'] },
  { role: 'Web Developer', company: 'Another Org', period: '2021 — 2023', points: ['Led redesign initiative', 'Set up CI/CD workflows'] },
];

export default function Experience() {
  return (
    <div className="space-y-6">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.45 }}
          className="rounded-2xl border border-gray-200 bg-white p-6"
        >
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h4 className="text-lg font-semibold text-gray-900">{it.role} · <span className="text-gray-600">{it.company}</span></h4>
            <p className="text-sm text-gray-500">{it.period}</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
            {it.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
