import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const cards = [
  {
    title: 'Project One',
    desc: 'Replace with your cool project description. Add stack, role, and impact.',
    tags: ['React', 'Tailwind', '3D'],
  },
  {
    title: 'Project Two',
    desc: 'Another highlight project. Keep it short and outcome-focused.',
    tags: ['FastAPI', 'MongoDB', 'Cloud'],
  },
  {
    title: 'Project Three',
    desc: 'An animation-heavy experiment with smooth interactions.',
    tags: ['Framer Motion', 'Spline'],
  },
];

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => (
        <motion.article
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-indigo-400/30 blur-2xl transition-all group-hover:scale-125" />
          <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
          <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-black" href="#" target="_blank" rel="noreferrer">
              <ExternalLink className="h-3.5 w-3.5"/> Live
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-gray-50" href="#" target="_blank" rel="noreferrer">
              <Github className="h-3.5 w-3.5"/> Code
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
