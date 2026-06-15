import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";

export default function Knowledge() {
  return (
    <SlideShell
      number="10"
      eyebrow="KNOWLEDGE · 공유 KPI"
      title="지식 공유 룰"
      description="공용 계정의 가장 큰 이유는 “지식의 공유화”입니다. 다음 6가지는 운영 KPI로 추적합니다."
    >
      <CardGrid cols={3}>
        <Card title="① 1 PR = 1 노하우" badge="자동" icon="◆" accent="brand">
          머지된 모든 PR은 AI 노하우 DB에 한 줄 회고를 남깁니다.
        </Card>
        <Card title="② 매주 금 16:00 회고" badge="주간" icon="⏱" accent="emerald">
          Slack <span className="font-mono text-emerald-200">#ai-knowhow</span>에
          폼 자동 발송. 각 계정의 초기 할당자가 1차 작성, 공동 사용자가 보강.
        </Card>
        <Card title="③ 월 1회 사내 데모데이" badge="월간" icon="◇" accent="brand">
          계정별 가장 좋은 사례/실패담 15분씩 발표.
        </Card>
        <Card title="④ 분기 거버넌스 리뷰" badge="분기" icon="✱" accent="amber">
          계정 재배분, 룰 개정, 신규 통합 결정. PMO 주관.
        </Card>
        <Card title="⑤ 프롬프트 자산화" badge="DB" icon="⇄" accent="emerald">
          재사용 프롬프트는 Notion 템플릿 DB에 등록. 사용 횟수/성공률 태깅.
        </Card>
        <Card title="⑥ 외부 자료 출처 표기" badge="규정" icon="◈" accent="slate">
          외부 블로그/문서 인용 시 출처와 라이선스 함께 적재.
        </Card>
      </CardGrid>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <KpiBox value="100%" label="PR → 노하우 적재율" />
        <KpiBox value="9 / 9" label="공용 계정 주간 회고 작성" />
        <KpiBox value="1+" label="월간 데모데이 발표 / 계정" />
      </div>
    </SlideShell>
  );
}

function KpiBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl glass p-5 text-center relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl" />
      <p className="relative text-3xl font-extrabold gradient-text">{value}</p>
      <p className="relative mt-1.5 text-xs text-slate-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
