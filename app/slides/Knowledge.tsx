import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Knowledge() {
  return (
    <SlideShell
      number="16"
      eyebrow="KNOWLEDGE · 공유 KPI"
      title="지식 공유 룰 (가안)"
      description="Team Plan 전환 후, Slack @Claude 스레드와 공유 Projects가 자연스럽게 지식 자산이 됩니다. 아래 6가지 룰과 KPI는 출발점 가안입니다."
    >
      <Callout variant="info" title="ℹ 가안 · 자율 변경 가능">
        본 슬라이드의 6가지 룰과 KPI는 이해를 돕기 위한{" "}
        <strong className="text-brand-200">예시(가안)</strong>입니다. 운영하면서
        팀 단위로 자율적으로 추가·변경·삭제할 수 있으며, 변경 사항은{" "}
        <span className="font-mono text-brand-200">#ai-governance</span>에
        공유해 주세요.
      </Callout>

      <CardGrid cols={3}>
        <Card title="① 1 PR = 1 노하우" badge="자동" icon="◆" accent="brand">
          UC4 자동화로 PRD에 회고 + AI 노하우 DB에 1줄 사례 자동 등록.
        </Card>
        <Card title="② 매주 금 16:00 회고" badge="주간" icon="⏱" accent="emerald">
          Slack <span className="font-mono text-emerald-200">#ai-knowhow</span>에
          폼 자동 발송. 누구나 자유롭게 작성.
        </Card>
        <Card title="③ 월 1회 사내 데모데이" badge="월간" icon="◇" accent="brand">
          UC별 가장 좋은 사례/실패담 15분씩 발표.
        </Card>
        <Card title="④ 분기 거버넌스 리뷰" badge="분기" icon="✱" accent="amber">
          좌석 등급 재평가, 룰 개정, Phase 진입 결정. PMO 주관.
        </Card>
        <Card title="⑤ 프롬프트 자산화" badge="DB" icon="⇄" accent="emerald">
          재사용 프롬프트는 Notion 템플릿 DB에 등록. 사용 횟수/성공률 태깅.
        </Card>
        <Card title="⑥ 외부 자료 출처 표기" badge="규정" icon="◈" accent="slate">
          외부 블로그/문서 인용 시 출처와 라이선스 함께 적재.
        </Card>
      </CardGrid>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <KpiBox value="100%" label="PR → 노하우 적재율 (목표)" />
        <KpiBox value="16 / 16" label="좌석별 주간 회고 작성" />
        <KpiBox value="4+" label="월간 데모데이 발표 / UC" />
      </div>

      <p className="text-[11.5px] text-slate-500 leading-relaxed">
        ※ KPI 수치도 출발점 제안값입니다. 운영해보고 너무 빡빡하거나 느슨하면
        리뷰에서 조정합니다.
      </p>
    </SlideShell>
  );
}

function KpiBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl glass p-5 text-center relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl pointer-events-none" />
      <p className="relative text-3xl font-extrabold gradient-text">{value}</p>
      <p className="relative mt-1.5 text-xs text-slate-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
