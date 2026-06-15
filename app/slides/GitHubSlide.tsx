import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function GitHubSlide() {
  return (
    <SlideShell
      number="09"
      eyebrow="INTEGRATION · GITHUB"
      title="GitHub 연동"
      description="개발 산출물의 단일 진실. Claude는 ‘초안 작성자 + 자동 리뷰어’로 활용합니다."
    >
      <BlockFlow
        items={[
          { num: "01", title: "표준 레포 템플릿", sub: "drimaes/repo-template" },
          { num: "02", title: "Claude Code CLI", sub: "공용 계정 로그인" },
          { num: "03", title: "PR 자동 리뷰", sub: "GitHub Action" },
          { num: "04", title: "GitHub MCP", sub: "Desktop / CLI" },
          { num: "05", title: "Branch & 커밋 룰", sub: "Conventional" },
        ]}
      />

      <CardGrid cols={2}>
        <Card title="① 조직 표준 레포 템플릿" accent="brand">
          <span className="font-mono text-brand-200">drimaes/repo-template</span>
          에 <code>CLAUDE.md</code>, PR/이슈 템플릿, 워크플로, ADR 폴더 내장.
          신규 프로젝트는 반드시 템플릿에서 포크.
        </Card>
        <Card title="② Claude Code (CLI)" accent="brand">
          개발자 로컬에 <span className="font-mono">claude</span> CLI 설치, 공용
          Claude 계정으로 로그인. 레포의 <code>CLAUDE.md</code>를 그대로 컨텍스트
          사용.
        </Card>
        <Card title="③ PR 자동 리뷰 Action" accent="emerald">
          <p className="mb-1.5">
            <span className="font-mono text-[11.5px]">.github/workflows/claude-review.yml</span>
          </p>
          <pre className="code-block !text-[10.5px] !p-3 !leading-[1.55]">{`name: Claude PR Review
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          mode: review
          guidelines_file: CLAUDE.md`}</pre>
        </Card>
        <Card title="④ GitHub MCP 서버" accent="emerald">
          Claude Desktop/Code에 GitHub MCP 등록 → 이슈 검색, 코드 검색, PR 코멘트가
          자연어로. 공용 계정 PAT(또는 GitHub App), 권한 최소(read + PR write).
        </Card>
        <Card title="⑤ Branch / 커밋 룰" accent="slate">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>
              브랜치:{" "}
              <span className="font-mono text-slate-200">feat/ID-{`<요약>`}</span>,{" "}
              <span className="font-mono text-slate-200">fix/...</span>,{" "}
              <span className="font-mono text-slate-200">docs/...</span>
            </li>
            <li>
              커밋: Conventional Commits (
              <span className="font-mono">feat:</span>,{" "}
              <span className="font-mono">fix:</span>)
            </li>
            <li>PR 본문 끝에 <strong>“Claude 사용 요약”</strong> 섹션 의무</li>
          </ul>
        </Card>
        <Card title="🛡 시크릿 가드" accent="rose">
          <span className="font-mono text-rose-200">.env</span>, API 키, 인증서,
          고객사 비공개 사양 커밋 금지.{" "}
          <span className="font-mono">git-secrets</span> /{" "}
          <span className="font-mono">gitleaks</span> pre-commit 훅 기본 내장.
        </Card>
      </CardGrid>

      <Callout variant="danger" title="시크릿 절대 금지">
        시크릿 누출은 발견 시 즉시 키 회전 + 사고 보고. 템플릿의 pre-commit 훅을
        절대 비활성화하지 마세요.
      </Callout>
    </SlideShell>
  );
}
