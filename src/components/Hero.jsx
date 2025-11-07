import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to internships & collabs
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            University Student turned <span className="text-indigo-600">Software Developer</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            I design and build interactive web experiences with a focus on performance, accessibility, and delightful UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-indigo-500 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-5 py-2.5 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-800 transition">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-neutral-900/40 dark:to-neutral-900"></div>
        </div>
      </div>
    </section>
  );
}
