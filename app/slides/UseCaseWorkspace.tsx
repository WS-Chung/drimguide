import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCaseWorkspace() {
  return (
    <SlideShell
      number="13"
      eyebrow="USE CASE 2 · GOOGLE WORKSPACE"
      title="회의록 → Action Item 자동 추출"
      description="Meet 회의 종료 30분 안에, 회의록 텍스트가 자동으로 Claude를 거쳐 액션 아이템 표 + 결정 사항 요약으로 Notion 회의록 DB에 들어갑니다."
    >
      <CardGrid cols={2}>
        <Card title="🎯 목표 효용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>회의록 정리 1시간 → 자동화 (검토만)</li>
            <li>액션 아이템 누락 0</li>
            <li>분기 회고 시 “결정 사항” 검색만으로 정리</li>
          </ul>
        </Card>
        <Card title="📋 필요 요소" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Workspace Business 이상 (Meet 자동 녹취)</li>
            <li>
              Drive 폴더{" "}
              <span className="font-mono text-emerald-200">
                /AI-Workspace/_meetings
              </span>
            </li>
            <li>Apps Script (또는 Make)</li>
            <li>Notion 회의록 DB + API 키</li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          셋업 절차 (소요 0.5~1일)
        </p>
        <Step n={1}>
          Google Admin → Meet 자동 녹취 활성화. 녹취 파일 저장 위치를{" "}
          <span className="font-mono text-brand-200">/AI-Workspace/_meetings</span>로
          통일.
        </Step>
        <Step n={2}>
          Apps Script로 새 파일 감지 트리거 작성. 새 회의록 발생 → Claude API 호출 →
          응답을 Notion API로 회의록 DB에 새 행 생성.
        </Step>
        <Step n={3}>
          <strong>액션 아이템 담당자 식별</strong>은 회의록 텍스트 안의 멤버 멘션을
          그대로 사용. 매핑이 필요하면 사내 임직원 표를 시스템 프롬프트에 첨부.
        </Step>
        <Step n={4}>
          담당자별로 Slack DM 알림 (선택) — Apps Script가 Notion 새 행 생성 시 Slack
          Webhook 호출.
        </Step>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          샘플 프롬프트 (Apps Script → Claude API)
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`시스템: 너는 회의록을 정리하는 비서다.
출력은 한국어, 다음 JSON 형식으로만 응답한다.

{
  "summary_5lines": ["...", "..."],
  "decisions": ["...", "..."],
  "action_items": [
    { "task": "...", "owner": "...",
      "due": "YYYY-MM-DD", "priority": "H|M|L" }
  ]
}

사용자: 아래는 회의록 전문이다. 위 형식으로 정리해라.
---
{회의록 본문}`}</pre>
      </div>

      <Callout variant="warn" title="⚠ 보안 체크">
        고객사 회의는 Restricted Drive 폴더에 저장하고, 자동화 파이프라인 대상에서
        제외. 또는 마스킹 사전 처리 후 Claude 호출.
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
