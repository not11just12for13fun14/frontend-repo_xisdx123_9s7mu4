import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-gray-400" placeholder="Your name" defaultValue="Surya Venkata Karthikeya Yelamanchili" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-gray-400" placeholder="you@example.com" />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 h-32 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 outline-none focus:border-gray-400" placeholder="Tell me about your project..." />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-white hover:bg-black"><Send className="h-4 w-4"/>Send</button>
          <div className="flex items-center gap-3 text-gray-700">
            <a href="mailto:your@email" className="inline-flex items-center gap-1 hover:underline"><Mail className="h-4 w-4"/>Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Github className="h-4 w-4"/>GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Linkedin className="h-4 w-4"/>LinkedIn</a>
          </div>
        </div>
      </motion.form>
      <p className="mt-3 text-center text-xs text-gray-500">This is a read-only showcase for visitors. Only you can edit content by changing the source files.</p>
    </div>
  );
}
