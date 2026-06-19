import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCaseSlack() {
  return (
    <SlideShell
      number="12"
      eyebrow="USE CASE 1 · SLACK"
      title="Daily 비동기 요약 — “30분 회의 → 5분 리뷰”"
      description="매일 아침 09:00, 어제 18시 이후 프로젝트 채널 활동을 Claude가 자동 요약해 #daily-standup-bot에 게시합니다. 출근 후 5분 안에 어제 상황·블로커·우선순위를 파악할 수 있습니다."
    >
      <CardGrid cols={2}>
        <Card title="🎯 목표 효용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              주간 동기 회의 시간{" "}
              <strong className="text-slate-100">5명 × 30분 × 5일 ≈ 12.5시간</strong>{" "}
              절감
            </li>
            <li>비동기 정보 동기화로 시간대 다른 멤버 포함</li>
            <li>채널 히스토리 자동 자산화</li>
          </ul>
        </Card>
        <Card title="📋 필요 요소" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Team 어드민의 Slack OAuth 1회</li>
            <li>Workflow Builder (Slack 기본)</li>
            <li>
              <span className="font-mono text-emerald-200">#daily-standup-bot</span>{" "}
              채널 신규 생성
            </li>
            <li>
              프로젝트 채널 명명 규칙:{" "}
              <span className="font-mono text-emerald-200">
                {`#proj-{name}`}
              </span>
            </li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          셋업 절차 (소요 0.5일)
        </p>
        <Step n={1}>
          <strong>Team 어드민 콘솔 → Apps → Slack OAuth 인증.</strong> 16명 좌석 모두
          자동 연결.
        </Step>
        <Step n={2}>
          Slack에서{" "}
          <span className="font-mono text-brand-200">#daily-standup-bot</span> 채널
          생성, Claude 앱 초대.
        </Step>
        <Step n={3}>
          Workflow Builder → 매일 09:00 자동 트리거 워크플로 생성. 액션은 “Send a
          message” → <span className="font-mono text-brand-200">@Claude</span> 멘션 +
          아래 프롬프트.
        </Step>
        <Step n={4}>
          <strong>Day 1 시범 실행</strong> → 결과 검토 → 프롬프트 1회 튜닝 → Day 2부터
          정상 운영.
        </Step>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          샘플 프롬프트
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`@Claude #proj-roboticsv #proj-drimsim #proj-app
어제 18:00 이후 위 채널들에 게시된 메시지를 모아서
3개 섹션으로 요약해줘:
① 진행 상황 (불릿 5개 이내)
② 결정/합의 사항
③ 블로커 및 도움 필요한 사항

마지막 줄에 "오늘 우선순위 제안 1줄"을 추가.
민감 정보(고객사명, 비밀번호 등)가 보이면
[REDACTED]로 마스킹.`}</pre>
      </div>

      <Callout variant="success" title="✓ 측정 지표 (2주차 회고)">
        ① 채널 메시지 양 vs 요약 길이의 압축률, ② 회고에서 “이미 알고 있던 정보” 응답률,
        ③ 동기 회의 시간 변동.
      </Callout>
    </SlideShell>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start py-2 px-3.5 rounded-lg bg-ink-800/50 border border-slate-800/60 mb-1.5 last:mb-0">
      <span className="shrink-0 grid place-items-center h-6 w-6 rounded-md bg-brand-500/20 text-brand-200 font-mono text-[11px] font-bold ring-1 ring-brand-400/30">
        {n}
      </span>
      <div className="flex-1 text-[13px] text-slate-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
