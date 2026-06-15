import type { ReactNode } from "react";

export function CardGrid({
  cols = 2,
  children,
}: {
  cols?: 2 | 3 | 4;
  children: ReactNode;
}) {
  const grid =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";
  return <div className={`grid grid-cols-1 ${grid} gap-4`}>{children}</div>;
}

export function Card({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
        {badge && (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-200">
            {badge}
          </span>
        )}
      </div>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}
