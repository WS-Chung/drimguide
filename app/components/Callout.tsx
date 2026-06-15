import type { ReactNode } from "react";

type Variant = "info" | "warn" | "success" | "danger";

const styles: Record<Variant, string> = {
  info: "bg-brand-50 dark:bg-brand-900/30 border-brand-200 dark:border-brand-700 text-brand-900 dark:text-brand-100",
  warn: "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-100",
  success:
    "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100",
  danger:
    "bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-900 dark:text-rose-100",
};

const icons: Record<Variant, string> = {
  info: "ℹ️",
  warn: "⚠️",
  success: "✅",
  danger: "🚫",
};

export default function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-4 sm:p-5 ${styles[variant]}`}>
      {title && (
        <p className="font-semibold mb-1.5 flex items-center gap-2">
          <span aria-hidden>{icons[variant]}</span>
          <span>{title}</span>
        </p>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
