import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Get in touch</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Have a project in mind or want to say hello? I’d love to hear from you.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
          {submitted ? (
            <div className="flex flex-col items-center gap-2 py-10">
              <Mail className="h-8 w-8 text-indigo-600" />
              <p className="text-neutral-700 dark:text-neutral-300">Thanks! Your message has been noted locally.</p>
              <p className="text-sm text-neutral-500">Hook this up to your backend or email service when ready.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your idea..."
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-indigo-500 transition">
                Send <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
