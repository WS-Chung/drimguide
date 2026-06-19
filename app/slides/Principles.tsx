import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Principles() {
  return (
    <SlideShell
      number="02"
      eyebrow="WHY · 도입 배경"
      title="우리가 지키는 6가지 원칙"
      description="초기 도입 후 실무 피드백을 반영해 Phase 1을 완료하고 Phase 2로 진입하는 단계입니다. 각 단계는 운영 데이터와 팀 의견에 따라 자유롭게 다듬어 갑니다."
    >
      <CardGrid cols={3}>
        <Card title="① 분야별 → 식별 단위 운영" badge="UPDATED" icon="◆" accent="brand">
          초기 분야별 공용 계정에서{" "}
          <strong>Team Plan 16-seat 정식 좌석</strong>으로 진화. 공유 Projects가
          분야 역할을 대체.
        </Card>
        <Card title="② 회사 메일 강제 연결" badge="MUST" icon="✱" accent="rose">
          Team 도메인 인증으로 자동 처리. Workspace 메일은 모든 좌석에 기본
          연결.
        </Card>
        <Card title="③ 지식의 회사 귀속" badge="Why" icon="◇" accent="brand">
          개인 디바이스/개인 계정에 산출물 보관 금지. 모든 결과는 Notion · GitHub
          · Drive로.
        </Card>
        <Card title="④ AX 워크플로우 표준화" badge="How" icon="▶" accent="emerald">
          PRD, <code className="text-brand-300">CLAUDE.md</code> 셋업,
          프롬프트·리뷰 템플릿 표준화. 표준 레포 템플릿 배포.
        </Card>
        <Card title="⑤ 공유의 자동화" badge="How" icon="⇄" accent="emerald">
          Team 어드민 콘솔에서 4개 도구 일괄 연결.{" "}
          <strong>First Use Cases</strong>로 즉시 가시화.
        </Card>
        <Card title="⑥ 단계적 거버넌스" badge="PLAN" icon="⇪" accent="amber">
          Phase 1 ✓ → Phase 2 진입. 운영 데이터 기반으로 Phase 3 자동화 거버넌스로
          진화.
        </Card>
      </CardGrid>

      <Roadmap />
    </SlideShell>
  );
}

function Roadmap() {
  return (
    <div className="rounded-2xl glass p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold">
          Governance Roadmap
        </p>
        <span className="text-[10.5px] text-slate-500 font-mono">3-phase plan</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Phase
          state="done"
          tag="✓ Phase 1"
          pill="DONE"
          title="공용 계정 도입"
          items={[
            "분야별 공용 Claude 계정",
            "Slack · Notion · GitHub · Drive 연결",
            "최소 운영 룰 그라운드",
          ]}
        />
        <Phase
          state="active"
          tag="▶ Phase 2"
          pill="CURRENT"
          title="식별 단위 운영"
          items={[
            "Team Plan 16-seat (Standard+Premium)",
            "사용자/도메인 단위 가시성",
            "Slack/Workspace/Git/Notion 일괄 통합",
          ]}
        />
        <Phase
          state="future"
          tag="Phase 3"
          title="자동화 거버넌스"
          items={[
            "사내 RAG · MCP 표준화",
            "자체 LLM 게이트웨이",
            "DLP · 접근권한 자동 적용",
          ]}
        />
      </div>
      <p className="mt-4 text-[12px] text-slate-400 leading-relaxed">
        실무진 피드백 반영으로 Phase 2 진입 시점을 앞당겼습니다. Phase 3는 운영
        데이터가 충분히 누적된 후 분기 거버넌스 리뷰에서 결정합니다.
      </p>
    </div>
  );
}

function Phase({
  state,
  tag,
  pill,
  title,
  items,
}: {
  state: "done" | "active" | "future";
  tag: string;
  pill?: string;
  title: string;
  items: string[];
}) {
  const styleByState = {
    done: "bg-emerald-500/8 border-emerald-400/30",
    active:
      "bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent border-brand-400/40 shadow-glow-sm",
    future: "bg-ink-800/40 border-slate-700/60",
  } as const;
  const tagColor = {
    done: "text-emerald-200",
    active: "text-brand-200",
    future: "text-slate-500",
  } as const;
  const titleColor = {
    done: "text-slate-50",
    active: "text-slate-50",
    future: "text-slate-200",
  } as const;
  const itemColor = {
    done: "text-slate-200",
    active: "text-slate-200",
    future: "text-slate-400",
  } as const;
  const pillStyle = {
    done: "bg-emerald-400/25 text-emerald-100",
    active: "bg-brand-400/30 text-brand-100",
    future: "",
  } as const;

  return (
    <div className={`relative rounded-xl border p-3.5 transition ${styleByState[state]}`}>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span
          className={`text-[10px] font-mono font-semibold tracking-wider ${tagColor[state]}`}
        >
          {tag}
        </span>
        {pill && (
          <span
            className={`text-[9.5px] px-1.5 py-0.5 rounded font-bold tracking-wider uppercase ${pillStyle[state]}`}
          >
            {pill}
          </span>
        )}
      </div>
      <p className={`font-semibold mb-2 text-[14px] ${titleColor[state]}`}>{title}</p>
      <ul className="text-[12.5px] space-y-1 list-disc pl-4">
        {items.map((it, i) => (
          <li key={i} className={itemColor[state]}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
