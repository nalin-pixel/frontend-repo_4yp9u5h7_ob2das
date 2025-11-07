import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Student Developer. All rights reserved.</p>
          <p className="text-neutral-500">Built with React, Tailwind, and a playful 3D touch.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
