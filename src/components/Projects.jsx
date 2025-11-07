import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Campus Navigator',
    description:
      'Progressive web app that maps buildings, classes, and events. Built with React, Leaflet, and a custom Node API.',
    tech: ['React', 'Leaflet', 'PWA'],
    link: '#',
  },
  {
    title: 'Research Paper Summarizer',
    description:
      'Tool to extract and summarize academic PDFs using Python, FastAPI, and transformers with a responsive dashboard.',
    tech: ['FastAPI', 'Python', 'Transformers'],
    link: '#',
  },
  {
    title: 'Hackathon Portfolio',
    description:
      'Animated portfolio template using Framer Motion and Tailwind, optimized for performance and accessibility.',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A selection of projects that blend solid engineering with thoughtful design.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-lg transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                </div>
                <Code className="h-5 w-5 text-indigo-500" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-1 text-neutral-600 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Visit <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
