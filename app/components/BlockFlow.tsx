import { Fragment } from "react";
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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-0">
        {items.map((it, i) => (
          <Fragment key={i}>
            <div
              className={`block-flow-card sm:flex-1 sm:min-w-0 ${
                compact ? "py-2" : ""
              }`}
            >
              {it.num && <span className="num">STEP {it.num}</span>}
              <div className="flex items-center gap-1.5 min-w-0">
                {it.icon && (
                  <span
                    className="text-base text-brand-300 shrink-0"
                    aria-hidden
                  >
                    {it.icon}
                  </span>
                )}
                <span className="title">{it.title}</span>
              </div>
              {it.sub && <p className="sub">{it.sub}</p>}
            </div>
            {i < items.length - 1 && <Connector />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <>
      {/* 모바일: 세로 화살표 */}
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        className="sm:hidden mx-auto text-slate-500"
        aria-hidden
      >
        <line
          x1="9"
          y1="0"
          x2="9"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          className="flow-line-anim"
        />
        <polygon points="9,19 3,11 15,11" fill="currentColor" />
      </svg>
      {/* 데스크톱: 가로 화살표 */}
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        className="hidden sm:block self-center text-slate-500 shrink-0 mx-0.5"
        aria-hidden
      >
        <line
          x1="2"
          y1="12"
          x2="14"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          className="flow-line-anim-h"
        />
        <polygon points="22,12 12,7 12,17" fill="currentColor" />
      </svg>
    </>
  );
}
