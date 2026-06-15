import type { ReactNode } from "react";

export type Step = {
  title: string;
  body: ReactNode;
};

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-4">
          <span className="shrink-0 grid place-items-center h-8 w-8 rounded-full bg-brand-600 text-white text-sm font-bold">
            {i + 1}
          </span>
          <div className="flex-1 pt-1">
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              {s.title}
            </p>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {s.body}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
