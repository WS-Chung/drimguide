import BlockFlow from "@/app/components/BlockFlow";

export default function Overview() {
  return (
    <article className="slide-enter min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />

      <div className="relative px-6 sm:px-10 lg:px-14 pt-12 sm:pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold text-brand-200 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
          Internal Announcement · v1.2
        </div>

        <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
          DrimAES <span className="gradient-text">AI 활용</span>
          <br />
          거버넌스 가이드
        </h1>

        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          공용 Claude(Max/Pro) 계정 운영, AX 워크플로우, Slack · Notion · GitHub ·
          Google Workspace 연동 표준. 모든 구성원이 같은 룰로 더 빠르게, 더 잘
          만들기 위한 사내 표준입니다.
        </p>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <Fact label="공용 계정" value="9" suffix="개" />
          <Fact label="Max / Pro" value="8 / 1" />
          <Fact label="통합 도구" value="4" suffix="종" />
          <Fact label="AX 단계" value="5" suffix="단계" />
        </dl>

        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">
            AX Workflow at a glance
          </p>
          <BlockFlow
            items={[
              { num: "01", title: "PRD", sub: "요구사항" },
              { num: "02", title: "사전 MD", sub: "CLAUDE.md" },
              { num: "03", title: "Claude", sub: "설계 + 구현" },
              { num: "04", title: "리뷰", sub: "사람 + AI" },
              { num: "05", title: "공유", sub: "Notion/Slack" },
            ]}
            compact
          />
        </div>

        <div className="mt-10 rounded-2xl glass p-5 max-w-3xl">
          <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mb-2">
            How to read
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            왼쪽 사이드바에서 챕터를 누르면 본문 영역이 슬라이드처럼 한 페이지씩
            바뀝니다. 키보드 <kbd className="kbd">←</kbd> /{" "}
            <kbd className="kbd">→</kbd> 또는 우측 하단의 페이지 인디케이터로도
            이동할 수 있습니다. 모바일은 우하단 “목차 ☰” 버튼.
          </p>
        </div>
      </div>

      <style>{`
        .kbd {
          display: inline-block;
          padding: 0 0.4rem;
          margin: 0 0.15rem;
          border: 1px solid rgba(148,163,184,0.35);
          border-radius: 0.35rem;
          background: rgba(15,23,42,0.6);
          color: #cbd5e1;
          font-family: ui-monospace, monospace;
          font-size: 0.72rem;
        }
      `}</style>
    </article>
  );
}

function Fact({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl glass px-3.5 py-3 backdrop-blur">
      <dt className="text-[10.5px] uppercase tracking-wider text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold text-slate-50">
        {value}
        {suffix && <span className="text-sm text-slate-400 ml-1">{suffix}</span>}
      </dd>
    </div>
  );
}
