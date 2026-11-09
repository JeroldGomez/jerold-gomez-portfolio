import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full px-4 pb-26 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="h-px border-t border-neutral-700/80 from-transparent via-neutral-600/80 to-transparent"
        />

        <div className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-[#929DA7]">
              Thanks for stopping by
            </p>
            <p className="max-w-lg font-[family-name:var(--font-geist-sans)] text-2xl font-medium leading-tight text-white sm:text-3xl">
              Curiosity turns data into{" "}
              <span className="font-[family-name:var(--font-playfair-display)] font-normal italic text-[#c4c4c4]">
                stories.
              </span>
            </p>
          </div>

          <nav aria-label="Footer navigation" className="sm:pb-1">
            <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] text-[#929DA7]">
              Find me elsewhere
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-[family-name:var(--font-geist-mono)] text-sm text-[#c4c4c4]">
              <a
                href="https://github.com/JeroldGomez"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                GitHub
                <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeroldgomez/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                LinkedIn
                <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:jeroldgomez345@gmail.com"
                className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Email
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-700/80 pt-5 font-[family-name:var(--font-geist-mono)] text-[11px] text-[#929DA7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jerold Gomez</p>
          <p>
            Made with curiosity <span className="px-1 text-neutral-600">/</span>{" "}
            Next.js &amp; Tailwind CSS
          </p>
          {/* <a
            href="#home"
            className="group inline-flex items-center gap-1 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:justify-end"
          >
            Back to top
            <ArrowUpIcon aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a> */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 