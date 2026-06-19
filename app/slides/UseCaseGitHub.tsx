import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function UseCaseGitHub() {
  return (
    <SlideShell
      number="14"
      eyebrow="USE CASE 3 · GITHUB"
      title="PR 자동 리뷰 — 30분 안에 1차 AI 리뷰"
      description="Premium 6석 + 표준 레포 템플릿 + Claude Code Action으로, PR이 열리면 자동으로 코드 스타일·보안·CLAUDE.md 룰 위반을 검출하고 인라인 코멘트로 답합니다."
    >
      <CardGrid cols={2}>
        <Card title="🎯 목표 효용" accent="brand">
          <ul className="list-disc pl-5 space-y-1">
            <li>사람 리뷰어의 1차 부담 약 30% 감소</li>
            <li>PR 평균 머지 시간 단축</li>
            <li>보안 회귀(시크릿 노출, SQL 인젝션 등) 자동 차단</li>
          </ul>
        </Card>
        <Card title="📋 필요 요소" accent="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-mono text-emerald-200">drimaes/repo-template</span>{" "}
              (CLAUDE.md, Action 워크플로 포함)
            </li>
            <li>Anthropic Console에서 워크플로용 API 키 1개 발급</li>
            <li>
              GitHub Secret{" "}
              <span className="font-mono text-emerald-200">ANTHROPIC_API_KEY</span> 등록
            </li>
          </ul>
        </Card>
      </CardGrid>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          셋업 절차 (소요 0.5일/레포)
        </p>
        <Step n={1}>
          기존 레포에 <span className="font-mono text-brand-200">CLAUDE.md</span>(프로젝트
          헌법) 추가. 빌드/테스트 명령, 커밋 룰, 도메인 용어 명시.
        </Step>
        <Step n={2}>
          레포 Settings → Secrets →{" "}
          <span className="font-mono text-brand-200">ANTHROPIC_API_KEY</span> 등록 (PMO가
          발급).
        </Step>
        <Step n={3}>
          <span className="font-mono text-brand-200">
            .github/workflows/claude-review.yml
          </span>{" "}
          추가 (아래 코드).
        </Step>
        <Step n={4}>
          테스트용 PR 1건 생성 → Claude 리뷰 코멘트 검증 → 룰을{" "}
          <span className="font-mono text-brand-200">CLAUDE.md</span>에 보강하며 정착.
        </Step>
      </div>

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-300 font-semibold mb-3">
          .github/workflows/claude-review.yml
        </p>
        <pre className="overflow-x-auto rounded-lg bg-ink-950/85 border border-brand-500/20 p-3.5 text-[11.5px] leading-relaxed text-slate-200 font-mono whitespace-pre">{`name: Claude PR Review
on:
  pull_request:
    types: [opened, synchronize, reopened]
permissions:
  contents: read
  pull-requests: write
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          mode: review
          guidelines_file: CLAUDE.md
          comment_style: inline
          severity_threshold: medium`}</pre>
      </div>

      <Callout variant="danger" title="🚫 시크릿 가드">
        <span className="font-mono text-rose-200">.env</span>, API 키, 인증서, 고객사
        비공개 사양 커밋 금지. 표준 레포 템플릿에{" "}
        <span className="font-mono text-rose-200">gitleaks</span> pre-commit 훅 기본
        내장.
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
