import SlideShell from "@/app/components/SlideShell";
import BlockFlow from "@/app/components/BlockFlow";
import { Card, CardGrid } from "@/app/components/Card";
import Callout from "@/app/components/Callout";

const channels = [
  { name: "#ai-announcement", desc: "공지 · 가이드 링크 고정", color: "brand" },
  { name: "#ai-governance", desc: "룰 · 이슈 · 개정 제안", color: "amber" },
  { name: "#ax-stream", desc: "Claude 결과 자동 게시", color: "emerald" },
  { name: "#ai-{account}", desc: "계정별 점유/이슈", color: "slate" },
  { name: "#ai-knowhow", desc: "주간 노하우 공유", color: "violet" },
];

const colorClasses: Record<string, string> = {
  brand: "bg-brand-500/15 text-brand-200 border-brand-400/30",
  amber: "bg-amber-500/15 text-amber-200 border-amber-400/30",
  emerald: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  slate: "bg-slate-500/15 text-slate-200 border-slate-400/30",
  violet: "bg-violet-500/15 text-violet-200 border-violet-400/30",
};

export default function SlackSlide() {
  return (
    <SlideShell
      number="07"
      eyebrow="INTEGRATION · SLACK"
      title="Slack 연동"
      description="Slack은 “질문 던지면 Claude가 답하고, 그 답이 자산이 되는” 허브입니다. 공식 Claude Slack 앱과 워크플로우를 함께 씁니다."
    >
      <BlockFlow
        items={[
          { num: "01", title: "채널 표준화", sub: "5개 베이스 채널" },
          { num: "02", title: "Claude 앱 설치", sub: "App Directory" },
          { num: "03", title: "AX-Stream 자동 게시", sub: "Webhook" },
          { num: "04", title: "DLP / 민감정보 차단", sub: "Nightfall" },
        ]}
      />

      <div className="rounded-2xl glass p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
          채널 표준
        </p>
        <div className="flex flex-wrap gap-2">
          {channels.map((c) => (
            <div
              key={c.name}
              className={`rounded-lg border px-3 py-2 ${colorClasses[c.color]}`}
            >
              <p className="font-mono font-semibold text-[13px]">{c.name}</p>
              <p className="text-[11.5px] opacity-80">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CardGrid cols={2}>
        <Card title="① Claude 공식 Slack 앱" accent="brand">
          App Directory에서 <strong>Claude</strong> 설치 → 공용 계정으로 인증.
          채널에 <span className="font-mono text-brand-200">@Claude</span> 멘션
          또는 DM으로 사용. 답변에 사용된 컨텍스트는 채널 전체가 볼 수 있어 자동
          공유 효과.
        </Card>
        <Card title="② AX-Stream 자동 게시" accent="emerald">
          GitHub Action / Notion Webhook이 PR 머지·문서 작성 시 요약을{" "}
          <span className="font-mono text-emerald-200">#ax-stream</span>에
          게시. Workflow Builder로 “이번 주 노하우” 폼을 매주 금요일 16:00 자동.
        </Card>
        <Card title="③ DLP / 민감정보" accent="rose">
          Slack DLP(또는 Nightfall, Polymer 등)로 비밀번호·토큰 자동 마스킹.{" "}
          <span className="font-mono">#ax-stream</span>은 외부 게스트 초대 금지.
        </Card>
        <Card title="④ 권장 패턴" accent="emerald">
          개인 DM에서 Claude를 부르지 말고 <strong>가능한 채널에서 멘션</strong>.
          한 사람의 답변이 곧 모두의 위키.
        </Card>
      </CardGrid>

      <Callout variant="success" title="원칙">
        “DM은 휘발, 채널은 자산.” Claude와의 대화 자체가 사내 위키입니다.
      </Callout>
    </SlideShell>
  );
}
