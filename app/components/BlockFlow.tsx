import type { ReactNode } from "react";

export type BlockFlowItem = {
  num?: string;
  title: string;
  sub?: string;
  icon?: ReactNode;
};

export default function BlockFlow({
  items,
  compact = false,
}: {
  items: BlockFlowItem[];
  compact?: boolean;
}) {
  return (
    <div className="-mx-2 overflow-x-auto pb-2">
      <div className="flex items-stretch gap-0 px-2 min-w-max">
        {items.map((it, i) => (
          <div key={i} className="flex items-center">
            <div className={`block-flow-card ${compact ? "min-w-[9rem]" : ""}`}>
              {it.num && <span className="num">STEP {it.num}</span>}
              <div className="flex items-center gap-2">
                {it.icon && (
                  <span className="text-base text-brand-300" aria-hidden>
                    {it.icon}
                  </span>
                )}
                <span className="title">{it.title}</span>
              </div>
              {it.sub && <p className="sub">{it.sub}</p>}
            </div>
            {i < items.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="44"
      height="36"
      viewBox="0 0 44 36"
      className="mx-1 text-slate-500"
      aria-hidden
    >
      <line
        x1="2"
        y1="18"
        x2="36"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        className="flow-line-anim-h"
      />
      <polygon points="44,18 32,12 32,24" fill="currentColor" />
    </svg>
  );
}
