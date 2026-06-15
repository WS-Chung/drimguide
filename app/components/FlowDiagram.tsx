import type { ReactNode } from "react";

export type FlowStep = {
  title: string;
  body: ReactNode;
};

export default function FlowDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="list-none p-0 m-0 space-y-0">
      {steps.map((s, i) => (
        <li key={i}>
          <div className="flow-card">
            <div className="flow-number">{i + 1}</div>
            <div className="flow-content">
              <p className="flow-title">{s.title}</p>
              <div className="flow-body">{s.body}</div>
            </div>
          </div>
          {i < steps.length - 1 && <FlowArrow />}
        </li>
      ))}
    </ol>
  );
}

function FlowArrow() {
  return (
    <div className="flow-arrow py-1" aria-hidden>
      <svg
        width="20"
        height="56"
        viewBox="0 0 20 56"
        className="block mx-auto"
      >
        <line
          x1="10"
          y1="0"
          x2="10"
          y2="44"
          stroke="currentColor"
          strokeWidth="2"
          className="flow-line-anim"
        />
        <polygon points="10,55 4,43 16,43" fill="currentColor" />
      </svg>
    </div>
  );
}
