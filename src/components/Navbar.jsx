import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            <span className="text-indigo-600 dark:text-indigo-400">Dev</span>Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:student.dev@example.com" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="mailto:student.dev@example.com" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
