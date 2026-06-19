import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCaseNotion() {
  return (
    <SlideShell
      number="15"
      eyebrow="USE CASE 4 · NOTION"
      title="PRD ↔ 코드 회고 자동 동기화"
      description="PR이 머지되면 PR이 가리키는 PRD 페이지에 “이 PR이 PRD 요구사항을 어떻게 충족했는지” 회고가 자동으로 코멘트됩니다. 분기 회고 자료가 자동 누적."
    >
      <CardGrid cols={2}>
        <Card title="🎯 목표 효용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>분기 회고 시 “PRD 대비 결과” 자동 정리</li>
            <li>PRD-구현 추적성(traceability) 확보</li>
            <li>AI 노하우 DB가 사례 누적으로 풍부해짐</li>
          </ul>
        </Card>
        <Card title="📋 필요 요소" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Notion Integration 토큰 (PMO 발급)</li>
            <li>
              PRD DB 표준 속성 (
              <span className="font-mono text-emerald-200">id, status, owner</span>)
            </li>
            <li>
              PR 본문 규칙:{" "}
              <span className="font-mono text-emerald-200">
                Closes PRD-2026-Q3-XXX
              </span>
            </li>
            <li>GitHub Action (Claude API + Notion API)</li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          셋업 절차 (소요 1일)
        </p>
        <Step n={1}>
          Notion에서 Internal Integration 생성 → 토큰 발급. PRD DB · AI 노하우 DB 두
          곳에 Integration 권한 부여.
        </Step>
        <Step n={2}>
          PRD DB 표준 속성 정의:{" "}
          <span className="font-mono text-brand-200">id (auto)</span>,{" "}
          <span className="font-mono text-brand-200">title</span>,{" "}
          <span className="font-mono text-brand-200">status</span>,{" "}
          <span className="font-mono text-brand-200">owner</span>,{" "}
          <span className="font-mono text-brand-200">prd_link</span>.
        </Step>
        <Step n={3}>
          PR 템플릿에 <strong>“Closes PRD-XXXX”</strong> 줄 의무화. 표준 레포 템플릿 PR
          템플릿에 반영.
        </Step>
        <Step n={4}>
          PR 머지 시 GitHub Action이 (a) PR diff·본문 수집, (b) PRD-XXXX의 Notion 페이지
          본문 fetch, (c) Claude에 충족도 평가 요청, (d) Notion 페이지에 회고 블록 + AI
          노하우 DB에 한 줄 사례 등록.
        </Step>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          샘플 프롬프트
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`시스템: 너는 PRD 대비 구현 결과를 회고하는 리뷰어다.

사용자:
[PRD 본문]
{prd_text}

[PR 변경 사항]
{pr_diff_summary}

다음 표를 마크다운으로 작성해라.
| 요구사항 | 충족 여부 | 근거 / 미충족 사유 |

마지막 줄에 "이번 작업의 핵심 노하우 1줄"을 적어라.
민감 정보가 발견되면 [REDACTED]로 마스킹.`}</pre>
      </div>

      <Callout variant="success" title="✓ 보너스">
        UC2(회의록)와 결합하면, 회의에서 결정된 사항이 PRD가 되고, PRD가 PR이 되고, PR
        회고가 다시 PRD에 누적되는 <strong>완전 폐회로</strong>가 됩니다. 4개 UC 중
        가장 늦게 완성되어도 가장 큰 가치를 만드는 항목.
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
