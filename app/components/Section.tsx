import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: Props) {
  return (
    <section id={id} className="section-anchor py-12 sm:py-16 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-4xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="mt-8 space-y-6 text-[15px] sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 prose-tight">
        {children}
      </div>
    </section>
  );
}
