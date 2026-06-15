import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";

export default function AxWorkflow() {
  return (
    <SlideShell
      number="05"
      eyebrow="AX WORKFLOW"
      title="AX 워크플로우 5단계"
      description="모든 작업은 PRD → 사전 MD → Claude 작업 → 리뷰 → 공유의 5단계로 진행합니다. AX는 결과물뿐 아니라 “어떻게 만들었는지”를 함께 자산화합니다."
    >
      <BlockFlow
        items={[
          { num: "01", title: "PRD 작성", sub: "Notion 템플릿" },
          { num: "02", title: "사전 MD 셋업", sub: "CLAUDE.md / .claude" },
          { num: "03", title: "Claude 설계·구현", sub: "PR 분할 작업" },
          { num: "04", title: "사람 + AI 리뷰", sub: "GitHub Action" },
          { num: "05", title: "결과 공유", sub: "Slack · Notion 자동" },
        ]}
      />

      <CardGrid cols={3}>
        <Card title="① PRD" badge="Notion" accent="brand">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>배경/문제/사용자/지표</li>
            <li>Scope · Out of scope</li>
            <li>주요 시나리오, 비기능</li>
            <li>마일스톤, 책임자, 검수 기준</li>
          </ul>
        </Card>
        <Card title="② 사전 MD 셋업" badge="Repo" accent="brand">
          <ul className="list-disc pl-5 space-y-0.5">
            <li><span className="font-mono text-brand-300">CLAUDE.md</span> — 프로젝트 헌법</li>
            <li><span className="font-mono text-brand-300">.claude/agents/*.md</span></li>
            <li><span className="font-mono text-brand-300">docs/architecture.md</span></li>
            <li><span className="font-mono text-brand-300">docs/glossary.md</span></li>
          </ul>
        </Card>
        <Card title="③ Claude 설계·구현" badge="Loop" accent="emerald">
          <p>“질문 → 설계 → 구현 → 자체 리뷰” 루프. 큰 변경은 PR 분할.</p>
          <p className="mt-1">PR 본문에 <strong>Claude 사용 로그</strong>(어떤 프롬프트로 만들었는지) 첨부 필수.</p>
        </Card>
        <Card title="④ 사람 + Claude 리뷰" badge="PR" accent="amber">
          <p>GitHub Action으로 Claude 리뷰 자동 실행 → 사람이 최종 승인.</p>
          <p className="mt-1">보안/성능 PR은 사람 2인 승인.</p>
        </Card>
        <Card title="⑤ 결과 공유 + 노하우" badge="Auto" accent="emerald">
          <p>머지 시 <span className="font-mono text-emerald-200">#ax-stream</span>에 요약 자동 게시.</p>
          <p className="mt-1">Notion AI 노하우 DB에 1줄 회고 등록.</p>
        </Card>
        <Card title="📁 추천 디렉터리" badge="Template" accent="slate">
          <pre className="code-block !text-[11px] !p-3 !leading-[1.55] mt-1">{`my-repo/
├ CLAUDE.md
├ .claude/
│  ├ agents/*.md
│  └ commands/*.md
├ docs/
│  ├ prd/*.md
│  ├ architecture.md
│  ├ glossary.md
│  └ adr/0001-*.md
└ src/...`}</pre>
        </Card>
      </CardGrid>
    </SlideShell>
  );
}
