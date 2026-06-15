"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import { slides, defaultSlideId, slideIds } from "@/app/slides";

export default function HomeShell() {
  const [activeId, setActiveId] = useState<string>(defaultSlideId);
  const mainRef = useRef<HTMLElement | null>(null);

  // 초기 진입 시 URL 해시 반영
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      if (h && slideIds.includes(h)) setActiveId(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  // activeId 바뀔 때 URL 갱신 + 본문 스크롤 최상단으로
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== `#${activeId}`) {
      try {
        history.replaceState(null, "", `#${activeId}`);
      } catch {
        /* noop */
      }
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      mainRef.current?.scrollTo?.({ top: 0, behavior: "instant" as ScrollBehavior });
    });
  }, [activeId]);

  const Slide = slides[activeId] ?? slides[defaultSlideId];

  // 키보드 화살표로 이전/다음 슬라이드
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable) return;
      }
      const idx = slideIds.indexOf(activeId);
      if (idx === -1) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        const next = slideIds[Math.min(idx + 1, slideIds.length - 1)];
        if (next !== activeId) setActiveId(next);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        const prev = slideIds[Math.max(idx - 1, 0)];
        if (prev !== activeId) setActiveId(prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId]);

  const idx = slideIds.indexOf(activeId);
  const total = slideIds.length;

  return (
    <div className="min-h-screen flex">
      <Sidebar activeId={activeId} onSelect={setActiveId} />
      <main ref={mainRef} className="flex-1 min-w-0 relative">
        <div key={activeId} className="max-w-6xl mx-auto">
          <Slide />
        </div>

        {/* 진행 인디케이터 (하단 우측) */}
        <div className="no-print fixed bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 z-30 flex items-center gap-2 rounded-full bg-ink-800/80 backdrop-blur ring-1 ring-slate-700/60 px-3 py-1.5 text-[11px] text-slate-300">
          <button
            type="button"
            disabled={idx <= 0}
            onClick={() => setActiveId(slideIds[Math.max(idx - 1, 0)])}
            className="px-1.5 py-0.5 rounded hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="이전 슬라이드"
          >
            ←
          </button>
          <span className="font-mono tabular-nums">
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            disabled={idx >= total - 1}
            onClick={() => setActiveId(slideIds[Math.min(idx + 1, total - 1)])}
            className="px-1.5 py-0.5 rounded hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="다음 슬라이드"
          >
            →
          </button>
        </div>
      </main>
    </div>
  );
}
