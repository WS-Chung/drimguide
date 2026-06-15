import SlideShell from "@/app/components/SlideShell";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

export default function Principles() {
  return (
    <SlideShell
      number="02"
      eyebrow="WHY · 도입 배경"
      title="우리가 지키는 6가지 원칙"
      description="회사 차원의 거버넌스를 단번에 적용하기 어려운 현실을 인정하고, 분야별 공용 계정으로 빠르게 시작합니다. 단, 지식 자산은 반드시 회사에 남도록 룰을 강제합니다."
    >
      <CardGrid cols={3}>
        <Card title="① 분야별 공용 계정" badge="Why" icon="◆" accent="brand">
          개발 2인 / 1계정, 기획·운영 7인 / 1계정. 초기 분야 지정 후 자유 이동.
        </Card>
        <Card title="② 회사 메일 강제 연결" badge="Must" icon="✱" accent="rose">
          공용 계정의 Google Workspace 이메일은 <strong>반드시</strong> 연결.
          결과물·이력의 회사 귀속을 위함.
        </Card>
        <Card title="③ 지식의 회사 귀속" badge="Why" icon="◇" accent="brand">
          개인 디바이스/개인 계정에 산출물 보관 금지. 모든 결과는 Notion · GitHub
          · Drive로.
        </Card>
        <Card title="④ AX 워크플로우 표준화" badge="How" icon="▶" accent="emerald">
          PRD, 사전 MD(<code className="text-brand-300">CLAUDE.md</code>) 셋업,
          프롬프트·리뷰 템플릿 표준화.
        </Card>
        <Card title="⑤ 공유의 자동화" badge="How" icon="⇄" accent="emerald">
          Slack/Notion/GitHub/Drive에 결과를 흘려보내는 동선. 매주 노하우 공유.
        </Card>
        <Card title="⑥ 보안과 책임" badge="Risk" icon="⚠" accent="amber">
          계정·MFA·세션은 PMO에서 관리. 외부 코드 업로드는 사내 정책 준수.
        </Card>
      </CardGrid>

      <Callout variant="warn" title="현실 인정 — MVP Governance">
        본 가이드는 “완성된 거버넌스”가 아닌, 최소 실행 가능한 거버넌스입니다.
        운영하면서 부족한 부분은{" "}
        <span className="font-mono text-amber-200">#ai-governance</span> 채널과
        분기 리뷰로 보강합니다.
      </Callout>
    </SlideShell>
  );
}
