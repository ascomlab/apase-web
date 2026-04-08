import ReactMarkdown from "react-markdown";

import { importantDate } from "../data";
import { submissionGuidelinesContent } from "./data";

export default function SubmissionPage() {
  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      <section className="mb-20 max-w-4xl">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
          Call for Papers
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A365D] tracking-tighter mb-8 leading-tight">
          Paper <br />
          <span className="text-primary italic">Submission</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-body">
          TBD
        </p>
      </section>

      <section className="mb-24 bg-surface-container-low rounded-2xl p-8 md:p-12 prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-extrabold tracking-tight mb-8 mt-8">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold tracking-tight mb-6 mt-8">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-2 mb-6 ml-2">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>{children}</span>
              </li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
          }}
        >
          {submissionGuidelinesContent}
        </ReactMarkdown>
      </section>

      <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-2">
              Important Dates
            </h2>
            <p className="text-on-surface-variant">TBD</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20 rounded-xl overflow-hidden">
          {importantDate.map((content, dx) => (
            <div key={dx} className="bg-surface-container-lowest p-8">
              <span className="text-primary font-bold block mb-4">
                {content.date}
              </span>
              <h4 className="text-xl font-bold mb-2">{content.title}</h4>
              <p className="text-sm text-on-surface-variant">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
