import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Principles() {
  return (
    <SlideShell
      number="02"
      eyebrow="WHY · 도입 배경"
      title="우리가 지키는 6가지 원칙"
      description="초기에는 분야별 공용 계정으로 빠르게 시작하고, 운영 데이터를 쌓으며 단계적으로 거버넌스를 고도화합니다. 본 가이드는 그 출발점이며, 회사는 향후 정식 거버넌스 체계로의 전환을 계획하고 있습니다."
    >
      <CardGrid cols={3}>
        <Card title="① 분야별 공용 계정" badge="Why" icon="◆" accent="brand">
          개발 2인 / 1계정, 기획·운영 7인 / 1계정. 초기 분야 지정 후 자유 이동.
        </Card>
        <Card title="② 회사 메일 강제 연결" badge="Must" icon="✱" accent="rose">
          공용 계정의 Google Workspace 이메일은 <strong>반드시</strong> 연결.
          결과물·이력의 회사 귀속을 위함.
        </Card>
        <Card title="③ 지식의 회사 귀속" badge="Why" icon="◇" accent="brand">
          개인 디바이스/개인 계정에 산출물 보관 금지. 모든 결과는 Notion · GitHub
          · Drive로.
        </Card>
        <Card title="④ AX 워크플로우 표준화" badge="How" icon="▶" accent="emerald">
          PRD, 사전 MD(<code className="text-brand-300">CLAUDE.md</code>) 셋업,
          프롬프트·리뷰 템플릿 표준화.
        </Card>
        <Card title="⑤ 공유의 자동화" badge="How" icon="⇄" accent="emerald">
          Slack/Notion/GitHub/Drive에 결과를 흘려보내는 동선. 매주 노하우 공유.
        </Card>
        <Card title="⑥ 단계적 거버넌스" badge="Plan" icon="⇪" accent="amber">
          현재는 가벼운 그라운드 룰. 운영 성숙도에 따라 식별·정책 자동화로 전환.
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
        <span className="text-[10.5px] text-slate-500 font-mono">
          3-phase plan
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Phase
          active
          tag="NOW · Phase 1"
          title="공용 계정 도입"
          items={[
            "분야별 공용 Claude 계정",
            "Slack · Notion · GitHub · Drive 연결",
            "최소 운영 룰 그라운드",
          ]}
        />
        <Phase
          tag="NEXT · Phase 2"
          title="식별 단위 운영"
          items={[
            "개인 SSO 기반 사용자 식별",
            "사용자/부서 단위 사용 가시성",
            "MFA · 세션 정책 정식화",
          ]}
        />
        <Phase
          tag="LATER · Phase 3"
          title="자동화 거버넌스"
          items={[
            "사내 RAG · MCP 표준화",
            "자체 LLM 게이트웨이",
            "DLP · 접근권한 자동 적용",
          ]}
        />
      </div>
      <p className="mt-4 text-[12px] text-slate-400 leading-relaxed">
        지금은 <strong className="text-slate-200">Phase 1</strong>입니다. 운영 데이터가
        충분히 쌓이면 단계적으로 Phase 2 → 3으로 전환합니다. 각 단계의 도입 시점·범위는
        분기 거버넌스 리뷰에서 결정합니다.
      </p>
    </div>
  );
}

function Phase({
  tag,
  title,
  items,
  active,
}: {
  tag: string;
  title: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border p-3.5 transition ${
        active
          ? "bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent border-brand-400/40 shadow-glow-sm"
          : "bg-ink-800/40 border-slate-700/60"
      }`}
    >
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span
          className={`text-[10px] font-mono font-semibold tracking-wider ${
            active ? "text-brand-200" : "text-slate-500"
          }`}
        >
          {tag}
        </span>
        {active && (
          <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-brand-400/30 text-brand-100 font-bold tracking-wider uppercase">
            Current
          </span>
        )}
      </div>
      <p
        className={`font-semibold mb-2 text-[14px] ${
          active ? "text-slate-50" : "text-slate-200"
        }`}
      >
        {title}
      </p>
      <ul className="text-[12.5px] space-y-1 list-disc pl-4">
        {items.map((it, i) => (
          <li key={i} className={active ? "text-slate-200" : "text-slate-400"}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
