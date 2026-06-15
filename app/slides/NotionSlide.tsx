import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";

const dbs = [
  { name: "PRD DB", desc: "기능/과제 PRD" },
  { name: "AI 노하우 DB", desc: "프롬프트 · 사례 · 실패담" },
  { name: "프롬프트 템플릿", desc: "재사용 프롬프트" },
  { name: "회의록 DB", desc: "Meet 자동 요약" },
  { name: "ADR", desc: "아키텍처 결정 기록" },
];

export default function NotionSlide() {
  return (
    <SlideShell
      number="08"
      eyebrow="INTEGRATION · NOTION"
      title="Notion 연동"
      description="Notion은 “지식의 영구 저장소”입니다. PRD, 회의록, AI 노하우, 프롬프트 템플릿이 모두 여기서 끝납니다."
    >
      <BlockFlow
        items={[
          { num: "01", title: "DB 구축", sub: "5개 표준 DB" },
          { num: "02", title: "Claude ↔ Notion", sub: "Connectors / MCP" },
          { num: "03", title: "노하우 적재 자동화", sub: "/knowhow" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2.5">
        {dbs.map((d) => (
          <div
            key={d.name}
            className="rounded-xl glass p-3 hover:border-brand-400/40 transition"
          >
            <p className="text-[10px] font-mono uppercase tracking-wider text-brand-300">
              DB
            </p>
            <p className="mt-0.5 font-semibold text-slate-50 text-[13.5px]">
              {d.name}
            </p>
            <p className="text-[11.5px] text-slate-400 mt-0.5">{d.desc}</p>
          </div>
        ))}
      </div>

      <CardGrid cols={2}>
        <Card title="권한 모델" accent="brand">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>최상위 워크스페이스: 전사 멤버 = 편집자</li>
            <li>고객사 비공개 공간: 해당 프로젝트 그룹만 접근</li>
            <li>외부 게스트: PRD DB 읽기만 / AI 노하우 DB 접근 불가</li>
          </ul>
        </Card>
        <Card title="MCP 등록 (Claude Desktop)" accent="emerald">
          <pre className="code-block !text-[11px] !p-3 !leading-[1.55] mt-1">{`{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_API_KEY": "secret_..." }
    }
  }
}`}</pre>
        </Card>
        <Card title="① Connectors / MCP 연결" accent="brand">
          Claude의 <strong>Connectors → Notion</strong> 활성화 또는 Notion MCP
          서버를 Claude Desktop에 등록. 공용 계정으로 OAuth 인증.
        </Card>
        <Card title="② AI 노하우 적재 자동화" accent="emerald">
          매 PR/문서 작성 시 Slack 슬래시 커맨드{" "}
          <span className="font-mono text-emerald-200">/knowhow</span> 또는
          Notion 폼으로 “문제 / 시도한 프롬프트 / 결과 / 회고”를 1분 내 작성.
        </Card>
      </CardGrid>
    </SlideShell>
  );
}
