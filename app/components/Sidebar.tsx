"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/app/data/nav";

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      setActiveId(window.location.hash.replace("#", ""));
    }
    const onSet = (e: Event) => {
      const detail = (e as CustomEvent).detail as { id: string | null };
      setActiveId(detail.id);
    };
    window.addEventListener("section:set", onSet);
    return () => window.removeEventListener("section:set", onSet);
  }, []);

  const handleClick = (id: string) => {
    window.dispatchEvent(
      new CustomEvent("section:set", { detail: { id } })
    );
    setActiveId(id);
    setMobileOpen(false);
    if (typeof window !== "undefined") {
      try {
        history.replaceState(null, "", `#${id}`);
      } catch {
        // ignore
      }
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        })
      );
    }
  };

  // 그룹핑: 인접한 같은 group 항목들을 묶음
  const groups: { name?: string; items: typeof navItems }[] = [];
  navItems.forEach((it) => {
    const last = groups[groups.length - 1];
    if (last && last.name === it.group) {
      last.items.push(it);
    } else {
      groups.push({ name: it.group, items: [it] });
    }
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        className="no-print fixed bottom-5 right-5 z-50 lg:hidden rounded-full bg-brand-600 text-white shadow-xl px-5 py-3 text-sm font-semibold active:scale-95 transition"
        aria-label="목차 열기"
      >
        {mobileOpen ? "닫기 ✕" : "목차 ☰"}
      </button>

      <aside
        className={`no-print fixed lg:sticky top-0 left-0 z-40 h-screen w-72 shrink-0 border-r border-slate-200/70 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 backdrop-blur transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full overflow-y-auto px-5 py-6">
          <button
            type="button"
            onClick={() => handleClick("overview")}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700" />
            <span className="font-bold tracking-tight">
              DrimAES <span className="text-brand-600">AI Guide</span>
            </span>
          </button>

          <nav className="space-y-5 text-sm">
            {groups.map((g, gi) => (
              <div key={gi}>
                {g.name && (
                  <p className="px-2 mb-1 text-[11px] uppercase tracking-wider text-slate-400">
                    {g.name}
                  </p>
                )}
                <ul className="space-y-0.5">
                  {g.items.map((n) => {
                    const active = activeId === n.id;
                    const isAppendix = n.appendix;
                    return (
                      <li key={n.id}>
                        <a
                          href={`#${n.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick(n.id);
                          }}
                          className={`block rounded-lg px-3 py-2 transition ${
                            active
                              ? isAppendix
                                ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold"
                                : "bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-200 font-semibold"
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                          }`}
                        >
                          {n.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-xs text-slate-500 dark:text-slate-400">
            본 문서는 <strong>사내 전용 공지</strong>입니다. 외부 공유 금지.
          </div>
        </div>
      </aside>
    </>
  );
}
