"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  variant?: "default" | "appendix";
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  variant = "default",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === `#${id}`) {
      setOpen(true);
    }
    const onSet = (e: Event) => {
      const detail = (e as CustomEvent).detail as { id: string | null };
      setOpen(detail.id === id);
    };
    window.addEventListener("section:set", onSet);
    return () => window.removeEventListener("section:set", onSet);
  }, [id]);

  const handleHeaderClick = () => {
    if (open) {
      window.dispatchEvent(
        new CustomEvent("section:set", { detail: { id: null } })
      );
    } else {
      window.dispatchEvent(
        new CustomEvent("section:set", { detail: { id } })
      );
    }
  };

  const isAppendix = variant === "appendix";

  return (
    <section
      id={id}
      className={`section-anchor border-b border-slate-200/70 dark:border-slate-800/70 ${
        isAppendix ? "appendix-section" : ""
      }`}
    >
      <button
        type="button"
        onClick={handleHeaderClick}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full text-left py-6 sm:py-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {eyebrow && (
              <p
                className={`mb-2 text-xs font-semibold uppercase tracking-widest ${
                  isAppendix
                    ? "text-slate-500 dark:text-slate-400"
                    : "text-brand-600 dark:text-brand-300"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <span
            className={`shrink-0 mt-1 inline-grid place-items-center h-9 w-9 rounded-full border transition-transform duration-200 ${
              isAppendix
                ? "border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300"
                : "border-brand-200 dark:border-brand-700 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-200"
            } ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </button>
      {open && (
        <div
          id={`${id}-panel`}
          role="region"
          className="pb-12 sm:pb-16 animate-fadeIn"
        >
          <div className="space-y-6 text-[15px] sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 prose-tight">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
