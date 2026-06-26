import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import Callout from "@/app/components/Callout";

export default function Roadmap() {
  return (
    <SlideShell
      number="02"
      eyebrow="ROADMAP · 단계적 진화"
      title="회사 AI 활용 스킬셋을 함께 다듬어 가는 5단계"
      description="처음부터 모든 룰을 정해두지 않습니다. 각자 KIT로 써본 노하우를 모으고, 검증된 것만 정식 스킬·프롬프트로 승격해 다음 KIT 배포본에 반영합니다. 상향식 진화 모델입니다."
    >
      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          5단계 진화 흐름
        </p>
        <BlockFlow
          items={[
            { num: "S0", title: "KIT 도입", sub: "현재 · 압축 파일 배포" },
            { num: "S1", title: "각자 사용", sub: "프로젝트별 설치·실험" },
            { num: "S2", title: "노하우 축적", sub: "Drive 공유" },
            { num: "S3", title: "검증·승격", sub: "스킬·프롬프트 표준화" },
            { num: "S4", title: "스킬셋 진화", sub: "다음 KIT 배포본 반영" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Phase
          tag="S0 · NOW"
          title="KIT 도입 (현재 시점)"
          items={[
            "압축 KIT(company-agent-kit.zip) 배포",
            "상세 설치·사용 가이드 페이지 함께 제공",
            "Claude 기존 개인 계정 8개 그대로 사용",
            "지식 공유 채널은 Google 공유 드라이브 단일화",
          ]}
          active
        />
        <Phase
          tag="S1"
          title="각자 사용 · 프로젝트 최적화"
          items={[
            "직무별 프로필(minimal · developer · product · business) 중 선택",
            "프로젝트마다 따로 설치 — 한 룰로 모두 커버 X",
            "AI에게 SETUP_WIZARD.md 건네 자동 설치",
            "실패·돌발 상황은 자유롭게 실험",
          ]}
        />
        <Phase
          tag="S2"
          title="노하우 축적 · Drive 흐름"
          items={[
            "AI-Knowhow/skills · prompts · docs · feedbacks",
            "AI에게 부탁해서 내 작업 결과를 .md로 정리·업로드",
            "다른 사람 결과는 검역 폴더로 받아 보안검사 후 사용",
            "강제 KPI 없음 · 자율 공유",
          ]}
        />
        <Phase
          tag="S3"
          title="검증 · 정식 승격"
          items={[
            "여러 사람이 잘 쓴 프롬프트·스킬을 정식으로 등록",
            "출처·라이선스·보안 검토 통과 시 .agents/skills · prompts로 승격",
            "관련 인원이 합의해서 다음 KIT 배포본에 포함",
            "거버넌스는 운영 데이터가 충분히 쌓인 후 정립 — 지금은 결정 보류",
          ]}
        />
        <Phase
          tag="S4"
          title="회사 AI 활용 스킬셋 진화"
          items={[
            "정기적으로 새 KIT 배포본 릴리스",
            "새 직무·신규 프로젝트도 같은 표준으로 빠르게 합류",
            "회사 고유의 AI 활용 페르소나·프롬프트가 자산이 됨",
            "회사 차원의 거버넌스는 이 단계에서 자연스럽게 형성",
          ]}
          spanFull
        />
      </div>

      <Callout variant="info" title="ℹ 이 로드맵의 원칙">
        탑다운으로 회사가 룰을 정하지 않습니다. 각자에게 도구를 주고, 좋은 방법은 자연스럽게
        모이고 검증되어 정식 자산이 됩니다.{" "}
        <strong className="text-brand-200">하나의 룰로 다양한 직무·프로젝트를 커버할 수 없다는 한계</strong>를
        극복하기 위해 KIT는 매 프로젝트마다 따로 설치되고 그 컨텍스트에 맞게 최적화됩니다.
      </Callout>
    </SlideShell>
  );
}

function Phase({
  tag,
  title,
  items,
  active,
  spanFull,
}: {
  tag: string;
  title: string;
  items: string[];
  active?: boolean;
  spanFull?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border p-4 transition ${
        spanFull ? "md:col-span-2" : ""
      } ${
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
          <span className="text-[9.5px] px-1.5 py-0.5 rounded font-bold tracking-wider uppercase bg-brand-400/30 text-brand-100">
            Current
          </span>
        )}
      </div>
      <p className={`font-semibold mb-2 text-[14px] ${active ? "text-slate-50" : "text-slate-200"}`}>
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
