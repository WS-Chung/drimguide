import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCasesOverview() {
  return (
    <SlideShell
      number="11"
      eyebrow="FIRST USE CASES · 개요"
      title="전환 후 첫 1주, 4개 통합으로 만드는 즉시 효용"
      description="Team Plan 전환만으로는 가시적 효과가 부족합니다. 4개 도구마다 “1~2일 안에 셋업하고 즉시 결과가 보이는” 단일 유즈케이스를 정해 시작합니다."
    >
      <CardGrid cols={4}>
        <Card title="💬 UC1 · Slack" badge="D+1" accent="emerald">
          <p className="font-semibold text-slate-100">Daily 비동기 요약</p>
          <p className="mt-1">
            매일 아침 09:00 어제 프로젝트 채널 활동을 Claude가 5줄 요약. 30분 회의 →
            5분 비동기 리뷰.
          </p>
        </Card>
        <Card title="📅 UC2 · Workspace" badge="D+1" accent="brand">
          <p className="font-semibold text-slate-100">회의록 → Action Item</p>
          <p className="mt-1">
            Meet 회의 종료 30분 안에 액션 아이템 표가 Notion DB에 자동 등록.
          </p>
        </Card>
        <Card title="🔍 UC3 · GitHub" badge="D+2" accent="amber">
          <p className="font-semibold text-slate-100">PR 자동 리뷰</p>
          <p className="mt-1">
            모든 PR이 30분 안에 1차 AI 리뷰. 보안·스타일·성능·룰 위반 자동 검출.
          </p>
        </Card>
        <Card title="📝 UC4 · Notion" badge="D+3" accent="brand">
          <p className="font-semibold text-slate-100">PRD ↔ 코드 회고</p>
          <p className="mt-1">
            PR 머지 시 PRD 페이지에 “요구사항 충족 여부” 회고 자동 코멘트.
          </p>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          선정 기준
        </p>
        <CardGrid cols={3}>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">⏱ 즉시성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              셋업 1~2일, 결과는 다음 워킹데이부터 보임
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">📊 가시성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              팀 전체가 결과를 채널에서 즉시 확인
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100 text-[13.5px]">🔁 확장성</p>
            <p className="mt-1 text-[12.5px] text-slate-400 leading-relaxed">
              동일 패턴을 다른 프로젝트로 복제 쉬움
            </p>
          </div>
        </CardGrid>
      </div>

      <Callout variant="info" title="ℹ 운영 룰">
        UC 1~4 각각에 1명의 “Use Case Owner”를 지정합니다. 첫 2주는 데이터 수집기간이며,
        3주차 회고에서 효용 측정 후 정식 룰로 승격하거나 다른 UC로 교체합니다.{" "}
        <strong>본 슬라이드의 4개 UC도 가안</strong>이며, 팀 의견에 따라 자유롭게 조정
        가능.
      </Callout>
    </SlideShell>
  );
}
